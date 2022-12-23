import Head from 'next/head';

import Layout from '../components/Layout';
import Title from '../components/Title';
import TextBox from '../components/TextBox';

export default function Help() {
  return (
    <Layout>
      <Head>
        <title>tab lab - development</title>
        <meta name='description' content='tab lab - development' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Title />
      <TextBox>
        <h2>help</h2>
        <p>
          <b>print safari - </b>lafdsfds
          <br />
          <b>print chrome - </b>lafdsfds
          <br />
          <br />1 - Adjust settings
          <br />2 - Print
        </p>
      </TextBox>
    </Layout>
  );
}
