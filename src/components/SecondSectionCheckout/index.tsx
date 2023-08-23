import {
  SecondSectionContainer,
  SectionInformation,
  SectionInformationItem,
  ButtonCheckoutContainer,
} from './style'

import { CoffeeCard } from '../CoffeeCard'
import noCar from '../../assets/noCar.jpeg'

import AddressContext from '../../contexts/AddressContext'
import { useContext, useEffect, useState } from 'react'

export function SecondSectionCheckout() {
  const { state } = useContext(AddressContext)
  const [infoState, setInfoState] = useState({
    totalItems: 0,
    delivery: 3.5,
    total: 0,
  })

  useEffect(
    function () {
      const totalItems = state.car
        ? state.car.reduce(
            (accumulator, coffee) => accumulator + coffee.quantity,
            0,
          )
        : 0
      const total = state.car
        ? parseFloat(
            (
              state.car.reduce(
                (accumulator, coffee) => accumulator + coffee.price,
                0,
              ) + infoState.delivery
            ).toFixed(2),
          )
        : 0

      setInfoState({
        delivery: 3.5,
        totalItems,
        total,
      })
    },
    [state],
  )

  return (
    <SecondSectionContainer>
      <h1>Cafés selecionados</h1>
      <div>
        {state.car ? (
          state.car.map((item) => (
            <CoffeeCard
              key={item.title}
              image={item.image}
              quantity={item.quantity}
              price={item.price}
              title={item.title}
              desc={item.desc}
              subDis={item.subDis}
            />
          ))
        ) : (
          <img src={noCar} alt="Carrinho vazio" />
        )}
      </div>
      <SectionInformation>
        <SectionInformationItem>
          <span>Total de itens</span>
          <span>{infoState.totalItems}</span>
        </SectionInformationItem>
        <SectionInformationItem>
          <span>Entraga</span>
          <span>R$ {infoState.delivery}</span>
        </SectionInformationItem>
        <SectionInformationItem>
          <span>
            <b>Total</b>
          </span>
          <span>
            <b>R$ {infoState.total}</b>
          </span>
        </SectionInformationItem>
        <ButtonCheckoutContainer type="submit">
          CONFIRMAR PEDIDO
        </ButtonCheckoutContainer>
      </SectionInformation>
    </SecondSectionContainer>
  )
}
