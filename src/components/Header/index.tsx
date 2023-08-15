import { HeaderContainer, LocalContainer, StyledShoppingCar } from './style'
import logo from '../../assets/Logo.svg'
import { MapPin, ShoppingCart } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logo} alt="Coffee" />
      <div>
        <LocalContainer>
          <MapPin />
          <p>Porto Alegre, RS</p>
        </LocalContainer>
        <StyledShoppingCar>
          <Link to="/checkout">
            <ShoppingCart />
          </Link>
        </StyledShoppingCar>
      </div>
    </HeaderContainer>
  )
}
