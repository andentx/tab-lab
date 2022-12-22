import Head from 'next/head';

import Layout from '../components/Layout';
import Title from '../components/Title';

export default function Help() {
  return (
    <Layout>
      <Head>
        <title>tab lab - development</title>
        <meta name='description' content='tab lab - development' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Title />
      <p>help section - coming soon</p>
    </Layout>
  );
}
