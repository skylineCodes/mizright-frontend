import Head from 'next/head';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import HowItWorks from '../components/HowItWorks';
import Service from '../components/Service';
import Advert from '../components/Advert';
import Testimonial from '../components/Testimonial';
import LatestBlogs from '../components/LatestBlogs';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mizright</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <Hero />
      <HowItWorks />
      <Service />
      <Advert />
      <Testimonial />
      <LatestBlogs />
      <Footer />
    </>
  );
}
