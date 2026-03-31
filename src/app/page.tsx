'use client';

import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Guide from '@/components/Guide';
import History from '@/components/History';
import Gallery from '@/components/Gallery';
import Reviews from '@/components/Reviews';
import Itinerary from '@/components/Itinerary';
import BlogCards from '@/components/BlogCards';
import PracticalInfo from '@/components/PracticalInfo';
import MapEmbed from '@/components/MapEmbed';
import References from '@/components/References';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <hr className="section-divider" />
        <Guide />
        <hr className="section-divider" />
        <History />
        <hr className="section-divider" />
        <Gallery />
        <hr className="section-divider" />
        <Reviews />
        <hr className="section-divider" />
        <Itinerary />
        <hr className="section-divider" />
        <BlogCards />
        <hr className="section-divider" />
        <PracticalInfo />
        <hr className="section-divider" />
        <MapEmbed />
        <hr className="section-divider" />
        <References />
      </main>
      <Footer />
    </>
  );
}
