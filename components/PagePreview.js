import styled from 'styled-components';

const Page = styled.div`
  background-color: var(--page-footer-background-color);
  background-color: white;
  border: 3px solid black;

  color: var(--text-color);

  width: min(80%, 500px);
  aspect-ratio: 8.5/11;

  padding: 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Gen2PagePreview = ({ pageSettings, allCellContainersRendered }) => {
  return <Page>{allCellContainersRendered}</Page>;
};

export default Gen2PagePreview;
