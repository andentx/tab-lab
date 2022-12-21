import styled from 'styled-components';

const Footer = styled.footer`
  background-color: var(--page-footer-background-color);
  color: var(--text-color);

  height: 4rem;
  width: 100%;
  max-width: 1200px;

  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  @media print {
    display: none;
  }
`;

const PageFooter = () => {
  return (
    <Footer>
      <p>footer link</p>
      <p>footer link</p>
      <p>footer link</p>
    </Footer>
  );
};

export default PageFooter;
