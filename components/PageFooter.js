import styled from 'styled-components';

import Link from 'next/link';

const Footer = styled.footer`
  background-color: var(--page-footer-background-color);
  color: var(--footer-link-color);

  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 4rem;
  width: 100%;
  max-width: 1200px;

  padding: 1rem;

  a {
    color: var(--footer-link-color);
    transition: color 200ms;
    text-align: center;
    width: 10rem;
  }
  a:hover {
    color: var(--footer-link-color-hover);
  }
  a:active {
    color: var(--footer-link-color-hover);
  }
  .selected {
    color: var(--footer-link-color-hover);
  }

  @media print {
    display: none;
  }
`;

const PageFooter = () => {
  return (
    <Footer>
      <Link href="/">page builder</Link>
      <Link href="/about">about</Link>
      <Link href="/help">help</Link>
    </Footer>
  );
};

export default PageFooter;
