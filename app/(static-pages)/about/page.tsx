import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Eshpee LLC is a global fashion brand offering stylish, comfortable, and affordable clothing. Through our platform eshpee.com, we deliver high-quality shirts, jeans, and pants worldwide.',
  openGraph: {
    title: 'About',
    description:
      'Eshpee LLC is a global fashion brand offering stylish, comfortable, and affordable clothing. Through our platform eshpee.com, we deliver high-quality shirts, jeans, and pants worldwide.',
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
      <h1 className="mb-6 text-4xl font-bold">About Eshpee LLC</h1>

      <Section title="Who We Are">
        <p>
          Eshpee LLC is a global fashion brand offering stylish, comfortable, and affordable
          clothing. Through our platform eshpee.com, we deliver high-quality shirts, jeans, and
          pants worldwide.
        </p>
      </Section>

      <Section title="Our Mission">
        <p>To make fashion accessible, affordable, and reliable for everyone around the world.</p>
      </Section>

      <Section title="What We Offer">
        <ul className="ml-6 list-disc">
          <li>Modern shirts</li>
          <li>Durable jeans</li>
          <li>Stylish pants</li>
        </ul>
      </Section>

      <Section title="Why Choose Us">
        <ul className="ml-6 list-disc">
          <li>Worldwide shipping</li>
          <li>Affordable pricing</li>
          <li>Trend-focused designs</li>
          <li>Customer-first approach</li>
        </ul>
      </Section>
    </div>
  );
}
