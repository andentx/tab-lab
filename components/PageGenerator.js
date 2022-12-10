import { useState } from 'react';

import styled from 'styled-components';

import ButtonSection from './ButtonSection';

const PageGeneratorContainer = styled.div`
  background-color: darkred;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 20rem;
`;

const PagePreviewContainer = styled.div`
  background-color: orange;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  margin-bottom: 2rem;
`;

const Page = styled.div`
  background-color: white;
  color: black;

  border: 3px solid black;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  aspect-ratio: 8.5/11;
  width: min(80%, 500px);
`;

const SettingsSectionContainer = styled.div`
  background-color: green;

  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: min(80%, 500px);
  min-height: 5rem;

  margin-bottom: 15rem;
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

function renderParagraphs(numParagraphs) {
  // Return the specified number of paragraph elements
  return Array(numParagraphs)
    .fill(0)
    .map((_, index) => <p key={index}>This is paragraph number {index + 1}.</p>);
}

const PageGenerator = () => {
  const [selectedNumberOfStrings, setSelectedNumberOfStrings] = useState(6);
  const [selectedNumberOfRows, setSelectedNumberOfRows] = useState(6);

  function handleNumberOfStringsChange(event) {
    setSelectedNumberOfStrings(event.target.value);
  }

  function handleNumberOfRowsChange(event) {
    setSelectedNumberOfRows(event.target.value);
  }

  return (
    <PageGeneratorContainer>
      <PagePreviewContainer>
        <Page>
          <p>selected number of strings: {selectedNumberOfStrings}</p>
          <p>selected number of rows: {selectedNumberOfRows}</p>
          <div>
            {/* Use the map method to render a number of paragraph elements based on the value of the numParagraphs state variable */}
            {Array(selectedNumberOfRows)
              .fill(0)
              .map((_, index) => (
                <p key={index}>This is paragraph number {index + 1}.</p>
              ))}
          </div>
        </Page>
      </PagePreviewContainer>
      <ButtonSection />
      <SettingsSectionContainer>
        <CustomSelect>
          <label htmlFor='numberOfStrings'>Number of Strings</label>
          <select id='numberOfStrings' value={selectedNumberOfStrings} onChange={handleNumberOfStringsChange}>
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
          <select id='numberOfRows' value={selectedNumberOfRows} onChange={renderParagraphs(10)}>
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
          <label htmlFor='numberOfMeasureLines'>Number of Measure Lines</label>
          <select id='numberOfMeasureLines'>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
            <option>6</option>
            <option>7</option>
            <option>8</option>
            <option>9</option>
            <option>10</option>
            <option>11</option>
            <option>12</option>
          </select>
          <svg width='24' height='24' viewBox='0 0 24 24'>
            <path d='M12 21l-12-18h24z' />
          </svg>
        </CustomSelect>
        <CustomSelect>
          <label htmlFor='offset'>Offset for 3-Ring Binder</label>
          <select id='offset'>
            <option>Offset for 3-Ring Binder</option>
            <option>Centered</option>
          </select>
          <svg width='24' height='24' viewBox='0 0 24 24'>
            <path d='M12 21l-12-18h24z' />
          </svg>
        </CustomSelect>
        <CustomSelect>
          <label htmlFor='pageHeading'>Heading</label>
          <select id='pageHeading'>
            <option>None</option>
            <option>Title</option>
            <option>Title + BPM + Key</option>
          </select>
          <svg width='24' height='24' viewBox='0 0 24 24'>
            <path d='M12 21l-12-18h24z' />
          </svg>
        </CustomSelect>
        <CustomSelect>
          <label htmlFor='horizontalAdjust'>Horizontal Adjust</label>
          <select id='horizontalAdjust'>
            <option>100%</option>
          </select>
          <svg width='24' height='24' viewBox='0 0 24 24'>
            <path d='M12 21l-12-18h24z' />
          </svg>
        </CustomSelect>
        <CustomSelect>
          <label htmlFor='verticalAdjust'>Vertical Adjust</label>
          <select id='verticalAdjust'>
            <option>100%</option>
          </select>
          <svg width='24' height='24' viewBox='0 0 24 24'>
            <path d='M12 21l-12-18h24z' />
          </svg>
        </CustomSelect>
      </SettingsSectionContainer>
    </PageGeneratorContainer>
  );
};

export default PageGenerator;
