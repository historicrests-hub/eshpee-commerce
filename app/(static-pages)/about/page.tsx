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
    <h2 className="text-2xl font-semibold mb-3">{title}</h2>
    <div className="text-gray-300 leading-relaxed space-y-2">{children}</div>
  </section>
);

export default async function Page() {
  return (
  <div className="max-w-4xl mx-auto p-6">
    <h1 className="text-4xl font-bold mb-6">About Eshpee LLC</h1>

    <Section title="Who We Are">
      <p>
        Eshpee LLC is a global fashion brand offering stylish, comfortable,
        and affordable clothing. Through our platform eshpee.com, we deliver
        high-quality shirts, jeans, and pants worldwide.
      </p>
    </Section>

    <Section title="Our Mission">
      <p>
        To make fashion accessible, affordable, and reliable for everyone
        around the world.
      </p>
    </Section>

    <Section title="What We Offer">
      <ul className="list-disc ml-6">
        <li>Modern shirts</li>
        <li>Durable jeans</li>
        <li>Stylish pants</li>
      </ul>
    </Section>

    <Section title="Why Choose Us">
      <ul className="list-disc ml-6">
        <li>Worldwide shipping</li>
        <li>Affordable pricing</li>
        <li>Trend-focused designs</li>
        <li>Customer-first approach</li>
      </ul>
    </Section>
  </div>
);
}
