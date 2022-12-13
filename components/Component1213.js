import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

const PagePreviewSection = styled.div`
  background-color: darkred;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  margin-bottom: 2rem;
`;

const Page = styled.div`
  background-color: orange;
  color: black;

  border: 3px solid black;

  display: flex;
  flex-direction: column;
  align-items: center;

  aspect-ratio: 8.5/11;
  width: min(80%, 500px);
`;

const CellsContainer = styled.div`
  background-color: yellow;

  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  width: 80%;
  height: 10%;
  /* aspect-ratio: 8/1; */

  margin-bottom: 3%;

  :first-of-type {
    margin-top: 10%;
  }
`;

const Cell = styled.div`
  background-color: green;
  border: 2px solid black;
`;

const FormSection = styled.div`
  padding-top: 2rem;

  background-color: orange;
  width: 80%;
`;

function Component1213() {
  const [cellHeight, setCellHeight] = useState();
  const [cellWidth, setCellWidth] = useState();
  const [numberOfRows, setNumberOfRows] = useState(5);
  const [numberOfColumns, setNumberOfColumns] = useState(8);
  const [numberOfCellContainers, setNumberOfCellContainers] = useState(6);
  const [arrayOfCellsInState, setArrayOfCellsInState] = useState([]);
  const [arrayOfCellContainersInState, setArrayOfCellContainersInState] = useState([]);
  const [horizontalAdjust, setHorizontalAdjust] = useState(100);
  const [leftSpacerSize, setLeftSpacerSize] = useState(10);
  const [rightSpacerSize, setRightSpacerSize] = useState(10);
  const [tabRowWidth, setTabRowWidth] = useState(80);

  function handleNumberOfRowsChange(event) {
    setNumberOfRows(event.target.value);
  }
  function handleNumberOfColumnsChange(event) {
    setNumberOfColumns(event.target.value);
  }
  function handleNumberOfCellContainersChange(event) {
    setNumberOfCellContainers(event.target.value);
  }
  function handleHorizontalAdjustChange(event) {
    console.log(`start of handleHorizontalAdjustChange`);
    console.log('');
    setHorizontalAdjust(event.target.value);

    let adjustAmount = event.target.value - horizontalAdjust;
    console.log(`adjustAmount is ${adjustAmount}`);

    setTabRowWidth(event.target.value - 20);

    setLeftSpacerSize(leftSpacerSize - adjustAmount);
    setRightSpacerSize(rightSpacerSize - adjustAmount);
    console.log(`horizontalAdjust is ${event.target.value}`);
    console.log(`leftSpacerSize is ${leftSpacerSize - adjustAmount}`);
    console.log(`rightSpacerSize is ${rightSpacerSize - adjustAmount}`);
    console.log('');
    console.log(`end of handleHorizontalAdjustChange`);
    console.log('');
    console.log('');
    console.log('');
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

  const allCellsRendered = arrayOfCellsInState.map((cell) => (
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

  const allCellContainersRendered = arrayOfCellContainersInState.map((cellContainer) => (
    <CellsContainer
      className='cellContainer'
      key={cellContainer.key}
      style={{
        width: `${tabRowWidth}%`,
      }}
      id={cellContainer['key']}
    >
      {allCellsRendered}
    </CellsContainer>
  ));

  return (
    <>
      <PagePreviewSection>
        <Page>{allCellContainersRendered}</Page>
      </PagePreviewSection>

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
          <br />
          <label>
            Enter the Horizontal Adjust :
            <input type='number' value={horizontalAdjust} onChange={handleHorizontalAdjustChange} />
          </label>
        </form>
      </FormSection>
    </>
  );
}

export default Component1213;
