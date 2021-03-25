import styled from '@emotion/styled'

export const StyledInfoBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  width: 90%;
  `

export const StyledMetaInfoContent = styled.div`
  border-radius: 0.5rem;
  background-color: #C9A495;
  display: flex;
  text-align: start;
  justify-content: space-evenly;
  align-items: center;
  flex-wrap: wrap;

  & div {
    & svg {
      min-width: 2rem;
    }
  }
  
  @media (min-width: 500px) {
    height: 6rem;
    font-size: 1.5rem;
  }
  `

export const StyledMetaInfoObject = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 1rem 0;
  align-items: center;
  justify-content: center;
  
  @media(min-width: 500px) {
    min-width: 6rem;
  }
 `

export const StyledMetaInfoIcon = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
`
