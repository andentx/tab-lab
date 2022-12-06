import styled from 'styled-components';

import TextField from '@mui/material/TextField';

const SettingsSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: min(80%, 500px);
  min-height: 5rem;

  margin-bottom: 15rem;
`;

const SettingsSection = () => {
  return (
    <SettingsSectionContainer>
      <TextField
        id='example1'
        select
        fullWidth
        margin='normal'
        label='Example 1'
        value='Example 1'
        SelectProps={{
          native: true,
        }}
      >
        ` <option>Example 1 - MUI - TextField - Select - Native</option>
      </TextField>
      <TextField
        id='example2'
        select
        fullWidth
        margin='normal'
        label='Example 2'
        value='Example 2'
        SelectProps={{
          native: true,
        }}
      >
        ` <option>Example 2 - MUI - TextField - Select - Native</option>
      </TextField>
      <TextField
        id='example3'
        select
        fullWidth
        margin='normal'
        label='Example 3'
        value='Example 3'
        SelectProps={{
          native: true,
        }}
      >
        ` <option>Example 3 - MUI - TextField - Select - Native</option>
      </TextField>
    </SettingsSectionContainer>
  );
};

export default SettingsSection;
