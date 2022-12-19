import styled from 'styled-components';

const Gen2FormSectionContainer = styled.footer`
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

const Gen2FormSection = () => {
  return (
    <Gen2FormSectionContainer>
      <p>Gen 2 Form Section</p>
    </Gen2FormSectionContainer>
  );
};

export default Gen2FormSection;
