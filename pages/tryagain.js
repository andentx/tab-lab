import Head from 'next/head';

import Layout from '../components/Layout';
import Title from '../components/Title';
import TryAgain from '../components/TryAgain';

export default function Table() {
  return (
    <Layout>
      <Head>
        <title>tab lab - development</title>
        <meta name='description' content='tab lab - development' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Title />
      <TryAgain />
    </Layout>
  );
}
