import styled from 'styled-components';

const PagePreviewContainer = styled.div`
  background-color: grey;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

const Page = styled.div`
  background-color: white;
  color: black;

  border: 3px solid black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  aspect-ratio: 8.5/11;
  width: min(80%, 500px);
`;

const PagePreview = () => {
  return (
    <PagePreviewContainer>
      <Page>page</Page>
    </PagePreviewContainer>
  );
};

export default PagePreview;
