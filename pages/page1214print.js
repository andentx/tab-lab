import Head from 'next/head';

import Layout from '../components/Layout';
import Title from '../components/Title';
import Component1214Print from '../components/Component1214Print';

export default function Table() {
  return (
    <Layout>
      <Head>
        <title>tab lab - development</title>
        <meta name='description' content='tab lab - development' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Title />
      <Component1214Print />
    </Layout>
  );
}
