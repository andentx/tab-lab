import { createGlobalStyle } from 'styled-components';

const GlobalColor = createGlobalStyle`

  :root {
    /* primary color */
    --sf-bay: hsl(186, 62%, 16%);

    /* secondary color */
    --aged-white: hsl(34, 78%, 91%);

    /* accent color */
    --sunset-gold: hsl(45, 100%, 50%);
    --sunset-gold-dark: hsl(45, 100%, 30%);

    /* color roles */
    --site-background-color: var(--sf-bay);
    --text-color: var(--aged-white);
    --text-color-hover: var(--sunset-gold);

    /* color assignments */
    --main-section-background-color: var(--site-background-color);
    --title-color: var(--sunset-gold);

  }

  html,
  body {
    background-color: var(--site-background-color);
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
