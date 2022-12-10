import React, { useState } from 'react';

import styled from 'styled-components';

const PagePreviewSection = styled.div`
  background-color: darkred;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 400px;

  padding-top: 20px;

  margin-bottom: 50px;
`;

const PagePreviewContainer = styled.div`
  background-color: white;

  border: 3px solid black;

  display: flex;
  flex-direction: column;
  align-items: center;

  aspect-ratio: 8.5/11;
  width: min(80%, 500px);

  padding-top: 50px;
  margin-bottom: 50px;
`;

const TabRow = styled.div`
  background-color: pink;

  width: 80%;
  height: 80px;

  border: 3px solid black;

  display: flex;
  flex-wrap: wrap;
`;

const Cell = styled.div`
  background-color: green;
  border: 1px solid black;
`;

const SettingsSection = styled.div`
  background-color: darkblue;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 300px;

  padding-top: 20px;
`;

function TryAgain() {
  const [cellHeight, setCellHeight] = useState(30);
  const [cellWidth, setCellWidth] = useState(20);

  function handleCellHeightChange(event) {
    setCellHeight(event.target.value);
  }

  function handleCellWidthChange(event) {
    setCellWidth(event.target.value);
  }

  return (
    <>
      <PagePreviewSection>
        <PagePreviewContainer>
          <TabRow>
            <Cell
              style={{
                height: `${cellHeight}%`,
                width: `${cellWidth}%`,
              }}
            ></Cell>
          </TabRow>
        </PagePreviewContainer>
      </PagePreviewSection>

      <SettingsSection>
        <form>
          <label>
            Enter the Cell Height:
            <input type='number' value={cellHeight} onChange={handleCellHeightChange} />
          </label>
          <br />
          <label>
            Enter the Cell Width:
            <input type='number' value={cellWidth} onChange={handleCellWidthChange} />
          </label>
        </form>
      </SettingsSection>
    </>
  );
}

export default TryAgain;
