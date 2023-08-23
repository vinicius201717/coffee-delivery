import styled from 'styled-components'
import { Link } from 'react-router-dom'

export const StyledLink = styled(Link)`
  height: 22px;
`

export const HeaderContainer = styled.header`
  width: 100%;
  padding: 2rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${(props) => props.theme.background};

  div {
    display: flex;
  }
`
export const LocalContainer = styled.div`
  padding: 0.5rem;
  background: ${(props) => props.theme.purpleLight};
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  svg {
    width: 22px;
    height: 22px;
    fill: ${(props) => props.theme.purple};
    margin-right: 0.3rem;
  }

  p {
    color: ${(props) => props.theme.purpleDark};
  }
`

export const StyledShoppingCar = styled.div`
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  margin-left: 0.4rem;
  background: ${(props) => props.theme.yellowLight};

  svg {
    width: 22px;
    height: 22px;
    color: ${(props) => props.theme.yellowDark};
  }
`
