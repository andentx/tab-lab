import Head from 'next/head';

import Layout from '../components/layout';
import Title from '../components/Title';
import PagePreview from '../components/PagePreview';
import ButtonSection from '../components/ButtonSection';
import SettingsSection from '../components/SettingsSection';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>tab lab - development</title>
        <meta name='description' content='tab lab - development' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Title />
      <PagePreview />
      <ButtonSection />
      <SettingsSection />
    </Layout>
  );
}
