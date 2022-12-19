import Head from 'next/head';

import Layout from '../components/Layout';
import Title from '../components/Title';

import Gen2PagePreview from '../components/Gen2PagePreview';
import Gen2FormSection from '../components/Gen2FormSection';

export default function Table() {
  return (
    <Layout>
      <Head>
        <title>tab lab - development</title>
        <meta name='description' content='tab lab - development' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Title />
      <Gen2PagePreview></Gen2PagePreview>
      <Gen2FormSection></Gen2FormSection>
    </Layout>
  );
}
