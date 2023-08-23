import {
  CoffeeContainer,
  SpanContainer,
  ActionBuy,
  ShoppingCartContainer,
} from './style'

import { Plus, Minus, ShoppingCart } from '@phosphor-icons/react'

import AddressContext, { InterfaceCoffee } from '../../contexts/AddressContext'
import { useContext, useState } from 'react'

export function Coffee({ title, desc, subDis, price, image }: InterfaceCoffee) {
  const { state, setState } = useContext(AddressContext)

  const [quantity, setQuantity] = useState(0)

  function handleClickAddCoffeeInCar(): void {
    const newCoffee = {
      title,
      desc,
      subDis,
      price: parseFloat((price * quantity).toFixed(2)),
      image,
      quantity,
    }
    const updatedCar = state.car ? [...state.car, newCoffee] : [newCoffee]

    setState({
      ...state,
      car: updatedCar,
    })
  }

  function minusOrPlus(operator: string) {
    if (operator === '-') {
      const updateQuantity = quantity - 1
      setQuantity(updateQuantity)
    } else {
      const updateQuantity = quantity + 1
      setQuantity(updateQuantity)
    }
  }

  return (
    <CoffeeContainer>
      <img src={image} alt="Expresso Tradicional" />
      <SpanContainer>
        {subDis.map((item, index) => (
          <span key={index}>{item}</span>
        ))}
      </SpanContainer>
      <h1>{title}</h1>
      <p>{desc}</p>
      <ActionBuy>
        <span>
          R$
          <b>{price}</b>
        </span>
        <div>
          <button onClick={() => minusOrPlus('-')}>
            <Minus />
          </button>
          <span>{quantity}</span>
          <button onClick={() => minusOrPlus('+')}>
            <Plus />
          </button>
        </div>
        <ShoppingCartContainer onClick={() => handleClickAddCoffeeInCar()}>
          <ShoppingCart />
        </ShoppingCartContainer>
      </ActionBuy>
    </CoffeeContainer>
  )
}
