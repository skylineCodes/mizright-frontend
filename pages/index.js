import Head from 'next/head';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import HowItWorks from '../components/HowItWorks';
import Service from '../components/Service';

export default function Home() {
  return (
    <>
      <Hero />
      {/* <Feature /> */}
      <HowItWorks />
      <Service />
    </>
  );
}
