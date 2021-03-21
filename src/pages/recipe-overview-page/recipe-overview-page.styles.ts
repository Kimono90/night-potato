import styled from '@emotion/styled';

export const StyledRecipeOverviewPage = styled.div`
  padding: 0 1rem 1rem 1rem;
  background-color: #30343F;
  color: #ffffff;
  display: flex;
  align-items: center;
  text-align: center;
  flex-direction: column;

  @media (min-width: 500px) {
    flex-direction: unset;
    -webkit-flex-wrap: wrap;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
    margin-top: 3rem;
  }
  `