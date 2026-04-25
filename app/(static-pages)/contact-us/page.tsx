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
    <h2 className="text-2xl font-semibold mb-3">{title}</h2>
    <div className="text-gray-300 leading-relaxed space-y-2">{children}</div>
  </section>
);

export default async function Page() {
  return (
  <div className="max-w-4xl mx-auto p-6">
    <h1 className="text-4xl font-bold mb-6">Contact Us</h1>

    <div className="grid md:grid-cols-2 gap-8">
      <div>
        <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
        <p className="text-gray-700 mb-4">
          Have questions or need support? Reach out to us and our team will get
          back to you as soon as possible.
        </p>

        <div className="space-y-2 text-gray-700">
          <p><strong>Email:</strong> support@eshpee.com</p>
          <p><strong>Phone:</strong> ...</p>
          <p><strong>Address:</strong> ....</p>
        </div>
      </div>

      <form className="space-y-4">
        <input
          type="text"
          placeholder="Your Name"
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2"
        />
        <textarea
          placeholder="Your Message"
          rows={5}
          className="w-full p-3 border rounded-xl focus:outline-none focus:ring-2"
        ></textarea>
        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-xl hover:opacity-90"
        >
          Send Message
        </button>
      </form>
    </div>
  </div>
);
}
