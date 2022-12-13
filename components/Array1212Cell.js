import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const CellsContainer = styled.div`
  background-color: darkred;

  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  width: 80%;
  aspect-ratio: 8/1;
  margin-bottom: 2rem;
`;

const Cell = styled.div`
  background-color: white;
  border: 2px solid black;
`;

const FormSection = styled.div`
  padding-top: 2rem;

  background-color: orange;
  width: 80%;
`;

function Array1212() {
  const [cellHeight, setCellHeight] = useState();
  const [cellWidth, setCellWidth] = useState();
  const [numberOfRows, setNumberOfRows] = useState(4);
  const [numberOfColumns, setNumberOfColumns] = useState(8);
  const [numberOfCellContainers, setNumberOfCellContainers] = useState(6);
  const [arrayOfCellsInState, setArrayOfCellsInState] = useState([]);
  const [arrayOfCellContainersInState, setArrayOfCellContainersInState] = useState([]);

  function handleNumberOfRowsChange(event) {
    setNumberOfRows(event.target.value);
  }
  function handleNumberOfColumnsChange(event) {
    setNumberOfColumns(event.target.value);
  }
  function handleNumberOfCellContainersChange(event) {
    setNumberOfCellContainers(event.target.value);
  }

  useEffect(() => {
    createArrayOfCells(numberOfRows, numberOfColumns);

    function createArrayOfCells(rows, cols) {
      let calculatedCellHeight = 100 / rows;
      let calculatedCellWidth = 100 / cols;

      setCellHeight(calculatedCellHeight);
      setCellWidth(calculatedCellWidth);

      let numberOfCellsThatShouldBeCreated = rows * cols;

      let newArrayOfCells = [];

      for (var i = 0; i < numberOfCellsThatShouldBeCreated; i++) {
        newArrayOfCells.push({ label: i, value: i, key: i });
      }

      setArrayOfCellsInState(newArrayOfCells);
    }
  }, [numberOfRows, numberOfColumns]);

  useEffect(() => {
    createArrayOfCellContainers(numberOfCellContainers);

    function createArrayOfCellContainers(number) {
      setNumberOfCellContainers(number);
      let numberOfCellContainersThatShouldBeCreated = number;

      let newArrayOfCellContainers = [];

      for (var i = 0; i < numberOfCellContainersThatShouldBeCreated; i++) {
        newArrayOfCellContainers.push({ label: i, value: i, key: i });
      }

      setArrayOfCellContainersInState(newArrayOfCellContainers);
    }
  }, [numberOfCellContainers]);

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

  let allCellContainersRendered = arrayOfCellContainersInState.map((cellContainer) => (
    <CellsContainer className='cellContainer' key={cellContainer.key} id={cellContainer['key']}>
      {allCellsRendered}
    </CellsContainer>
  ));

  return (
    <>
      {allCellContainersRendered}

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
            Enter the Number of Cell Containers :
            <input type='number' value={numberOfCellContainers} onChange={handleNumberOfCellContainersChange} />
          </label>
        </form>
      </FormSection>
    </>
  );
}

export default Array1212;
