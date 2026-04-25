# Priyo Pay Integration - Quick Setup Checklist

## Pre-Launch Checklist

### Step 1: Configure API Key
- [ ] Get your Priyo Pay API key from dashboard
- [ ] Update `.env`:
  ```env
  PRIYO_PAY_API_KEY=your_actual_api_key_here
  ```
- [ ] Do NOT commit real API keys to git
- [ ] Create `.env.local` for secrets (add to `.gitignore`)

### Step 2: Configure Redirect URL
- [ ] Update `.env` redirect URL:
  - **Development:** `http://localhost:3001/success` (already set)
  - **Production:** `https://yourdomain.com/success`
- [ ] Verify success page exists at `app/(static-pages)/success/page.tsx`

### Step 3: Install Dependencies
- [ ] Run `pnpm install` to update packages
- [ ] Verify `@paddle/paddle-js` is removed from `node_modules`

### Step 4: Test Integration
- [ ] Start dev server: `pnpm dev`
- [ ] Add product to cart
- [ ] Click "Proceed to Checkout"
- [ ] Verify redirect to Priyo Pay payment page
- [ ] Check browser console for any errors

### Step 5: Test Payment Flow (Sandbox)
- [ ] Use Priyo Pay test payment methods
- [ ] Complete test payment
- [ ] Verify redirect to success page
- [ ] Check order reference in logs

### Step 6: Production Deployment
- [ ] Update `.env` with production API key
- [ ] Update `NEXT_PUBLIC_PRIYO_PAY_REDIRECT_URL` to production domain
- [ ] Set `PRIYO_PAY_API_KEY` as environment variable in hosting platform
- [ ] Deploy application
- [ ] Test with real payment methods (use test mode if available)
- [ ] Monitor payment logs

## Troubleshooting Quick Reference

| Issue | Solution |
|-------|----------|
| "API key not configured" | Check `.env` has `PRIYO_PAY_API_KEY`, restart server |
| "No cart found" | Add item to cart, ensure cookies enabled |
| Not redirecting to payment | Check Priyo Pay API status, verify API key is valid |
| Stuck on payment page | Clear browser cache, check network errors in DevTools |
| Redirect fails after payment | Verify success page route, check redirect URL in `.env` |

## File Locations

```
.
├── app/
│   ├── (static-pages)/success/page.tsx      ← Success page
│   └── api/payment/priyo-pay/route.ts       ← Payment API
├── components/cart/modal.tsx                ← Checkout button
├── .env                                     ← Configuration
├── PRIYO_PAY_SETUP.md                      ← Full guide
└── INTEGRATION_SUMMARY.md                  ← What changed
```

## Environment Variables Summary

```env
# Required - Get from Priyo Pay dashboard
PRIYO_PAY_API_KEY=your_api_key_here

# Required - URL to redirect after payment
NEXT_PUBLIC_PRIYO_PAY_REDIRECT_URL=http://localhost:3001/success
```

## Development vs Production

| Aspect | Development | Production |
|--------|-------------|------------|
| API Key | Test/Sandbox key | Production key |
| Redirect URL | `http://localhost:3001/success` | `https://yourdomain.com/success` |
| Payment Methods | Test cards | Real payment methods |
| HTTPS | Optional | Required |
| Logging | Verbose | Production-safe |

## Quick Commands

```bash
# Start development
pnpm dev

# Build for production
pnpm build

# Check for errors
pnpm prettier:check

# Install dependencies
pnpm install
```

## API Endpoint

**POST** `/api/payment/priyo-pay`

No request body needed - uses cart from cookies.

Response includes payment link URL for redirect.

## Security Checklist

- [ ] API key never committed to git
- [ ] API key only in server-side code
- [ ] `.env` added to `.gitignore` (usually already done)
- [ ] HTTPS enforced in production
- [ ] Environment secrets set in hosting platform
- [ ] No API key in error messages shown to users
- [ ] Payment data handled securely

## Support Resources

- **Documentation:** `PRIYO_PAY_SETUP.md`
- **Integration Summary:** `INTEGRATION_SUMMARY.md`
- **Priyo Pay Support:** support@priyo.com
- **API Docs:** https://payapi.priyo.com

---

**Last Updated:** April 25, 2026
