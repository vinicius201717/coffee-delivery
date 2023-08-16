import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPin,
  Money,
} from '@phosphor-icons/react'
import {
  FirstSection,
  GridContainer,
  InputContainer,
  SectionPay,
  MethodPayContainer,
} from './style'

export function FirstSectionCheckout() {
  return (
    <FirstSection>
      <h1>Complete seu pedido</h1>
      <GridContainer>
        <nav>
          <MapPin />
          <div>
            <h2>Endereço de Entrega</h2>
            <p>Informe o endereço onde deseja receber seu pedido</p>
          </div>
        </nav>
        <InputContainer placeholder="CEP" />
        <InputContainer placeholder="Rua" />
        <InputContainer placeholder="Número" />
        <InputContainer placeholder="Complemento" />
        <InputContainer placeholder="Bairro" />
        <InputContainer placeholder="Cidade" />
        <InputContainer placeholder="UF" />
      </GridContainer>
      <SectionPay>
        <div>
          <CurrencyDollar />
          <div>
            <h3>Pagamento</h3>
            <p>
              O pagamento é feito na entrega. Escolha a forma que deseja pagar
            </p>
          </div>
        </div>
        <MethodPayContainer>
          <div>
            <CreditCard />
            <p>CARTÃO DE CRÉDITO</p>
          </div>
          <div>
            <Bank />
            <p>CARTÃO DE DÉBITO</p>
          </div>
          <div>
            <Money />
            <p>DINHEIRO</p>
          </div>
        </MethodPayContainer>
      </SectionPay>
    </FirstSection>
  )
}
