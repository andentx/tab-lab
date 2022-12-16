import React, { useState, useEffect, useRef } from 'react';

import ReactToPrint from 'react-to-print';

import { v4 as uuidv4 } from 'uuid';

import styled from 'styled-components';

const PagePreviewSection = styled.div`
  /* background-color: darkred; */

  display: flex;
  flex-direction: column;
  align-items: center;

  /* width: 100%; */
  width: min(100vw, 1200px);
  height: min(103vw, 647px);
  /* height: 400px; */

  margin-bottom: 2rem;

  @media print {
    margin: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    bottom: 0px;
    margin: auto;
  }
`;

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

const CustomSlider = styled.div`
  width: 80%;
  /* background-color: pink; */

  input {
    background-color: hotpink;
    border: 0;
    margin: 0;

    width: 100%;
  }
  input[type='range'] {
    width: 100%;
    margin: 12.8px 0;
    background-color: transparent;
    -webkit-appearance: none;
  }
  input[type='range']:focus {
    outline: none;
  }
  input[type='range']::-webkit-slider-runnable-track {
    background: #ffbf00;
    border: 0.2px solid #010101;
    border-radius: 1.3px;
    width: 100%;
    height: 8.4px;
    cursor: pointer;
  }
  input[type='range']::-webkit-slider-thumb {
    margin-top: -13px;
    width: 16px;
    height: 34px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 3px;
    cursor: pointer;
    -webkit-appearance: none;
  }
  input[type='range']:focus::-webkit-slider-runnable-track {
    background: #ffc51a;
  }
  input[type='range']::-moz-range-track {
    background: #ffbf00;
    border: 0.2px solid #010101;
    border-radius: 1.3px;
    width: 100%;
    height: 8.4px;
    cursor: pointer;
  }
  input[type='range']::-moz-range-thumb {
    width: 16px;
    height: 34px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 3px;
    cursor: pointer;
  }
  input[type='range']::-ms-track {
    background: transparent;
    border-color: transparent;
    border-width: 13.8px 0;
    color: transparent;
    width: 100%;
    height: 8.4px;
    cursor: pointer;
  }
  input[type='range']::-ms-fill-lower {
    background: #e6ac00;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
  }
  input[type='range']::-ms-fill-upper {
    background: #ffbf00;
    border: 0.2px solid #010101;
    border-radius: 2.6px;
  }
  input[type='range']::-ms-thumb {
    width: 16px;
    height: 34px;
    background: #ffffff;
    border: 1px solid #000000;
    border-radius: 3px;
    cursor: pointer;
    margin-top: 0px;
    /*Needed to keep the Edge thumb centred*/
  }
  input[type='range']:focus::-ms-fill-lower {
    background: #ffbf00;
  }
  input[type='range']:focus::-ms-fill-upper {
    background: #ffc51a;
  }
`;

