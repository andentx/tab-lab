import styled from 'styled-components';

const CustomSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  min-height: 5rem;
  width: 100%;

  label {
    background-color: var(--site-background-color);
    color: var(--form-label-color);

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

    border: solid 2px var(--form-border-color);

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

const CustomSelect = ({ children }) => {
  return (
    <CustomSelectContainer>
      {children}
      <svg width="24" height="24" viewBox="0 0 24 24">
        <path d="M12 21l-12-18h24z" />
      </svg>
    </CustomSelectContainer>
  );
};

export default CustomSelect;
