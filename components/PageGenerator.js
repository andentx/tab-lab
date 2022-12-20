import { useState, useEffect } from 'react';

import styled from 'styled-components';

import PagePreview from '../components/PagePreview';
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

const CellsContainer = styled.div`
  background-color: black;

  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;

  width: 80%;
  height: 10%;
`;

const Cell = styled.div`
  background-color: white;
`;

const PageGenerator = () => {
  const [pageSettings, setPageSettings] = useState({
    numberOfStrings: 6, // duplicate?
    numberOfVerticalLines: 8, // duplicate?
    numberOfColumns: 8, // duplicate?
    numberOfRows: 6, // duplicate?
    numberOfCellContainers: 5,
    horizontalAdjust: 100,
    verticalAdjust: 100,
    horizontalOffset: 0,
    rowGap: 3,
    showPageHeader: true,
    headerHeight: 10,
    borderSize: 2,
    horizontalAdjust: 100,
  });

  const [cellHeight, setCellHeight] = useState();
  const [cellWidth, setCellWidth] = useState();
  const [cells, setCells] = useState([]);
  const [cellContainers, setCellContainers] = useState([]);
  const [cellContainerHeight, setCellContainerWidth] = useState(80);
  const [cellContainerWidth, setCellContainerHeight] = useState(10);

  function handleSettingsChange(event) {
    const { name, value } = event.target;
    setPageSettings((previousSettings) => ({ ...previousSettings, [name]: value }));
  }

  function createCells(rows, cols) {
    setCellHeight(100 / rows);
    setCellWidth(100 / cols);
    let newCells = [];
    for (var i = 0; i < rows * cols; i++) {
      console.log(`hi from 72`);
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
      console.log(`hi from 85`);

      newCellContainers.push({ label: i, value: i, key: i });
    }
    setCellContainers(newCellContainers);
  }

  useEffect(() => {
    createCellContainers(pageSettings.numberOfCellContainers);
  }, [pageSettings.numberOfCellContainers]);

  useEffect(() => {
    createCells(pageSettings.numberOfRows, pageSettings.numberOfColumns);
  }, [pageSettings]);

  const allCellsRendered = cells.map((cell) => (
    <Cell
      className='classsss' // fix this
      key={cell.key}
      id={cell['key']}
      style={{
        height: `${cellHeight}%`,
        width: `${cellWidth}%`,
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
        width: `${cellContainerWidth}%`,
        height: `${cellContainerHeight}%`,
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
      <PagePreview pageSettings={pageSettings} allCellContainersRendered={allCellContainersRendered}></PagePreview>
      <FormSection pageSettings={pageSettings} onInputChange={handleSettingsChange}></FormSection>
    </PageGeneratorContainer>
  );
};

export default PageGenerator;
