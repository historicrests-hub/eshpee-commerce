import type { Metadata } from 'next';

import Prose from 'components/prose';

export const metadata: Metadata = {
  title: 'How It Works',
  description:
    'Eshpee.com is a global fashion brand offering stylish, comfortable, and affordable clothing. Through our platform eshpee.com, we deliver high-quality shirts, jeans, and pants worldwide.',
  openGraph: {
    title: 'How It Works',
    description:
      'Eshpee LLC is a global fashion brand offering stylish, comfortable, and affordable clothing. Through our platform eshpee.com, we deliver high-quality shirts, jeans, and pants worldwide.',
    type: 'article'
  }
};

export default async function Page() {
  return (
    <>
      <h1 className="mb-8 text-5xl font-bold">How It Works</h1>
      <Prose className="mb-8">
        <div>
          <ul className="my-5 list-decimal pl-8">
            <li>
              Browse Products: Visit our shop and choose from templates or blockchain-based tools
            </li>
            <li>Checkout: Complete payment securely via Lemon Squeezy</li>
            <li>Access: You’ll receive GitHub access or a direct download link via email</li>
            <li>Support: Get 1 year of free support for issues or questions</li>
          </ul>

          <h2 className="mb-5">Delivery Info</h2>
          <ul className="my-5 list-disc pl-8">
            <li>Products are delivered via email with GitHub access or download link</li>
            <li>Typically within a few hours of purchase</li>
          </ul>

          <h2 className="mb-5">Product Access Instructions</h2>
          <ul className="my-5 list-disc pl-8">
            <li>Watch for an email granting GitHub repo access</li>
            <li>If no email within 12 hours, contact: support@aptiverse.shop</li>
          </ul>

          <h2 className="mb-5">Refund Policy Reminder</h2>
          <ul className="my-5 list-disc pl-8">
            <li>Refunds only if product is broken or not downloaded within 24 hours of purchase</li>
          </ul>
        </div>
      </Prose>
      <p className="text-sm italic">
        {`This document was last updated on ${new Intl.DateTimeFormat(undefined, {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }).format(new Date('2025-04-28T14:30:00.000Z'))}.`}
      </p>
    </>
  );
}
