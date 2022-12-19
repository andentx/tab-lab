import { useState } from 'react';

import styled from 'styled-components';

import Gen2PagePreview from '../components/Gen2PagePreview';
import Gen2FormSection from '../components/Gen2FormSection';

const Gen2PageGeneratorContainer = styled.div`
  background-color: hotpink;
  padding: 2rem;
`;

const Gen2PageGenerator = () => {
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
    <Gen2PageGeneratorContainer>
      <Gen2PagePreview pageSettings={pageSettings}></Gen2PagePreview>
      <Gen2FormSection pageSettings={pageSettings} onInputChange={handleSettingsChange}></Gen2FormSection>
    </Gen2PageGeneratorContainer>
  );
};

export default Gen2PageGenerator;
