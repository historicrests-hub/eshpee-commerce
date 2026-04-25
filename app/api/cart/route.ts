// app/api/cart/route.ts
import { redirectToCheckout } from 'components/cart/actions';
import { NextResponse } from 'next/server';

export async function GET() {
  const cart = await redirectToCheckout();
  return NextResponse.json({ cart });
}
