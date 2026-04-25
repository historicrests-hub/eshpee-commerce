import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description:
    'Eshpee LLC is a global fashion brand offering stylish, comfortable, and affordable clothing. Through our platform eshpee.com, we deliver high-quality shirts, jeans, and pants worldwide.',
  openGraph: {
    title: 'Contact Us',
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
      <h1 className="mb-6 text-4xl font-bold">Contact Us</h1>

      <div className="grid gap-8 md:grid-cols-2">
        <div>
          <h2 className="mb-4 text-2xl font-semibold">Get in Touch</h2>
          <p className="mb-4 text-gray-700">
            Have questions or need support? Reach out to us and our team will get back to you as
            soon as possible.
          </p>

          <div className="space-y-2 text-gray-700">
            <p>
              <strong>Email:</strong> support@eshpee.com
            </p>
            <p>
              <strong>Phone:</strong> ...
            </p>
            <p>
              <strong>Address:</strong> ....
            </p>
          </div>
        </div>

        <form className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full rounded-xl border p-3 focus:outline-none focus:ring-2"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full rounded-xl border p-3 focus:outline-none focus:ring-2"
          />
          <textarea
            placeholder="Your Message"
            rows={5}
            className="w-full rounded-xl border p-3 focus:outline-none focus:ring-2"
          ></textarea>
          <button
            type="submit"
            className="w-full rounded-xl bg-black p-3 text-white hover:opacity-90"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
