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
  background-color: purple;
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
  width: min(80%, 500px);
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
  const [verticalAdjust, setVerticalAdjust] = useState(100);
  const [gapBetweenTabRows, setGapBetweenTabRows] = useState(3);

  const [tabRowWidth, setTabRowWidth] = useState(80);
  const [tabRowHeight, setTabRowHeight] = useState(10);

  const [leftOffset, setLeftOffset] = useState(0);

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
    setHorizontalAdjust(event.target.value);
    setTabRowWidth(event.target.value - 20);
  }

  function handleLeftOffsetChange(event) {
    setLeftOffset(event.target.value);
  }

  function handleVerticalAdjustChange(event) {
    setVerticalAdjust(event.target.value);
    setTabRowHeight(event.target.value / 10);
  }

  function handleGapBetweenTabRowsChange(event) {
    setGapBetweenTabRows(event.target.value);
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
        height: `${tabRowHeight}%`,
        marginLeft: `${leftOffset}%`,
        marginBottom: `${gapBetweenTabRows}%`,
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
          <br />
          <label>
            Enter the Vertical Adjust :
            <input type='number' value={verticalAdjust} onChange={handleVerticalAdjustChange} />
          </label>
          <br />
          <label>
            Enter the Left Offset :
            <input type='number' value={leftOffset} onChange={handleLeftOffsetChange} />
          </label>
          <br />
          <label>
            Enter the Gap Between Tab Rows :
            <input type='number' value={gapBetweenTabRows} onChange={handleGapBetweenTabRowsChange} />
          </label>
        </form>
      </FormSection>
    </>
  );
}

export default Component1213;
