import { FirstSectionCheckout } from '../../components/FirstSectionCheckout'
import { SecondSectionCheckout } from '../../components/SecondSectionCheckout'

import { CheckoutContainer } from './style'

export function Checkout() {
  return (
    <CheckoutContainer>
      <FirstSectionCheckout />
      <SecondSectionCheckout />
    </CheckoutContainer>
  )
}
