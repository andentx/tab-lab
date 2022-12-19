import styled from 'styled-components';

const Gen2PagePreviewContainer = styled.footer`
  background-color: var(--page-footer-background-color);
  background-color: darkred;

  color: var(--text-color);

  min-height: 4rem;
  width: 100%;
  max-width: 1200px;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  p {
    background-color: orange;
    color: black;
  }
`;

const Gen2PagePreview = ({ pageSettings }) => {
  return (
    <Gen2PagePreviewContainer>
      <h2>Gen 2 Page Preview</h2>
      <p>Number of Strings: {pageSettings.numberOfStrings}</p>
      <p>Frets / Measures: {pageSettings.numberOfVerticalLines}</p>
      <p>Number of Rows: {pageSettings.numberOfRows}</p>
      <p>Adjust Horizontal Scale: {pageSettings.horizontalAdjust}</p>
      <p>Adjust Vertical Scale: {pageSettings.verticalAdjust}</p>
      <p>Adjust Horizontal Offset: {pageSettings.horizontalOffset}</p>
      <p>Gap Between Rows: {pageSettings.rowGap}</p>
      <p>Page Header: {pageSettings.showPageHeader}</p>
      <p>Page Header Height: {pageSettings.headerHeight}</p>
      <p>Line Size: {pageSettings.borderSize}</p>
    </Gen2PagePreviewContainer>
  );
};

export default Gen2PagePreview;
