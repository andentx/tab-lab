import Head from 'next/head';

import Layout from '../components/Layout';
import Title from '../components/Title';
import TextBox from '../components/TextBox';

export default function About() {
  return (
    <Layout>
      <Head>
        <title>tab lab - about</title>
      </Head>

      <Title />
      <TextBox>
        <h2>about</h2>
        <p>
          <b>tab lab</b> is a tool for creating guitar tab templates
          <br />
          <br />
          <br />- made by <a href='https://andrewdent.dev'>andrew</a>
        </p>
      </TextBox>
    </Layout>
  );
}
