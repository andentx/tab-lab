import styled from 'styled-components';

import Link from 'next/link';

const Footer = styled.footer`
  background-color: var(--page-footer-background-color);
  color: var(--text-color);

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 4rem;
  width: 100%;
  max-width: 1200px;

  padding: 1rem;

  a {
    color: var(--text-color);
    transition: color 200ms;
  }
  a:hover {
    color: var(--text-color-hover);
  }
  a:active {
    color: var(--text-color-hover);
  }
  .selected {
    color: var(--text-color-hover);
  }

  @media print {
    display: none;
  }
`;

const PageFooter = () => {
  return (
    <Footer>
      <Link href='/'>page builder</Link>
      <Link href='/about'>about</Link>
      <Link href='/help'>help</Link>
    </Footer>
  );
};

export default PageFooter;
