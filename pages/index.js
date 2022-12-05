import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

import styled from 'styled-components';

export const PreviewContainer = styled.div`
  background-color: hotpink;
  height: 200px;
  width: 200px;
`;

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>tab lab - development</title>
        <meta name='description' content='tab lab - development' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>tab lab</h1>

        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>
        <PreviewContainer>preview container</PreviewContainer>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
