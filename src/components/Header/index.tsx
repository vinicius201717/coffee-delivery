import {
  HeaderContainer,
  LocalContainer,
  StyledShoppingCar,
  StyledLink,
} from './style'
import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'

export function Header() {
  return (
    <HeaderContainer>
      <StyledLink to="/">
        <img src={logo} alt="Coffee" />
      </StyledLink>
      <div>
        <LocalContainer>
          <MapPin />
          <p>Porto Alegre, RS</p>
        </LocalContainer>
        <StyledShoppingCar>
          <StyledLink to="/checkout">
            <ShoppingCart />
          </StyledLink>
        </StyledShoppingCar>
      </div>
    </HeaderContainer>
  )
}
