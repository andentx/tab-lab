import styled from 'styled-components';

const TitleContainer = styled.h1`
  color: var(--title-color);

  font-size: clamp(3rem, 1.8rem + 6.4vw, 5rem);

  font-weight: 200;

  text-align: center;

  margin-top: clamp(1rem, -0.8rem + 9.6vw, 4rem);
  margin-bottom: clamp(1rem, -0.8rem + 9.6vw, 4rem);

  @media print {
    display: none;
  }
`;

const Title = () => {
  return <TitleContainer>tab lab</TitleContainer>;
};

export default Title;
