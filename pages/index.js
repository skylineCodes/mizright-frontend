import Head from 'next/head';
import Hero from '../components/Hero';
import Feature from '../components/Feature';
import HowItWorks from '../components/HowItWorks';
import Service from '../components/Service';

export default function Home() {
  return (
    <>
      <Head>
        <title>Mizright</title>
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
      </Head>
      <Hero />
      {/* <Feature /> */}
      <HowItWorks />
      <Service />
    </>
  );
}
