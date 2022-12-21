import React from 'react';
import { useState, useEffect, useRef } from 'react';

import ReactToPrint from 'react-to-print';

import styled from 'styled-components';

import PagePreview from '../components/PagePreview';
import ComponentToPrint from '../components/ComponentToPrint';
import FormSection from './FormSection';

const PageGeneratorContainer = styled.div`
  display: flex;

  width: 100%;

  flex-direction: column;
  align-items: center;

  @media (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  }
`;

const ButtonSection = styled.div`
  background-color: orange;
  @media print {
    display: none;
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

const InvisibleDiv = styled.div``;

const ComponentToPrintContainer = styled.div`
  background-color: blue;

  @page {
    size: 8.5in 11in;
  }
`;

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
  let componentRef = useRef();

  const [pageSettings, setPageSettings] = useState({
    numberOfStrings: 6,
    numberOfVerticalLines: 8,
    cellHeight: 25,
    cellWidth: 12.5,
    numberOfCellContainers: 12,
    cellContainerWidth: 80,
    cellContainerHeight: 10,
    horizontalAdjust: 120, //reset to 100
    verticalAdjust: 100,
    horizontalOffset: 0,
    rowGap: 0, // reset to 3
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
      className='classsss' // fix this
      key={cell.key}
      id={cell['key']} // fix this
      style={{
        height: `${pageSettings.cellHeight}%`,
        width: `${pageSettings.cellWidth}%`,
        border: `${pageSettings.borderSize / 2}px solid black`,
      }}
    >
      {cell.name}
    </Cell>
  ));

  const allCellContainersRendered = cellContainers.map((cellContainer) => (
    <CellsContainer
      className='cellContainer'
      key={cellContainer.key}
      style={{
        width: `${pageSettings.horizontalAdjust - 20}%`,
        height: `${pageSettings.verticalAdjust - 90}%`,
        marginLeft: `${pageSettings.horizontalOffset}%`,
        marginBottom: `${pageSettings.rowGap}%`,
        border: `${pageSettings.borderSize / 2}px solid black`,
      }}
      id={cellContainer['key']}
    >
      {allCellsRendered}
    </CellsContainer>
  ));

  return (
    <PageGeneratorContainer>
      <PagePreview pageSettings={pageSettings} allCellContainersRendered={allCellContainersRendered} />

      <InvisibleDiv style={{ display: 'none' }}>
        <ComponentToPrintContainer ref={(el) => (componentRef = el)}>
          <PagePreview pageSettings={pageSettings} allCellContainersRendered={allCellContainersRendered} />
        </ComponentToPrintContainer>
      </InvisibleDiv>

      <ButtonSection>
        <button>button</button>
        <ReactToPrint trigger={() => <RTPButton>Print</RTPButton>} content={() => componentRef} />
      </ButtonSection>
      <FormSection pageSettings={pageSettings} onInputChange={handleSettingsChange}></FormSection>
    </PageGeneratorContainer>
  );
};

export default PageGenerator;
