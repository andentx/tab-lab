import styled from 'styled-components';

import TextField from '@mui/material/TextField';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: '#ff0000', // color of outline and label when focused
    },
    text: {
      primary: '#ffa500', // color of text inside of form when not focused
      secondary: '#ffff00', // color of label text when not focused
    },
  },
});

const SettingsSectionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  width: min(80%, 500px);
  min-height: 5rem;

  margin-bottom: 15rem;

  .MuiOutlinedInput-notchedOutline {
    border: 2px solid red; // color of notched outline when not focused
    border-radius: 0;
  }

  .MuiNativeSelect-icon,
  .MuiSelect-icon {
    fill: red;
  }
`;

const SettingsSection = () => {
  return (
    <ThemeProvider theme={theme}>
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
          <option>Example 1 - MUI - TextField - Select - Native</option>
        </TextField>
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
          <option>Example 1 - MUI - TextField - Select - Native</option>
        </TextField>
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
          <option>Example 1 - MUI - TextField - Select - Native</option>
        </TextField>
        <TextField
          id='example1'
          select
          fullWidth
          margin='normal'
          label='Example 1'
          value='Example 1'
          SelectProps={{
            native: false,
          }}
        >
          <option>Example 1 - MUI - TextField - Select - Native</option>
        </TextField>
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
          <option>Example 1 - MUI - TextField - Select - Native</option>
        </TextField>
      </SettingsSectionContainer>
    </ThemeProvider>
  );
};

export default SettingsSection;
