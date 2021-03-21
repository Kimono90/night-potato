import styled from '@emotion/styled';

export const StyledIngredient = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem;
  flex-wrap: nowrap;
  cursor: pointer;

  svg {
    cursor: pointer;
    margin-left: 1rem;
  }
  
  p {
    text-align: start;
    margin: 0 1rem;
  }
  
  #amount {
    display: inline-block;
    
    @media(min-width: 500px) {
      width: 8rem;
    }
  }
`

export const StyledEquipment = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  margin: 0.5rem 1.5rem;
  flex-wrap: nowrap;
`


type TabProps = {
  visible?: boolean;
}

export const StyledTabList = styled.div<TabProps>`
  border-radius: 0.5rem;
  background-color: #C9A495;
  align-items: flex-start;
  flex-wrap: wrap;
  flex-direction: column;
  display: ${props => props.visible ? 'flex' : 'none'};

  @media (min-width: 500px) {
    font-size: 1.5rem;
  }
  `

export const StyledTabTitle = styled.div<TabProps>`
  width: 50%;
  align-self: center;
  font-size: 2rem;
  padding: 0.5rem;
  border-radius: 0.5rem 0.5rem 0 0;
  background-color:${props => props.visible ? '#635554' : '#7D6C6A'} ;

  :hover {
    cursor: pointer;
  }
  `