const CustomSelect = styled.div`
  /* background-color: darkred; */

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  min-height: 5rem;
  width: 100%;

  label {
    background-color: var(--site-background-color);
    color: var(--text-color);

    /* background-color: orange; */

    font-size: 0.75rem;
    height: 1.5rem;

    padding: 0 0.25rem;

    margin-bottom: -1rem;
    margin-left: 0.6rem;
    z-index: 100;
  }
  select {
    background-color: var(--site-background-color);
    color: var(--text-color);

    font-size: 1.2rem;

    padding: 1rem;
    padding-right: 1rem;

    border: solid 2px var(--text-color);

    width: 100%;

    -webkit-appearance: none;
    -moz-appearance: none;
    appearance: none;
  }
  svg {
    fill: var(--text-color);
    align-self: flex-end;
    margin-top: -36px;
    margin-right: 20px;
    height: 16px;
    width: 16px;
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

  const horizontalAdjustOptions = [];
  for (let i = 90; i <= 120; i++) {
    horizontalAdjustOptions.push(
      <option value={i} key={uuidv4()}>
        {i}%
      </option>
    );
  }

  const verticalAdjustOptions = [];
  for (let i = 90; i <= 120; i++) {
    verticalAdjustOptions.push(
      <option value={i} key={uuidv4()}>
        {i}%
      </option>
    );
  }

  const horizontalOffsetOptions = [];
  for (let i = -20; i <= 20; i++) {
    horizontalOffsetOptions.push(
      <option value={i} key={uuidv4()}>
        {i}%
      </option>
    );
  }

  const rowGapAdjustOptions = [];
  for (let i = 0; i <= 10; i++) {
    rowGapAdjustOptions.push(
      <option value={i} key={uuidv4()}>
        {i}
      </option>
    );
  }

  const headerHeightOptions = [];
  for (let i = 0; i <= 20; i++) {
    headerHeightOptions.push(
      <option value={i} key={uuidv4()}>
        {i}
      </option>
    );
  }

  const borderSizeOptions = [];
  for (let i = 1; i <= 5; i++) {
    borderSizeOptions.push(
      <option value={i} key={uuidv4()}>
        {i}
      </option>
    );
  }

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
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='1'>10</option>
              <option value='1'>11</option>
              <option value='1'>12</option>
            </select>
            <svg width='24' height='24' viewBox='0 0 24 24'>
              <path d='M12 21l-12-18h24z' />
            </svg>
          </CustomSelect>

          <CustomSelect>
            <label htmlFor='numberOfMeasureLines'>Frets / Measures</label>
            <select id='numberOfMeasureLines' value={numberOfColumns} onChange={handleNumberOfColumnsChange}>
              <option value={1}>None</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
            </select>
            <svg width='24' height='24' viewBox='0 0 24 24'>
              <path d='M12 21l-12-18h24z' />
            </svg>
          </CustomSelect>

          <CustomSelect>
            <label htmlFor='numberOfRows'>Number of Rows</label>
            <select id='numberOfRows' value={numberOfCellContainers} onChange={handleNumberOfCellContainersChange}>
              <option value='0'>0</option>
              <option value='1'>1</option>
              <option value='2'>2</option>
              <option value='3'>3</option>
              <option value='4'>4</option>
              <option value='5'>5</option>
              <option value='6'>6</option>
              <option value='7'>7</option>
              <option value='8'>8</option>
              <option value='9'>9</option>
              <option value='10'>10</option>
              <option value='11'>11</option>
              <option value='12'>12</option>
            </select>
            <svg width='24' height='24' viewBox='0 0 24 24'>
              <path d='M12 21l-12-18h24z' />
            </svg>
          </CustomSelect>

          <CustomSelect>
            <label htmlFor='horizontalAdjust'>Adjust Horizontal Scale</label>
            <select id='horizontalAdjust' value={horizontalAdjust} onChange={handleHorizontalAdjustChange}>
              {horizontalAdjustOptions}
            </select>
            <svg width='24' height='24' viewBox='0 0 24 24'>
              <path d='M12 21l-12-18h24z' />
            </svg>
          </CustomSelect>

          <CustomSelect>
            <label htmlFor='verticalAdjust'>Adjust Vertical Scale</label>
            <select id='verticalAdjust' value={verticalAdjust} onChange={handleVerticalAdjustChange}>
              {verticalAdjustOptions}
            </select>
            <svg width='24' height='24' viewBox='0 0 24 24'>
              <path d='M12 21l-12-18h24z' />
            </svg>
          </CustomSelect>

          <CustomSelect>
            <label htmlFor='leftOffset'>Adjust Horizontal Offset</label>
            <select id='leftOffset' value={leftOffset} onChange={handleLeftOffsetChange}>
              {horizontalOffsetOptions}
            </select>
            <svg width='24' height='24' viewBox='0 0 24 24'>
              <path d='M12 21l-12-18h24z' />
            </svg>
          </CustomSelect>

          <CustomSelect>
            <label htmlFor='leftOffset'>Adjust Space Between Rows</label>
            <select id='gapBetweenTabRows' value={gapBetweenTabRows} onChange={handleGapBetweenTabRowsChange}>
              {rowGapAdjustOptions}
            </select>
            <svg width='24' height='24' viewBox='0 0 24 24'>
              <path d='M12 21l-12-18h24z' />
            </svg>
          </CustomSelect>

          <CustomSelect>
            <label htmlFor='pageHeaderSelect'>Page Header</label>
            <select id='pageHeaderSelect' value={isHeaderVisible} onChange={handleIsHeaderVisibleChange}>
              <option value='true'>Show</option>
              <option value='false'>Hide</option>
            </select>
            <svg width='24' height='24' viewBox='0 0 24 24'>
              <path d='M12 21l-12-18h24z' />
            </svg>
          </CustomSelect>

          <CustomSelect>
            <label htmlFor='headerHeightSelect'>Page Header Height</label>
            <select id='headerHeightSelect' value={headerHeight} onChange={handleHeaderHeightChange}>
              {headerHeightOptions}
            </select>
            <svg width='24' height='24' viewBox='0 0 24 24'>
              <path d='M12 21l-12-18h24z' />
            </svg>
          </CustomSelect>

          <CustomSelect>
            <label htmlFor='borderSizeSelect'>Adjust Line Size</label>
            <select id='borderSizeSelect' value={borderSize} onChange={handleBorderSizeChange}>
              {borderSizeOptions}
            </select>
            <svg width='24' height='24' viewBox='0 0 24 24'>
              <path d='M12 21l-12-18h24z' />
            </svg>
          </CustomSelect>
        </form>
      </FormSection>
    </>
  );
}

export default Component1216Forms;
