import styled from 'styled-components';

const Page = styled.div`
  background-color: white;
  border: 3px solid black;

  color: var(--text-color);

  display: flex;
  flex-direction: column;
  align-items: center;

  margin-bottom: 2rem;

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

  @media print {
    width: 100%;
    margin: 0;
    border: 0;
  }
`;

const PageHeader = styled.div`
  width: 50%;
  margin-bottom: 3%;
`;

const PagePreview = ({ pageSettings, allCellContainersRendered }) => {
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

export default PagePreview;
