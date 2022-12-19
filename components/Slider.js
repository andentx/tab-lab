import React, { useState, useEffect, useRef } from 'react';

import ReactToPrint from 'react-to-print';

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

function Component1215Forms() {
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
  const [gapBetweenTabRows, setGapBetweenTabRows] = useState(3);
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
    console.log(`hello from handleIsHeaderVisibleChange`);
    console.log(`isHeaderVisible is ${isHeaderVisible}`);
    console.log(`headerDisplayProperty is ${headerDisplayProperty}`);

    setIsHeaderVisible(!isHeaderVisible);

    if (isHeaderVisible === true) {
      setHeaderDisplayProperty('flex');
    }
    if (isHeaderVisible === false) {
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
        <PrintButton onClick={handlePrintButtonClick}>Print</PrintButton>
        <ReactToPrint trigger={() => <RTPButton>RTP</RTPButton>} content={() => componentRef} />
      </ButtonSection>

      <FormSection>
        <form>
          <label>
            Enter the Number of Strings:
            <input type='number' value={numberOfStrings} onChange={handleNumberOfStringsChange} />
          </label>
          <br />
          <input
            type='range'
            min='0'
            max='100'
            step='12.5'
            defaultValue='25'
            list='steplist'
            style={{
              width: `80%`,
              backgroundColor: 'transparent',
            }}
            onChange={handleSteplistValueChange}
          />
          <datalist id='steplist'>
            <option>0</option>
            <option>12.5</option>
            <option>25</option>
            <option>37.5</option>
            <option>50</option>
            <option>62.5</option>
            <option>75</option>
            <option>87.5</option>
            <option>100</option>
          </datalist>
          <div>{steplistValue}</div>
          <br />
          <CustomSlider>
            <input type='range' min='0' max='100' step='12.5' defaultValue='25' list='steplist' onChange={handleSteplistValueChange} />
            <datalist id='steplist'>
              <option>0</option>
              <option>12.5</option>
              <option>25</option>
              <option>37.5</option>
              <option>50</option>
              <option>62.5</option>
              <option>75</option>
              <option>87.5</option>
              <option>100</option>
            </datalist>
            <div>{steplistValue}</div>
          </CustomSlider>

          <br />

          <label>
            Enter the Number of Strings:
            <input type='number' value={numberOfStrings} onChange={handleNumberOfStringsChange} />
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
          <br />
          <label>
            Show Header :
            <input type='text' value={isHeaderVisible} onChange={handleIsHeaderVisibleChange} />
          </label>
          <br />
          <label>
            Header Height :
            <input type='number' value={headerHeight} onChange={handleHeaderHeightChange} />
          </label>
          <br />
          <label>
            Enter Border Size :
            <input type='number' value={borderSize} onChange={handleBorderSizeChange} />
          </label>
        </form>
      </FormSection>
    </>
  );
}

export default Component1215Forms;
