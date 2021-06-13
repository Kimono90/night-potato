import styled from '@emotion/styled';

export const StyledPage = styled.div`
  background-color: #30343f;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-top: 3rem;
  padding-bottom: 1.5rem;
`;

export const StyledSummaryCard = styled.div`
  border-radius: 0.5rem;
  margin: 0 1rem 2rem 1rem;
  background-color: #7d6c6a;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 95%;
  font-size: 1.25rem;
  box-sizing: border-box;

  @media (min-width: 500px) {
    width: 45rem;
    margin-right: 1rem;
    margin-left: 1rem;
  }
`;

export const StyledTitle = styled.div`
  max-width: 95%;
  align-self: center;
  font-size: 1.5rem;
  padding: 0.5rem;

  @media (min-width: 500px) {
    font-size: 2rem;
  }
`;

export const StyledBody = styled.div`
  border-radius: 0.5rem;
  background-color: #c9a495;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  display: flex;

  @media (min-width: 500px) {
    font-size: 1.5rem;
  }
`;

export const StyledRemoveButton = styled.button`
  font: inherit;
  font-size: 1rem;
  color: white;
  border: none;
  background-color: orangered;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  text-align: center;
  cursor: pointer;
`;

export const StyledAddButton = styled.button`
  font: inherit;
  font-size: 1rem;
  color: white;
  border: none;
  background-color: #7d6c6a;
  border-radius: 0.5rem;
  text-align: center;
  align-self: center;
  padding: 0.25rem 0.5rem;
  min-width: 4rem;
  margin: 1rem 0;
  cursor: pointer;
`;

type FieldProps = {
  hasError?: string;
  width?: string;
};

export const StyledTextField = styled.input<FieldProps>`
  font-family: inherit;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  outline: none;
  width: 10rem;
  margin: 0.5rem;
  border-color: ${(props) => (props.hasError === 'true' ? 'red' : 'none')};

  @media (min-width: 500px) {
    width: 18rem;
  }
`;

export const StyledNumericField = styled.input<FieldProps>`
  font: inherit;
  font-size: 1.5rem;
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  outline: none;
  width: ${(props) => props.width};
  overflow: hidden;
  -moz-appearance: textfield;
  margin: 0.5rem;
  border-color: ${(props) => (props.hasError === 'true' ? 'red' : 'none')};

  ::-webkit-inner-spin-button,
  ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const StyledSelectField = styled.select`
  border-radius: 0.5rem;
  padding: 0.25rem 0.5rem;
  outline: none;
  font-family: inherit;
  font-size: 1.5rem;
  color: grey;
  min-width: 7rem;
  margin: 0.5rem 0 0 0.5rem;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  //noinspection CssUnknownTarget
  background: url('/select_arrow.svg') 96% / 20% no-repeat #eee;

  @media (min-width: 500px) {
    margin: 0.5rem;
  }

  :after {
    border-radius: 0.5rem;
  }
`;
