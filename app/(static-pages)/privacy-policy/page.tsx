import type { Metadata } from 'next';

const termsPageBody =
  'Learn how Eshpee LLC collects, uses, and protects your personal information when you shop on eshpee.com.';
const bodySummary = `${termsPageBody.slice(0, 100)}...`;

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: bodySummary,
  openGraph: {
    title: 'Privacy Policy',
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
      <h1 className="mb-6 text-4xl font-bold">Privacy Policy</h1>

      <Section title="Information We Collect">
        <p>
          We collect personal details such as name, email, shipping address, and payment information
          to process orders.
        </p>
      </Section>

      <Section title="How We Use Information">
        <ul className="ml-6 list-disc">
          <li>Process and deliver orders</li>
          <li>Improve user experience</li>
          <li>Send updates and promotions</li>
        </ul>
      </Section>

      <Section title="Data Protection">
        <p>We implement security measures to protect your personal data.</p>
      </Section>

      <Section title="Your Rights">
        <p>You may request access, correction, or deletion of your data anytime.</p>
      </Section>
    </div>
  );
}
