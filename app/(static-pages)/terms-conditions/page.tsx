import type { Metadata } from 'next';

const termsPageBody =
  'Review the terms governing your use of Aptiverse, purchases, intellectual property, and legal rights.';
const bodySummary = `${termsPageBody.slice(0, 100)}...`;

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: bodySummary,
  openGraph: {
    title: 'Terms & Conditions',
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
      <h1 className="mb-6 text-4xl font-bold">Terms & Conditions</h1>

      <Section title="Use of Website">
        <p>By using eshpee.com, you agree to comply with all terms and policies.</p>
      </Section>

      <Section title="Orders">
        <p>We reserve the right to cancel or refuse any order at our discretion.</p>
      </Section>

      <Section title="Pricing">
        <p>Prices may change without notice and are shown in USD for international customers.</p>
      </Section>

      <Section title="Liability">
        <p>Eshpee LLC is not liable for indirect damages or delays beyond our control.</p>
      </Section>
    </div>
  );
}
