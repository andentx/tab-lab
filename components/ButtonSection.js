import styled from 'styled-components';

const ButtonSectionContainer = styled.div`
  /* background-color: blue; */

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: min(100%, 500px);

  margin-bottom: 1rem;

  @media print {
    display: none;
    margin: 0;
    min-height: 0;
  }

  button {
    background-color: var(--aged-white);
    color: black;

    border: 3px solid black;

    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 1.5rem;

    height: 3.5rem;
    width: 12rem;

    margin: 0 1rem 1rem 1rem;

    @media print {
      display: none;
      margin: 0;
      min-height: 0;
    }
  }
`;

const BudgetSection = ({ children }) => {
  return <ButtonSectionContainer>{children}</ButtonSectionContainer>;
};

export default BudgetSection;
