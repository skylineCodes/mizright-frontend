import Head from 'next/head';
import Booking from '../components/Booking';

const booking = () => {
  return (
    <>
      <Head>
        <title>Mizright - Book A Tailor</title>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <meta http-equiv='X-UA-Compatible' content='ie=edge' />
      </Head>
      <Booking />
    </>
  );
};

export default booking;
