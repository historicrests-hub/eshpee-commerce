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
    <h2 className="text-2xl font-semibold mb-3">{title}</h2>
    <div className="text-gray-300 leading-relaxed space-y-2">{children}</div>
  </section>
);

export default async function Page() {
  return (
  <div className="max-w-4xl mx-auto p-6">
    <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>

    <Section title="Information We Collect">
      <p>
        We collect personal details such as name, email, shipping address, and
        payment information to process orders.
      </p>
    </Section>

    <Section title="How We Use Information">
      <ul className="list-disc ml-6">
        <li>Process and deliver orders</li>
        <li>Improve user experience</li>
        <li>Send updates and promotions</li>
      </ul>
    </Section>

    <Section title="Data Protection">
      <p>
        We implement security measures to protect your personal data.
      </p>
    </Section>

    <Section title="Your Rights">
      <p>
        You may request access, correction, or deletion of your data anytime.
      </p>
    </Section>
  </div>
);
}
