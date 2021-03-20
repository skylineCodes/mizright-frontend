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
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      </Head>
      <Hero />
      {/* <Feature /> */}
      <HowItWorks />
      <Service />
    </>
  );
}
