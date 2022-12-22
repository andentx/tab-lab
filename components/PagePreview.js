import styled from 'styled-components';

const Page = styled.div`
  background-color: var(--page-footer-background-color);
  background-color: white;
  border: 3px solid black;

  color: var(--text-color);

  /* responsive version */
  /* width: min(80%, 500px); */
  /* aspect-ratio: 8.5/11; */

  @media (min-width: 200px) {
    width: 170px;
    height: 220px;
  }

  @media (min-width: 300px) {
    width: 255px;
    height: 330px;
  }

  @media (min-width: 400px) {
    width: 340px;
    height: 440px;
  }

  @media (min-width: 500px) {
    width: 425px;
    height: 550px;
  }

  @media (min-width: 600px) {
    width: 510px;
    height: 660px;
  }

  /* @media (min-width: 700px) {
    width: 595px;
    height: 770px;
  } */

  /* @media (min-width: 800px) {
    width: 680px;
    height: 880px;
  } */

  /* @media (min-width: 900px) {
    width: 765px;
    height: 990px;
  } */

  /* @media (min-width: 1000px) {
    width: 850px;
    height: 1100px;
  } */

  /* @media (min-width: 1100px) {
    width: 935px;
    height: 1210px;
  } */

  /* @media (min-width: 1200px) {
    width: 1020px;
    height: 1320px;
  } */

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 2rem;

  @media print {
    width: 100%;
    margin: 0;
    border: 0;
  }
`;

const PageHeader = styled.div`
  margin-bottom: 3%;
  width: 50%;
`;

const Gen2PagePreview = ({ pageSettings, allCellContainersRendered }) => {
  return (
    <Page>
      <PageHeader
        style={{
          borderBottom: `${pageSettings.showPageHeader}`,
          height: `${pageSettings.headerHeight}%`,
        }}
      />
      {allCellContainersRendered}
    </Page>
  );
};

export default Gen2PagePreview;
