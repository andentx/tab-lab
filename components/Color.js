import { createGlobalStyle } from 'styled-components';

const GlobalColor = createGlobalStyle`

  :root {
    /* primary color */
    --lab-green: hsl(68, 100%, 30%);
    --primary-color: var(--lab-green);

    /* secondary color */
    --beige: hsl(52, 94%, 94%);
    --secondary-color: var(--beige);

    /* accent color */
    --dark-beige: hsl(52, 94%, 20%);
    --accent-color: var(--dark-beige);


    /* color roles */
    --site-background-color: var(--primary-color);
    --text-color: var(--secondary-color);
    --text-color-hover: var(--accent-color);

    /* color assignments */
    --main-section-background-color: var(--site-background-color);
    --title-color: var(--secondary-color);
    --form-label-color: var(--secondary-color);
    --form-border-color: var(--secondary-color);
    --button-background-color: var(--secondary-color);
    --button-text-color: black;
    --button-border-color: black;
    --footer-link-color: var(--text-color);
    --footer-link-color-hover: var(--text-color-hover);


  }

  html,
  body {
    background-color: var(--site-background-color);
  }

  @media print {
    html, body {
      background-color: white;
    }
  }

 `;

const Color = () => {
  return (
    <>
      <GlobalColor />
    </>
  );
};

export default Color;
