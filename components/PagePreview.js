import styled from 'styled-components';

const PagePreviewContainer = styled.div`
  background-color: grey;

  width: 100%;
`;

const Page = styled.div`
  background-color: white;
  color: black;

  border: 2px solid black;

  aspect-ratio: 8.5/11;
  width: 80%;
`;

const PagePreview = () => {
  return (
    <PagePreviewContainer>
      <Page>page</Page>
    </PagePreviewContainer>
  );
};

export default PagePreview;
