import styled from 'styled-components';

const Page = styled.div`
  background-color: white;
  border: 0;

  color: var(--text-color);

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PageHeader = styled.div`
  margin-bottom: 3%;
  width: 50%;
`;

const ComponentToPrintSafari = ({ pageSettings, allCellContainersRendered }) => {
  return (
    <Page
      style={{
        height: `${pageSettings.pageHeight * 75}px`,
        width: `${pageSettings.pageWidth * 75}px`,
      }}
    >
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

export default ComponentToPrintSafari;
