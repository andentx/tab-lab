import Head from 'next/head';

import styled from 'styled-components';

import Color from '../components/Color';

import PageFooter from '../components/PageFooter';

const PageContainer = styled.div`
  min-height: 100vh;
  min-height: 100dvh;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media print {
    width: 100%;
    min-height: 0;
  }
`;

const MainContent = styled.main`
  background-color: var(--main-section-background-color);
  color: var(--text-color);

  width: 100%;
  max-width: 1200px;

  display: flex;
  flex-direction: column;
  align-items: center;

  flex-grow: 1;

  @media print {
    max-width: 100%;
  }
`;

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <meta name='description' content='tab lab - development' />

        <link rel='icon' href='/favicon.ico' />
        <link rel='shortcut icon' href='/icons/favicon.ico' />
        <link rel='icon' type='image/png' sizes='32x32' href='icons/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='icons/favicon-16x16.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='icons/apple-touch-icon.png' />
        <meta name='msapplication-TileColor' content='#008877' />
        <meta name='msapplication-config' content='icons/browserconfig.xml' />
        <link rel='mask-icon' href='icons/safari-pinned-tab.svg' color='#008877' />
        <link rel='manifest' href='icons/site.webmanifest' />
      </Head>
      <Color />
      <PageContainer>
        <MainContent>{children}</MainContent>
        <PageFooter />
      </PageContainer>
    </>
  );
};

export default Layout;
