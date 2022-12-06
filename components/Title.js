import styled from 'styled-components';

const TitleContainer = styled.h1`
  color: var(--title-color);

  font-size: clamp(3rem, 1.8rem + 6.4vw, 5rem);

  font-weight: 200;

  text-align: center;

  padding-top: clamp(1.6rem, 0.6333rem + 7.7333vw, 4.5rem);
  margin-bottom: clamp(0.5rem, 0.3333rem + 1.3333vw, 1rem);
`;

const Title = () => {
  return <TitleContainer>tab lab</TitleContainer>;
};

export default Title;
