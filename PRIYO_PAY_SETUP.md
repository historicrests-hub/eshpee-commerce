# Priyo Pay Integration Guide

## Overview

This application now uses **Priyo Pay** for payment processing through the Payment Links API.

## Configuration

### 1. Environment Variables

Add the following to your `.env` file:

```env
# Priyo Pay API Configuration
PRIYO_PAY_API_KEY=YOUR_ACTUAL_API_KEY_HERE
NEXT_PUBLIC_PRIYO_PAY_REDIRECT_URL=https://yourdomain.com/success
```

**Important Security Notes:**

- Keep `PRIYO_PAY_API_KEY` confidential - never expose it in client-side code
- The API key should only be used on the server (backend)
- Update `NEXT_PUBLIC_PRIYO_PAY_REDIRECT_URL` for your production domain

### 2. Setup Instructions

1. **Get your API credentials:**

   - Log in to your Priyo Pay merchant dashboard
   - Generate your API key from the settings
   - Copy the API key and add it to your `.env` file

2. **Set redirect URL:**

   - The success page is located at `/app/(static-pages)/success/page.tsx`
   - Update `NEXT_PUBLIC_PRIYO_PAY_REDIRECT_URL` to point to your domain's success page

3. **Restart the development server:**
   ```bash
   npm run dev
   # or
   pnpm dev
   ```

## How It Works

### Payment Flow

1. User adds items to cart and clicks "Proceed to Checkout"
2. Cart modal calls `/api/payment/priyo-pay` endpoint
3. API creates a payment link with Priyo Pay API
4. Customer is redirected to Priyo Pay's payment page
5. After successful payment, customer is redirected to the success page

### API Endpoint: `POST /api/payment/priyo-pay`

**Request:**

- No body required (uses cart from cookies)

**Response:**

```json
{
  "success": true,
  "paymentLink": {
    "public_id": "uuid",
    "payment_link_url": "https://pay.priyo.com/...",
    "redirect_url": "https://yourdomain.com/success",
    "reference_id": "order-..."
  },
  "referenceId": "order-..."
}
```

**Error Response:**

```json
{
  "error": "Error description"
}
```

## Testing

### Development Testing

1. Start your dev server: `pnpm dev`
2. Add items to your cart
3. Click "Proceed to Checkout"
4. You should be redirected to Priyo Pay's payment page
5. Use test payment methods provided by Priyo Pay

### Important

- Use **sandbox/test API credentials** for development
- Switch to production API key and URL when deploying to production
- Test all payment methods supported by Priyo Pay

## Troubleshooting

### "Priyo Pay API key not configured"

- Check that `PRIYO_PAY_API_KEY` is set in `.env`
- Restart the dev server after adding env variables
- Ensure the key is valid and not expired

### "No cart found" error

- Add at least one item to your cart
- Ensure cookies are enabled in your browser
- Check browser DevTools → Application → Cookies

### Payment link not loading

- Verify your internet connection
- Check browser console for errors
- Ensure `PRIYO_PAY_API_KEY` is correct
- Verify Priyo Pay API is accessible

### Redirect not working after payment

- Check that `NEXT_PUBLIC_PRIYO_PAY_REDIRECT_URL` is correct
- Ensure the success page route exists
- Check browser console for redirect errors

## API Reference

For complete API documentation, refer to the Priyo Pay Payment Links API:

- **Base URL:** https://payapi.priyo.com
- **Create Payment Link:** `POST /merchant/payment-links/`
- **List Payment Links:** `GET /merchant/payment-links/`
- **Get Payment Link:** `GET /merchant/payment-links/{public_id}/`

## Security Best Practices

1. ✅ API key stored in `.env` (not in code)
2. ✅ API calls made from server-side only
3. ✅ No sensitive data in URLs
4. ✅ HTTPS recommended for production
5. ✅ Keep `PRIYO_PAY_API_KEY` confidential

## Migration Notes

- Removed Paddle payment integration
- Removed `@paddle/paddle-js` dependency
- All payment processing now through Priyo Pay
- Cart flow remains the same

## Support

For issues or questions:

- Priyo Pay Support: support@priyo.com
- API Documentation: https://payapi.priyo.com (from provided docs)
