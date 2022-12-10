import { useState } from 'react';

import styled from 'styled-components';

const GridContainer = styled.div`
  background-color: darkred;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 90%;
  min-height: 500px;

  border: solid black 3px;

  padding-top: 20px;
`;

const Cell = styled.div`
  background-color: green;
`;

const StartWithVanilla = () => {
  const [cellHeight, setCellHeight] = useState('50px');
  const [cellWidth, setCellWidth] = useState('100px');

  return <GridContainer></GridContainer>;
};

export default StartWithVanilla;
