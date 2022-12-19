import React, { useState, useEffect, useRef } from 'react';

import ReactToPrint from 'react-to-print';

import PagePreviewSection from './PagePreviewSection';
import CustomSelect from './CustomSelect';

import { v4 as uuidv4 } from 'uuid';

import styled from 'styled-components';

const Page = styled.div`
  background-color: white;
  color: black;

  border: 3px solid black;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: min(80vw, 500px);
  /* aspect-ratio: 8.5/11; */
  flex-grow: 1;
  height: 100%;

  @media print {
    border: none;

    margin: 0;

    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    margin: auto;
  }
`;

const PageHeader = styled.div`
  /* background-color: blue; */
  width: 50%;
`;

const PageHeaderContents = styled.div`
  /* background-color: hotpink; */
  border-bottom: 2px solid black;
  width: 100%;
  height: 100%;
`;

const CellsContainer = styled.div`
  background-color: black;

  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  width: 80%;
  /* aspect-ratio: 8/1; */
`;

const Cell = styled.div`
  background-color: white;
`;

const ButtonSection = styled.div`
  /* background-color: gold; */

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: min(80%, 500px);

  margin-bottom: 2rem;

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

    font-size: 2rem;

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

const PrintButton = styled.button`
  background-color: orange;

  width: 4rem;
  min-height: 50px;

  margin: 2rem;

  @media print {
    display: none;
    margin: 0;
  }
`;
const RTPButton = styled.button`
  background-color: orange;

  width: 4rem;
  min-height: 50px;

  margin: 2rem;

  @media print {
    display: none;
    margin: 0;
  }
`;

const FormSection = styled.div`
  padding-top: 2rem;

  /* background-color: orange; */
  width: min(80%, 500px);

  form {
    display: flex;
    flex-direction: column;
    align-items: center;

    * {
      /* border: solid black 1px; */
    }
  }

  @media print {
    display: none;
    padding: 0;
  }
`;

function Component1216Forms() {
  let componentRef = useRef();

  const [cellHeight, setCellHeight] = useState();
  const [cellWidth, setCellWidth] = useState();
  const [numberOfRows, setNumberOfRows] = useState(5);
  const [numberOfStrings, setNumberOfStrings] = useState(6);
  const [numberOfColumns, setNumberOfColumns] = useState(8);
  const [numberOfCellContainers, setNumberOfCellContainers] = useState(7);
  const [arrayOfCellsInState, setArrayOfCellsInState] = useState([]);
  const [arrayOfCellContainersInState, setArrayOfCellContainersInState] = useState([]);
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

  function handleBorderSizeChange(event) {
    setBorderSize(event.target.value);
    setBorderSizeValue(event.target.value / 2);
  }

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

  function handlePrintButtonClick() {
    window.print();
  }

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

  function createOptions(min, max) {
    const options = [];
    for (let i = min; i <= max; i++) {
      options.push(
        <option value={i} key={uuidv4()}>
          {i}
        </option>
      );
    }
    return options;
  }

  const numberOfStringsOptions = createOptions(4, 12);
  const numberOfColumnsOptions = createOptions(2, 12);
  const numberOfRowsOptions = createOptions(0, 12);
  const horizontalAdjustOptions = createOptions(90, 120);
  const verticalAdjustOptions = createOptions(90, 120);
  const rowGapAdjustOptions = createOptions(0, 10);
  const headerHeightOptions = createOptions(0, 20);
  const borderSizeOptions = createOptions(1, 5);
  const horizontalOffsetOptions = createOptions(-15, 20);

  return (
    <>
      <PagePreviewSection>
        <Page ref={(el) => (componentRef = el)}>
          <PageHeader
            style={{
              height: `${headerHeight}%`,
              marginBottom: `${gapBetweenTabRows}%`,
            }}
          >
            <PageHeaderContents
              style={{
                display: `${headerDisplayProperty}`,
              }}
            ></PageHeaderContents>
          </PageHeader>
          {allCellContainersRendered}
        </Page>
      </PagePreviewSection>

      <ButtonSection>
        {/* <PrintButton onClick={handlePrintButtonClick}>Print</PrintButton> */}
        <ReactToPrint trigger={() => <RTPButton>Print</RTPButton>} content={() => componentRef} />
      </ButtonSection>

      <FormSection>
        <form>
          <CustomSelect>
            <label htmlFor='numberOfStrings'>Number of Strings</label>
            <select id='numberOfStrings' value={numberOfStrings} onChange={handleNumberOfStringsChange}>
              {numberOfStringsOptions}
            </select>
          </CustomSelect>

          <CustomSelect>
            <label htmlFor='numberOfMeasureLines'>Frets / Measures</label>
            <select id='numberOfMeasureLines' value={numberOfColumns} onChange={handleNumberOfColumnsChange}>
              <option value={1}>None</option>
              {numberOfColumnsOptions}
            </select>
          </CustomSelect>

          <CustomSelect>
            <label htmlFor='numberOfRows'>Number of Rows</label>
            <select id='numberOfRows' value={numberOfCellContainers} onChange={handleNumberOfCellContainersChange}>
              {numberOfRowsOptions}
            </select>
          </CustomSelect>

          <CustomSelect>
            <label htmlFor='horizontalAdjust'>Adjust Horizontal Scale</label>
            <select id='horizontalAdjust' value={horizontalAdjust} onChange={handleHorizontalAdjustChange}>
              {horizontalAdjustOptions}
            </select>
          </CustomSelect>

          <CustomSelect>
            <label htmlFor='verticalAdjust'>Adjust Vertical Scale</label>
            <select id='verticalAdjust' value={verticalAdjust} onChange={handleVerticalAdjustChange}>
              {verticalAdjustOptions}
            </select>
          </CustomSelect>

          <CustomSelect>
            <label htmlFor='leftOffset'>Adjust Horizontal Offset</label>
            <select id='leftOffset' value={leftOffset} onChange={handleLeftOffsetChange}>
              {horizontalOffsetOptions}
            </select>
          </CustomSelect>

          <CustomSelect>
            <label htmlFor='leftOffset'>Adjust Space Between Rows</label>
            <select id='gapBetweenTabRows' value={gapBetweenTabRows} onChange={handleGapBetweenTabRowsChange}>
              {rowGapAdjustOptions}
            </select>
          </CustomSelect>

          <CustomSelect>
            <label htmlFor='pageHeaderSelect'>Page Header</label>
            <select id='pageHeaderSelect' value={isHeaderVisible} onChange={handleIsHeaderVisibleChange}>
              <option value='true'>Show</option>
              <option value='false'>Hide</option>
            </select>
          </CustomSelect>

          <CustomSelect>
            <label htmlFor='headerHeightSelect'>Page Header Height</label>
            <select id='headerHeightSelect' value={headerHeight} onChange={handleHeaderHeightChange}>
              {headerHeightOptions}
            </select>
          </CustomSelect>

          <CustomSelect>
            <label htmlFor='borderSizeSelect'>Adjust Line Size</label>
            <select id='borderSizeSelect' value={borderSize} onChange={handleBorderSizeChange}>
              {borderSizeOptions}
            </select>
          </CustomSelect>
        </form>
      </FormSection>
    </>
  );
}

export default Component1216Forms;
