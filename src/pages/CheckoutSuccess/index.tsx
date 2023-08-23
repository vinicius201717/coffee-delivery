import { CurrencyDollar, MapPin, Timer } from '@phosphor-icons/react'
import {
  TextsWrapper,
  WrapperContainer,
  SectionWrappeContainer,
  FisrtElementSectionContainer,
  IconContainer,
  SecondElementSectinoContainer,
} from './style'

import coffeeSuccess from '../../assets/coffeeSuccess.png'
import AddressContext from '../../contexts/AddressContext'
import { useContext } from 'react'

export function CheckoutSuccess() {
  const { state } = useContext(AddressContext)

  return (
    <WrapperContainer>
      <TextsWrapper>
        <h1>Uhu! Pedido confirmado</h1>
        <p>Agora é só aguardar que logo o café chegará até você</p>
      </TextsWrapper>
      <SectionWrappeContainer>
        <FisrtElementSectionContainer>
          <div>
            <IconContainer variant="purple">
              <MapPin />
            </IconContainer>
            <p>
              Entrega em{' '}
              <b>
                {state.address.rua}, {state.address.numero}
              </b>{' '}
              {state.address.bairro} - {state.address.cidade} -{' '}
              {state.address.uf}
            </p>
          </div>
          <div>
            <IconContainer variant="yellow">
              <Timer />
            </IconContainer>
            <p>
              Previsão de Entrega <br />
              <b>20 min - 30min</b>
            </p>
          </div>
          <div>
            <IconContainer variant="yellowDark">
              <CurrencyDollar />
            </IconContainer>
            <p>
              Pagamento na entrega <br />
              <b>{state.address.pagamento}</b>
            </p>
          </div>
        </FisrtElementSectionContainer>
        <SecondElementSectinoContainer>
          <img src={coffeeSuccess} alt="Entregador" />
        </SecondElementSectinoContainer>
      </SectionWrappeContainer>
    </WrapperContainer>
  )
}
