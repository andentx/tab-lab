import styled from 'styled-components';

const Temp = styled.div`
  h1 {
    color: black;
  }
`;

const ComponentToPrint = () => {
  return (
    <Temp>
      <h1>Component to Print</h1>
    </Temp>
  );
};

export default ComponentToPrint;
