import { Carousel } from 'components/carousel';
import { ThreeItemGrid } from 'components/grid/three-items';
import Footer from 'components/layout/footer';

export const metadata = {
  description:
    'Aptiverse is a digital marketplace offering high-quality HTML, WordPress, CMS, and eCommerce templates for developers, marketers, and bloggers. All themes are downloadable instantly, with a clean and professional design focus.',
  openGraph: {
    type: 'website'
  }
};

export default function HomePage() {
  return (
    <>
      <ThreeItemGrid />
      <Carousel />
      <Footer />
    </>
  );
}
