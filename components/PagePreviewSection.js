import styled from 'styled-components';

const PagePreviewSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: min(100vw, 1200px);
  height: min(103vw, 647px);

  margin-bottom: 2rem;

  @media print {
    margin: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    margin: auto;
  }
`;

const PagePreviewSection = ({ children }) => {
  return <PagePreviewSectionContainer>{children}</PagePreviewSectionContainer>;
};

export default PagePreviewSection;
