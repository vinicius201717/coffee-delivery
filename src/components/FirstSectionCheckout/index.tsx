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

import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useForm } from 'react-hook-form'
import { useContext, useState } from 'react'
import AddressContext from '../../contexts/AddressContext'

const formValidationSchema = zod.object({
  cep: zod.string().max(7, 'CEP  INCORRETO '),
})

export function FirstSectionCheckout() {
  const { state, setState } = useContext(AddressContext)

  const [address, setAddress] = useState({
    cep: '',
    rua: '',
    numero: '',
    complemento: '',
    bairro: '',
    cidade: '',
    uf: '',
    pagamento: '',
  })

  function updateContextAddress() {
    setState((prevState) => ({
      ...prevState,
      address,
    }))
  }

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setAddress((prevAddress) => ({
      ...prevAddress,
      [name]: value,
    }))
    updateContextAddress()
  }

  function handleClickMethodPayment(pagamento: string) {
    setAddress((prevAddress) => ({
      ...prevAddress,
      pagamento,
    }))
    updateContextAddress()
  }

  const { register } = useForm({
    resolver: zodResolver(formValidationSchema),
  })

  const activeMethodPaymentStyle = state.address.pagamento

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
        <InputContainer
          placeholder="CEP"
          {...register('cep')}
          value={address.cep}
          required
          onChange={handleChange}
        />
        <InputContainer
          placeholder="Rua"
          {...register('rua')}
          value={address.rua}
          required
          onChange={handleChange}
        />
        <InputContainer
          placeholder="Número"
          {...register('numero')}
          value={address.numero}
          required
          onChange={handleChange}
        />
        <InputContainer
          placeholder="Complemento"
          {...register('complemento')}
          value={address.complemento}
          required
          onChange={handleChange}
        />
        <InputContainer
          placeholder="Bairro"
          {...register('bairro')}
          value={address.bairro}
          required
          onChange={handleChange}
        />
        <InputContainer
          placeholder="Cidade"
          {...register('cidade')}
          value={address.cidade}
          required
          onChange={handleChange}
        />
        <InputContainer
          placeholder="UF"
          {...register('uf')}
          value={address.uf}
          required
          onChange={handleChange}
        />
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
          <div
            onClick={() => handleClickMethodPayment('credito')}
            className={
              activeMethodPaymentStyle === 'credito' ? 'purpleLight' : ''
            }
          >
            <CreditCard />
            <p>CARTÃO DE CRÉDITO</p>
          </div>
          <div
            onClick={() => handleClickMethodPayment('debito')}
            className={
              activeMethodPaymentStyle === 'debito' ? 'purpleLight' : ''
            }
          >
            <Bank />
            <p>CARTÃO DE DÉBITO</p>
          </div>
          <div
            onClick={() => handleClickMethodPayment('dinheiro')}
            className={
              activeMethodPaymentStyle === 'dinheiro' ? 'purpleLight' : ''
            }
          >
            <Money />
            <p>DINHEIRO</p>
          </div>
        </MethodPayContainer>
      </SectionPay>
    </FirstSection>
  )
}
