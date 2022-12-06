import styled from 'styled-components';

const ButtonSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: min(80%, 500px);

  margin-bottom: 2rem;

  button {
    background-color: var(--aged-white);
    color: black;

    border: 3px solid black;

    border-radius: 10px;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    font-size: 2rem;

    height: 3.5rem;
    width: 12rem;

    margin: 0 1rem 1rem 1rem;
  }
`;

const DownloadButton = styled.button``;

const PrintButton = styled.button``;

const ButtonSection = () => {
  return (
    <ButtonSectionContainer>
      <DownloadButton>Download</DownloadButton>
      <PrintButton>Print</PrintButton>
    </ButtonSectionContainer>
  );
};

export default ButtonSection;
