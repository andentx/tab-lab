import React, { useState, useEffect, useRef } from 'react';

import ReactToPrint from 'react-to-print';

import styled from 'styled-components';

import PagePreview from './PagePreview';
import ButtonSection from './ButtonSection';
import ComponentToPrintSafari from './ComponentToPrintSafari';
import ComponentToPrintChrome from './ComponentToPrintChrome';
import FormSection from './FormSection';

const PageGeneratorContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  margin-bottom: clamp(10rem, 7rem + 16vw, 15rem);

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const PageAndButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RTPButtonSafari = styled.button``;
const RTPButtonChrome = styled.button``;
const InvisibleDiv = styled.div``;

const ComponentToPrintContainerSafari = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ComponentToPrintContainerChrome = styled.div``;

const CellsContainer = styled.div`
  background-color: black;

  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
`;

const Cell = styled.div`
  background-color: white;
`;

const PageGenerator = () => {
  const [pageSettings, setPageSettings] = useState({
    numberOfStrings: 6,
    numberOfVerticalLines: 1,
    cellHeight: 25,
    cellWidth: 12.5,
    numberOfCellContainers: 7,
    cellContainerWidth: 80,
    cellContainerHeight: 10,
    horizontalAdjust: 100,
    verticalAdjust: 100,
    horizontalOffset: 0,
    rowGap: 4,
    showPageHeader: '2px solid black',
    headerHeight: 10,
    borderSize: 2,
    pageHeight: 11.0,
    pageWidth: 8.5,
  });

  const [cells, setCells] = useState([]);
  const [cellContainers, setCellContainers] = useState([]);

  function handleSettingsChange(event) {
    const { name, value } = event.target;
    setPageSettings((previousSettings) => ({ ...previousSettings, [name]: value }));
  }

  function createCells(numberOfStrings, numberOfVerticalLines) {
    let rows = numberOfStrings - 1;
    let cols = numberOfVerticalLines;

    setPageSettings((previousSettings) => ({
      ...previousSettings,
      cellHeight: 100 / rows,
      cellWidth: 100 / cols,
    }));
    let newCells = [];
    for (var i = 0; i < rows * cols; i++) {
      newCells.push({ label: i, value: i, key: i });
    }
    setCells(newCells);
  }

  function createCellContainers(number) {
    setPageSettings((previousSettings) => ({
      ...previousSettings,
      numberOfCellContainers: number,
    }));
    let newCellContainers = [];
    for (var i = 0; i < number; i++) {
      newCellContainers.push({ label: i, value: i, key: i });
    }
    setCellContainers(newCellContainers);
  }

  useEffect(() => {
    createCellContainers(pageSettings.numberOfCellContainers);
  }, [pageSettings.numberOfCellContainers]);

  useEffect(() => {
    createCells(pageSettings.numberOfStrings, pageSettings.numberOfVerticalLines);
  }, [pageSettings.numberOfStrings, pageSettings.numberOfVerticalLines]);

  const allCellsRendered = cells.map((cell) => (
    <Cell
      key={cell.key}
      id={cell['key']}
      style={{
        height: `${pageSettings.cellHeight}%`,
        width: `${pageSettings.cellWidth}%`,
        border: `${pageSettings.borderSize / 2}px solid black`,
      }}
    />
  ));

  const allCellContainersRendered = cellContainers.map((cellContainer) => (
    <CellsContainer
      key={cellContainer.key}
      id={cellContainer['key']}
      style={{
        width: `${pageSettings.horizontalAdjust - 20}%`,
        height: `${pageSettings.verticalAdjust - 90}%`,
        marginLeft: `${pageSettings.horizontalOffset}%`,
        marginBottom: `${pageSettings.rowGap}%`,
        border: `${pageSettings.borderSize / 2}px solid black`,
      }}
    >
      {allCellsRendered}
    </CellsContainer>
  ));

  let componentRefSafari = useRef();
  let componentRefChrome = useRef();

  return (
    <PageGeneratorContainer>
      <PageAndButtonsContainer>
        <PagePreview pageSettings={pageSettings} allCellContainersRendered={allCellContainersRendered} />
        <ButtonSection>
          <ReactToPrint trigger={() => <RTPButtonSafari>Print Safari</RTPButtonSafari>} content={() => componentRefSafari} />
          <ReactToPrint trigger={() => <RTPButtonChrome>Print Chrome</RTPButtonChrome>} content={() => componentRefChrome} />
        </ButtonSection>
      </PageAndButtonsContainer>

      <FormSection pageSettings={pageSettings} onInputChange={handleSettingsChange}></FormSection>

      <InvisibleDiv style={{ display: 'none' }}>
        <ComponentToPrintContainerChrome ref={(el) => (componentRefChrome = el)}>
          <ComponentToPrintChrome pageSettings={pageSettings} allCellContainersRendered={allCellContainersRendered} />
        </ComponentToPrintContainerChrome>

        <ComponentToPrintContainerSafari ref={(el) => (componentRefSafari = el)}>
          <ComponentToPrintSafari pageSettings={pageSettings} allCellContainersRendered={allCellContainersRendered} />
        </ComponentToPrintContainerSafari>
      </InvisibleDiv>
    </PageGeneratorContainer>
  );
};

export default PageGenerator;
