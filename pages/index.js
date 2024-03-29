import Head from 'next/head';

import Layout from '../components/Layout';
import Title from '../components/Title';
import PageGenerator from '../components/PageGenerator';

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>tab lab</title>
      </Head>

      <Title />
      <PageGenerator />
    </Layout>
  );
}
