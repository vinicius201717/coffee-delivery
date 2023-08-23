import { useNavigate } from 'react-router-dom'
import { FirstSectionCheckout } from '../../components/FirstSectionCheckout'
import { SecondSectionCheckout } from '../../components/SecondSectionCheckout'

import { CheckoutContainer } from './style'
import AddressContext from '../../contexts/AddressContext'
import { useContext } from 'react'

export function Checkout() {
  const navigate = useNavigate()
  const { state } = useContext(AddressContext)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (state.car) {
      navigate('/checkout/success')
      return null
    }
  }

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit}>
        <FirstSectionCheckout />
        <SecondSectionCheckout />
      </form>
    </CheckoutContainer>
  )
}
