import styled from 'styled-components';

import CustomSelect from './CustomSelect';

import { v4 as uuidv4 } from 'uuid';

const FormSectionContainer = styled.div`
  padding-top: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: min(80%, 500px);

  /* @media (min-width: 1200px) {
    padding-top: 0;
  } */

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
`;

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

const FormSection = ({ pageSettings, onInputChange }) => {
  const numberOfStringsOptions = createOptions(4, 12);
  const numberOfVerticalLinesOptions = createOptions(2, 12);
  const numberOfCellContainersOptions = createOptions(0, 12);
  const horizontalAdjustOptions = createOptions(80, 120);
  const verticalAdjustOptions = createOptions(95, 110);
  const horizontalOffsetOptions = createOptions(-20, 20);
  const rowGapOptions = createOptions(0, 10);
  const headerHeightOptions = createOptions(0, 20);
  const borderSizeOptions = createOptions(1, 5);

  return (
    <FormSectionContainer>
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
          <label htmlFor='numberOfCellContainersSelect'>Number of Rows</label>
          <select id='numberOfCellContainers' name='numberOfCellContainers' value={pageSettings.numberOfCellContainers} onChange={onInputChange}>
            {numberOfCellContainersOptions}
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
            <option value='2px solid black'>Show</option>
            <option value='none'>Hide</option>
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
    </FormSectionContainer>
  );
};

export default FormSection;
