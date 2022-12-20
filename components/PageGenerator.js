import { useState } from 'react';

import styled from 'styled-components';

import PagePreview from '../components/PagePreview';
import FormSection from './FormSection';

const PageGeneratorContainer = styled.div`
  display: flex;

  width: 100%;

  flex-direction: column;
  align-items: center;

  /* @media (min-width: 1200px) {
    flex-direction: row;
    align-items: flex-start;
    justify-content: space-between;
  } */
`;

const PageGenerator = () => {
  const [pageSettings, setPageSettings] = useState({
    numberOfStrings: 6,
    numberOfVerticalLines: 8,
    numberOfRows: 6,
    horizontalAdjust: 100,
    verticalAdjust: 100,
    horizontalOffset: 0,
    rowGap: 3,
    showPageHeader: true,
    headerHeight: 10,
    borderSize: 2,
    horizontalAdjust: 100,
  });

  function handleSettingsChange(event) {
    const { name, value } = event.target;
    setPageSettings((previousSettings) => ({ ...previousSettings, [name]: value }));
  }

  return (
    <PageGeneratorContainer>
      <PagePreview pageSettings={pageSettings}></PagePreview>
      <FormSection pageSettings={pageSettings} onInputChange={handleSettingsChange}></FormSection>
    </PageGeneratorContainer>
  );
};

export default PageGenerator;
