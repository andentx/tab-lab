import styled from 'styled-components';

const TextBoxContainer = styled.div`
  background-color: var(--aged-white);
  color: black;

  border: 3px solid black;

  display: flex;
  flex-direction: column;
  align-items: center;

  min-height: 500px;
  width: min(80%, 500px);

  h2 {
    font-size: clamp(1.6rem, 1.36rem + 1.28vw, 2rem);
  }

  p {
    width: 90%;
    line-height: 1.5;
  }

  a {
    font-weight: bold;
    color: var(--sf-bay);
    transition: color 200ms;
    text-align: center;
    width: 10rem;
  }
  a:hover {
    text-decoration: underline;
  }
  a:active {
    text-decoration: underline;
  }
  .selected {
    text-decoration: underline;
  }
`;

const TextBox = ({ children }) => {
  return (
    <>
      <TextBoxContainer>{children}</TextBoxContainer>
    </>
  );
};

export default TextBox;
