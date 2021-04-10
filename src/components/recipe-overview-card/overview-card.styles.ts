import styled from '@emotion/styled';

export const StyledOverviewCard = styled.div`
  border-radius: 0.5rem;
  margin-bottom: 2rem;
  background-color: #7d6c6a;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90%;
  transition: all 0.2s ease-in-out;

  :hover {
    box-shadow: 0 0 6px 6px rgba(255, 255, 255, 0.2);
    transform: scale(1.025);
    cursor: pointer;
  }

  @media (min-width: 500px) {
    width: 30rem;
    margin: 1rem;
  }
`;

export const StyledOverviewTitle = styled.div`
  max-width: 90%;
  align-self: center;
  font-size: 1.5rem;
  padding: 0.5rem;
`;

export const StyledOverviewInfo = styled.div`
  border-radius: 0.5rem;
  background-color: #c9a495;
  display: flex;
  text-align: start;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 500px) {
    height: 10rem;
    min-width: 25rem;
  }
`;

export const StyledOverviewDescription = styled.div`
  flex-direction: column;
  width: 65%;

  & div {
    margin: 0.5rem 1.5rem;

    & svg {
      min-width: 2rem;
    }
  }

  @media (min-width: 500px) {
    max-height: 10rem;
    font-size: 1.5rem;
  }
`;

export const StyledOverviewPhoto = styled.div`
  max-height: 100%;
  max-width: 50%;
  width: 35%;
  height: 7rem;
  padding: 0;
  margin: 0;
  background-position: center;
  background-size: cover;
  border-radius: 0 0.5rem 0.5rem 0;

  @media (min-width: 500px) {
    width: 50%;
    height: 50rem;
  }
`;
