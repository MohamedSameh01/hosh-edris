import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Menu } from '@/components/menu';
import { Owner } from '@/components/owner';
import { Testimonials } from '@/components/testimonials';
import { Location } from '@/components/location';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Menu />
      <Owner />
      <Testimonials />
      <Location />
    </>
  );
}