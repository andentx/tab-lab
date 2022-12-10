import React from 'react';

import styled from 'styled-components';

const Cell = styled.div`
  background-color: limegreen;
  height: 50px;
  width: 50px;
`;

function CellArray() {
  const myData = [
    { key: 1, name: 'Hello' },
    { key: 2, name: 'World' },
    { key: 3, name: 'etc' },
    { key: 4, name: 'sdfsdf ' },
    { key: 5, name: 'etsfsfwetethrregwqc' },
  ];

  const cellchildren = myData.map((val) => (
    <Cell className='classsss' key={val.key} id={val['key']}>
      {val.name}
    </Cell>
  ));

  return (
    <div className='contextCon'>
      <div>{cellchildren}</div>
    </div>
  );
}

export default CellArray;
