import styled from 'styled-components';

import TextField from '@mui/material/TextField';

import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    type: 'dark',
    primary: {
      main: 'hsl(34, 78%, 91%)', // color of outline and label when focused
    },
    text: {
      primary: 'hsl(34, 78%, 91%)', // color of text inside of form when not focused
      secondary: 'hsl(34, 78%, 91%)', // color of label text when not focused
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
    border: 2px solid hsl(34, 78%, 91%); // color of notched outline when not focused
    border-radius: 0;
  }

  .MuiNativeSelect-icon,
  .MuiSelect-icon {
    fill: hsl(34, 78%, 91%);
  }
`;

const MyCustomForm = styled.div`
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

const SettingsSection = () => {
  return (
    <ThemeProvider theme={theme}>
      <SettingsSectionContainer>
        <TextField
          id='example1'
          select
          fullWidth
          margin='normal'
          label='String Number'
          value='Example 1'
          SelectProps={{
            native: true,
          }}
        >
          <option>Example 1 - MUI - TextField - Select - Native</option>
          <option>Example 1 - MUI - TextField - Select - Native</option>
          <option>Example 1 - MUI - TextField - Select - Native</option>
        </TextField>
        <MyCustomForm>
          <label htmlFor='selectElement'>String Number</label>
          <select id='selectElement'>
            <option>Example 2 - Custom</option>
            <option>Example 2 - Custom</option>
            <option>Example 2 - Custom</option>
          </select>
          <svg width='24' height='24' viewBox='0 0 24 24'>
            <path d='M12 21l-12-18h24z' />
          </svg>
        </MyCustomForm>
        <div>
          <label htmlFor='selectElement'>String Number</label>
          <select id='selectElement'>
            <option>Example 2 - Custom</option>
            <option>Example 2 - Custom</option>
            <option>Example 2 - Custom</option>
          </select>
        </div>
      </SettingsSectionContainer>
    </ThemeProvider>
  );
};

export default SettingsSection;
