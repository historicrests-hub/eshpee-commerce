import { getCart } from 'lib/prodigy';
import { cookies } from 'next/headers';

const PRIYO_PAY_API_KEY = process.env.PRIYO_PAY_API_KEY;
const PRIYO_PAY_BASE_URL = 'https://payapi.priyo.com';
const REDIRECT_URL = process.env.NEXT_PUBLIC_PRIYO_PAY_REDIRECT_URL;

interface PriyoPayItem {
  description: string;
  amount_cents: number;
  quantity: number;
}

interface PriyoPayResponse {
  public_id?: string;
  id?: string;
  payment_link_url?: string;
  redirect_url?: string;
  reference_id?: string;
  url?: string;
  [key: string]: any;
}

export async function POST(request: Request) {
  try {
    if (!PRIYO_PAY_API_KEY) {
      return Response.json({ error: 'Priyo Pay API key not configured' }, { status: 500 });
    }

    if (!REDIRECT_URL) {
      return Response.json(
        { error: 'Priyo Pay redirect URL not configured' },
        { status: 500 }
      );
    }

    const cartId = (await cookies()).get('cartId')?.value;
    if (!cartId) {
      return Response.json({ error: 'No cart found' }, { status: 400 });
    }

    const cart = await getCart(cartId);
    if (!cart || cart.lines.length === 0) {
      return Response.json({ error: 'Cart is empty' }, { status: 400 });
    }

    // Validate cart total
    const totalAmount = Number(cart.cost.totalAmount.amount);
    if (totalAmount < 10) {
      // Priyo Pay minimum is 1000 cents ($10)
      return Response.json({ error: 'Cart total must be at least $10' }, { status: 400 });
    }

    // Convert cart items to Priyo Pay format
    const items: PriyoPayItem[] = cart.lines.map((line) => ({
      description: `${line.merchandise.product.title}${line.merchandise.title !== 'Default Title' ? ` - ${line.merchandise.title}` : ''}`,
      amount_cents: Math.round(Number(line.cost.totalAmount.amount) * 100), // Convert to cents
      quantity: line.quantity
    }));

    // Generate unique reference ID
    const referenceId = `order-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

    // Create payment link via Priyo Pay API
    const response = await fetch(`${PRIYO_PAY_BASE_URL}/merchant/payment-links/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': PRIYO_PAY_API_KEY
      },
      body: JSON.stringify({
        reference_id: referenceId,
        redirect_url: REDIRECT_URL,
        currency: cart.cost.totalAmount.currencyCode?.toLowerCase() || 'usd',
        items
      })
    });

    if (!response.ok) {
      const errorText = await response.text();
      let errorMessage = 'Failed to create payment link';

      try {
        const errorJson = JSON.parse(errorText);
        errorMessage = errorJson.message || errorJson.error || errorText;
      } catch {
        errorMessage = errorText || errorMessage;
      }

      console.error('Priyo Pay API error:', errorMessage, 'Status:', response.status);
      return Response.json({ error: errorMessage }, { status: response.status });
    }

    const paymentLink: PriyoPayResponse = await response.json();

    // Determine the payment link URL from the response
    const paymentLinkUrl =
      paymentLink.payment_link_url ||
      paymentLink.url ||
      paymentLink.redirect_url ||
      (paymentLink.public_id ? `${PRIYO_PAY_BASE_URL}/pay/${paymentLink.public_id}` : null);

    if (!paymentLinkUrl) {
      console.error('No payment link URL in response:', paymentLink);
      return Response.json(
        { error: 'Invalid payment link response from Priyo Pay' },
        { status: 500 }
      );
    }

    return Response.json({
      success: true,
      paymentLink: {
        ...paymentLink,
        payment_link_url: paymentLinkUrl
      },
      referenceId
    });
  } catch (error) {
    console.error('Payment link creation error:', error);
    return Response.json(
      { error: error instanceof Error ? error.message : 'Failed to create payment link' },
      { status: 500 }
    );
  }
}

