import styled from 'styled-components';

import Color from '../components/Color';

import PageFooter from '../components/PageFooter';

const PageContainer = styled.div`
  /* background-color: gold; */

  min-height: 100vh;
  min-height: 100dvh;

  display: flex;
  flex-direction: column;
  align-items: center;

  @media print {
    width: 100%;
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
      <Color />
      <PageContainer>
        <MainContent>{children}</MainContent>
        <PageFooter />
      </PageContainer>
    </>
  );
};

export default Layout;
