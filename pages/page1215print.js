import Head from 'next/head';

import Layout from '../components/Layout';
import Title from '../components/Title';
import Component1215Print from '../components/Component1215Print';

export default function Table() {
  return (
    <Layout>
      <Head>
        <title>tab lab - development</title>
        <meta name='description' content='tab lab - development' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Title />
      <Component1215Print />
    </Layout>
  );
}
