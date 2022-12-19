import styled from 'styled-components';

const Gen2PagePreviewContainer = styled.footer`
  background-color: var(--page-footer-background-color);
  color: var(--text-color);

  height: 4rem;
  width: 100%;
  max-width: 1200px;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Gen2PagePreview = () => {
  return (
    <Gen2PagePreviewContainer>
      <p>Gen 2 Page Preview</p>
    </Gen2PagePreviewContainer>
  );
};

export default Gen2PagePreview;
