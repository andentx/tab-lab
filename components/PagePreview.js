import styled from 'styled-components';

const Page = styled.div`
  background-color: var(--page-footer-background-color);
  background-color: white;
  border: 3px solid black;

  color: var(--text-color);

  /* width: min(80%, 500px); */
  /* aspect-ratio: 8.5/11; */

  /* width: 800px; */
  /* height: 1100px; */

  /* width: 400px; */
  /* height: 550px; */

  width: 300px;
  height: 385px;

  /* width: 200px; */
  /* height: 275px; */

  display: flex;
  flex-direction: column;
  align-items: center;

  @media print {
    height: 100vh;
    /* min-height: 9.5in; */
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
