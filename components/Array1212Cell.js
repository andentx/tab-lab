import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const CellsContainer = styled.div`
  background-color: darkred;

  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  width: 80%;
  height: 200px;
  margin-bottom: 2rem;
`;

const Cell = styled.div`
  background-color: limegreen;
  border: 2px solid grey;

  height: 50px;
  width: 50px;
`;

const FormSection = styled.div`
  padding-top: 2rem;

  background-color: orange;
  width: 80%;
`;

function Array1212() {
  let cellArray = [];

  const [cellHeight, setCellHeight] = useState(25);
  const [cellWidth, setCellWidth] = useState(12.5);
  const [numberOfRows, setNumberOfRows] = useState(4);
  const [numberOfColumns, setNumberOfColumns] = useState(8);
  const [arrayOfCellsInState, setArrayOfCellsInState] = useState([]);

  function handleCellHeightChange(event) {
    setCellHeight(event.target.value);
  }
  function handleCellWidthChange(event) {
    setCellWidth(event.target.value);
  }
  function handleNumberOfRowsChange(event) {
    let selectedNumberOfRows = event.target.value;
    let selectedNumberOfCols = numberOfColumns;

    console.log(`selectedNumberOfRows = ${selectedNumberOfRows}`);
    console.log(`selectedNumberOfCols = ${selectedNumberOfCols}`);

    setNumberOfRows(selectedNumberOfRows);
  }
  function handleNumberOfColumnsChange(event) {
    setNumberOfColumns(event.target.value);
  }

  useEffect(() => {
    let selectedNumberOfRows = numberOfRows;
    let selectedNumberOfCols = numberOfColumns;

    createArrayOfCells(selectedNumberOfRows, selectedNumberOfCols);

    function createArrayOfCells(rows, cols) {
      console.log('start of createArrayOfCells');

      let currentNumberOfRowsFromState = numberOfRows;
      console.log(`current number of rows from state is ${currentNumberOfRowsFromState}`);

      let rowNum = rows;
      let colNum = cols;

      console.log(`rowNum is ${rowNum}`);
      console.log(`colNum is ${colNum}`);

      let theLetterH = 100 / rowNum;
      let theLetterW = 100 / colNum;

      console.log(`the letter H is ${theLetterH}`);
      console.log(`the letter W is ${theLetterW}`);

      setCellHeight(theLetterH);

      let numberOfCellsThatShouldBeCreated = rowNum * colNum;
      console.log(`numberOfCellsThatShouldBeCreated is ${numberOfCellsThatShouldBeCreated}`);

      let newArrayOfCells = [];

      for (var i = 0; i < numberOfCellsThatShouldBeCreated; i++) {
        newArrayOfCells.push({ label: i, value: i, key: i });
      }

      console.log(newArrayOfCells);

      setArrayOfCellsInState(newArrayOfCells);

      console.log('end of createArrayOfCells');
    }
  }, [numberOfRows]);

  let allCellsRendered = arrayOfCellsInState.map((cell) => (
    <Cell
      className='classsss'
      key={cell.key}
      id={cell['key']}
      style={{
        height: `${cellHeight}%`,
        width: `${cellWidth}%`,
      }}
    >
      {cell.name}
    </Cell>
  ));

  return (
    <>
      <CellsContainer>{allCellsRendered}</CellsContainer>
      <FormSection>
        <form>
          <label>
            Enter the Number of Rows:
            <input type='number' value={numberOfRows} onChange={handleNumberOfRowsChange} />
          </label>
          <br />
          <label>
            Enter the Number of Columns :
            <input type='number' value={numberOfColumns} onChange={handleNumberOfColumnsChange} />
          </label>
          <br />
          <label>
            Enter the Cell Height:
            <input type='number' value={cellHeight} onChange={handleCellHeightChange} />
          </label>
          <br />
          <label>
            Enter the Cell Width:
            <input type='number' value={cellWidth} onChange={handleCellWidthChange} />
          </label>
        </form>
      </FormSection>
    </>
  );
}

export default Array1212;
