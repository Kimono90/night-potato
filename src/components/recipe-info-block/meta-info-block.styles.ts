import styled from '@emotion/styled'

export const StyledInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 3rem;
  `

export const StyledMetaInfo = styled.div`
  border-radius: 0.5rem;
  background-color: #C9A495;
  display: flex;
  text-align: start;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  & div {
    margin: 0.5rem 1.5rem;

    & svg {
      min-width: 2rem;
    }
  }
  
  @media (min-width: 500px) {
    height: 3rem;
    font-size: 1.5rem;
  }
  `