import styled from '@emotion/styled';
import { colors } from '../../styles/potato-styles';

export const StyledRecipeOverviewPage = styled.div`
  padding: 0 1rem 1rem 1rem;
  background-color: ${colors.grey};
  color: ${colors.white};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
  margin-bottom: 2rem;
`;
export const StyledRecipeResults = styled.div`
  display: flex;
  -webkit-flex-wrap: wrap;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 1rem;
  width: 90%;
`;

export const StyledSearchBox = styled.input`
  margin-top: 4rem;
  width: 75%;
  padding: 0.5rem 1rem;
  border-radius: 0.5rem;
  border: solid black 1px;
  font-family: 'Patrick Hand', cursive;
  font-size: 1.5rem;
  color: ${colors.grey};
  outline: none;

  @media (min-width: 500px) {
    width: 50%;
  }
`;
