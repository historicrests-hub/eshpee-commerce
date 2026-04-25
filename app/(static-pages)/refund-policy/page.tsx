import type { Metadata } from 'next';

const termsPageBody =
  "Learn about Eshpee LLC's refund policy, including return eligibility, refund processing times, and non-refundable items when shopping on eshpee.com.";
const bodySummary = `${termsPageBody.slice(0, 100)}...`;

export const metadata: Metadata = {
  title: 'Refund Policy',
  description: bodySummary,
  openGraph: {
    title: 'Refund Policy',
    description: bodySummary,
    type: 'article'
  }
};
const Section = ({ title, children }: any) => (
  <section className="mb-10">
    <h2 className="mb-3 text-2xl font-semibold">{title}</h2>
    <div className="space-y-2 leading-relaxed text-gray-300">{children}</div>
  </section>
);

export default async function Page() {
  return (
    <div className="mx-auto max-w-4xl p-6">
      <h1 className="mb-6 text-4xl font-bold">Refund Policy</h1>

      <Section title="Returns">
        <p>Customers can request returns within 7 days of receiving the product.</p>
      </Section>

      <Section title="Eligibility">
        <ul className="ml-6 list-disc">
          <li>Unused and unworn items</li>
          <li>Original packaging</li>
        </ul>
      </Section>

      <Section title="Refunds">
        <p>Refunds are processed within 5-10 business days after approval.</p>
      </Section>

      <Section title="Non-Refundable">
        <p>Shipping fees and used items are not refundable.</p>
      </Section>
    </div>
  );
}
