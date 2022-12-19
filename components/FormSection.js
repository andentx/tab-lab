import styled from 'styled-components';

import CustomSelect from './CustomSelect';

import { v4 as uuidv4 } from 'uuid';

const Gen2FormSectionContainer = styled.div``;

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

const Gen2FormSection = ({ pageSettings, onInputChange }) => {
  const numberOfStringsOptions = createOptions(4, 12);
  const numberOfVerticalLinesOptions = createOptions(2, 12);
  const numberOfRowsOptions = createOptions(0, 12);
  const horizontalAdjustOptions = createOptions(90, 120);
  const verticalAdjustOptions = createOptions(90, 120);
  const horizontalOffsetOptions = createOptions(-20, 20);
  const rowGapOptions = createOptions(0, 10);
  const headerHeightOptions = createOptions(0, 20);
  const borderSizeOptions = createOptions(1, 5);

  return (
    <Gen2FormSectionContainer>
      <form>
        <CustomSelect>
          <label htmlFor='numberOfStringsSelect'>Number of Strings</label>
          <select id='numberOfStringsSelect' name='numberOfStrings' value={pageSettings.numberOfStrings} onChange={onInputChange}>
            {numberOfStringsOptions}
          </select>
        </CustomSelect>

        <CustomSelect>
          <label htmlFor='numberOfVerticalLinesSelect'>Frets / Measures</label>
          <select id='numberOfVerticalLinesSelect' name='numberOfVerticalLines' value={pageSettings.numberOfVerticalLines} onChange={onInputChange}>
            <option value={1}>None</option>
            {numberOfVerticalLinesOptions}
          </select>
        </CustomSelect>

        <CustomSelect>
          <label htmlFor='numberOfRowsSelect'>Number of Rows</label>
          <select id='numberOfRowsSelect' name='numberOfRows' value={pageSettings.numberOfRows} onChange={onInputChange}>
            {numberOfRowsOptions}
          </select>
        </CustomSelect>

        <CustomSelect>
          <label htmlFor='horizontalAdjustSelect'>Adjust Horizontal Scale</label>
          <select id='horizontalAdjustSelect' name='horizontalAdjust' value={pageSettings.horizontalAdjust} onChange={onInputChange}>
            {horizontalAdjustOptions}
          </select>
        </CustomSelect>

        <CustomSelect>
          <label htmlFor='verticalAdjustSelect'>Adjust Vertical Scale</label>
          <select id='verticalAdjustSelect' name='verticalAdjust' value={pageSettings.verticalAdjust} onChange={onInputChange}>
            {verticalAdjustOptions}
          </select>
        </CustomSelect>

        <CustomSelect>
          <label htmlFor='horizontalOffsetSelect'>Adjust Horizontal Offset</label>
          <select id='horizontalOffsetSelect' name='horizontalOffset' value={pageSettings.horizontalOffset} onChange={onInputChange}>
            {horizontalOffsetOptions}
          </select>
        </CustomSelect>

        <CustomSelect>
          <label htmlFor='rowGapSelect'>Adjust Space Between Rows</label>
          <select id='rowGapSelect' name='rowGap' value={pageSettings.rowGap} onChange={onInputChange}>
            {rowGapOptions}
          </select>
        </CustomSelect>

        <CustomSelect>
          <label htmlFor='showPageHeaderSelect'>Page Header</label>
          <select id='showPageHeaderSelect' name='showPageHeader' value={pageSettings.showPageHeader} onChange={onInputChange}>
            <option value='true'>Show</option>
            <option value='false'>Hide</option>
          </select>
        </CustomSelect>

        <CustomSelect>
          <label htmlFor='headerHeightSelect'>Page Header Height</label>
          <select id='headerHeightSelect' name='headerHeight' value={pageSettings.headerHeight} onChange={onInputChange}>
            {headerHeightOptions}
          </select>
        </CustomSelect>

        <CustomSelect>
          <label htmlFor='borderSizeSelect'>Adjust Line Size</label>
          <select id='borderSizeSelect' name='borderSize' value={pageSettings.borderSize} onChange={onInputChange}>
            {borderSizeOptions}
          </select>
        </CustomSelect>
      </form>
    </Gen2FormSectionContainer>
  );
};

export default Gen2FormSection;