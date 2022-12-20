import { useState, useEffect } from 'react';

import styled from 'styled-components';

import PagePreview from '../components/PagePreview';
import FormSection from './FormSection';

// const PageGeneratorContainer = styled.div`
//   display: flex;

//   width: 100%;

//   flex-direction: column;
//   align-items: center;

//   /* @media (min-width: 1200px) {
//     flex-direction: row;
//     align-items: flex-start;
//     justify-content: space-between;
//   } */
// `;

// const CellsContainer = styled.div`
//   background-color: black;

//   display: flex;
//   justify-content: flex-start;
//   flex-wrap: wrap;

//   width: 80%;
//   height: 10%;
//   /* aspect-ratio: 8/1; */
// `;

// const Cell = styled.div`
//   background-color: white;
// `;

const PageGenerator = () => {
  const [pageSettings, setPageSettings] = useState({
    numberOfStrings: 6,
    numberOfVerticalLines: 8,
    numberOfRows: 6,
    horizontalAdjust: 100,
    verticalAdjust: 100,
    horizontalOffset: 0,
    rowGap: 3,
    showPageHeader: true,
    headerHeight: 10,
    borderSize: 2,
    horizontalAdjust: 100,
  });

  // const [cellHeight, setCellHeight] = useState();
  // const [cellWidth, setCellWidth] = useState();
  // const [numberOfRows, setNumberOfRows] = useState(5);
  // const [numberOfStrings, setNumberOfStrings] = useState(6);
  // const [numberOfColumns, setNumberOfColumns] = useState(8);
  // const [numberOfCellContainers, setNumberOfCellContainers] = useState(7);
  // const [arrayOfCellContainersInState, setArrayOfCellContainersInState] = useState([]);
  const [horizontalAdjust, setHorizontalAdjust] = useState(100);
  const [verticalAdjust, setVerticalAdjust] = useState(100);
  const [gapBetweenTabRows, setGapBetweenTabRows] = useState(5);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [headerDisplayProperty, setHeaderDisplayProperty] = useState('flex');
  const [headerHeight, setHeaderHeight] = useState(10);
  const [borderSize, setBorderSize] = useState(2);
  const [borderSizeValue, setBorderSizeValue] = useState(1);
  const [steplistValue, setSteplistValue] = useState(6);

  const [tabRowWidth, setTabRowWidth] = useState(80);
  const [tabRowHeight, setTabRowHeight] = useState(10);

  const [leftOffset, setLeftOffset] = useState(0);

  function handleSteplistValueChange(event) {
    let numberOfRowsShouldBe = event.target.value / 12.5 + 3;

    setSteplistValue(numberOfRowsShouldBe + 1);
    setNumberOfRows(numberOfRowsShouldBe);
  }

  function handleNumberOfRowsChange(event) {
    setNumberOfRows(event.target.value);
  }

  function handleNumberOfStringsChange(event) {
    setNumberOfStrings(event.target.value);

    setNumberOfRows(event.target.value - 1);
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

  // function handleBorderSizeChange(event) {
  //   setBorderSize(event.target.value);
  //   setBorderSizeValue(event.target.value / 2);
  // }

  function handleIsHeaderVisibleChange(event) {
    setIsHeaderVisible(event.target.value);

    if (event.target.value == 'true') {
      setHeaderDisplayProperty('flex');
    }
    if (event.target.value == 'false') {
      setHeaderDisplayProperty('none');
    }
  }

  function handleHeaderHeightChange(event) {
    setHeaderHeight(event.target.value);
  }

  function handleSettingsChange(event) {
    const { name, value } = event.target;
    setPageSettings((previousSettings) => ({ ...previousSettings, [name]: value }));
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
    createArrayOfCellContainers(pageSettings.numberOfRows);

    function createArrayOfCellContainers(number) {
      setNumberOfCellContainers(number);
      let numberOfCellContainersThatShouldBeCreated = number;

      let newArrayOfCellContainers = [];

      for (var i = 0; i < numberOfCellContainersThatShouldBeCreated; i++) {
        newArrayOfCellContainers.push({ label: i, value: i, key: i });
      }

      setArrayOfCellContainersInState(newArrayOfCellContainers);
    }
  }, [pageSettings]);

  const allCellsRendered = arrayOfCellsInState.map((cell) => (
    <Cell
      className='classsss'
      key={cell.key}
      id={cell['key']}
      style={{
        height: `${cellHeight}%`,
        width: `${cellWidth}%`,
        border: `${borderSizeValue}px solid black`,
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
        border: `${borderSizeValue}px solid black`,
      }}
      id={cellContainer['key']}
    >
      {allCellsRendered}
    </CellsContainer>
  ));

  return (
    <PageGeneratorContainer>
      <PagePreview pageSettings={pageSettings} allCellContainersRendered={allCellContainersRendered}></PagePreview>
      <FormSection pageSettings={pageSettings} onInputChange={handleSettingsChange}></FormSection>
    </PageGeneratorContainer>
  );
};

export default PageGenerator;
