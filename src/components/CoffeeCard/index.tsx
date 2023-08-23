import { Minus, Plus, Trash } from '@phosphor-icons/react'
import {
  ActionsContainerCoffee,
  ButtonsActionsContainer,
  CoffeeCardContainer,
} from './style'
import AddressContext, { InterfaceCoffee } from '../../contexts/AddressContext'
import { useContext } from 'react'

export function CoffeeCard({ image, price, title, quantity }: InterfaceCoffee) {
  const { state, setState } = useContext(AddressContext)

  function handleMinusOrPlus(operator: boolean, title: string) {
    const targetIndex = state.car.findIndex(
      (coffee: InterfaceCoffee) => coffee.title === title,
    )

    if (!operator) {
      setState((prevState) => ({
        ...prevState,
        car: prevState.car.map((coffee, index) => {
          if (index === targetIndex) {
            const updatedQuantity = coffee.quantity
              ? coffee.quantity - 1
              : coffee.quantity
            const updatedPrice = parseFloat((updatedQuantity * 9.9).toFixed(2))

            return {
              ...coffee,
              quantity: updatedQuantity,
              price: updatedPrice,
              // Outros campos que você precisa atualizar
            }
          }
          return coffee
        }),
      }))
    } else {
      setState((prevState) => ({
        ...prevState,
        car: prevState.car.map((coffee, index) => {
          if (index === targetIndex) {
            const updatedQuantity = coffee.quantity
              ? coffee.quantity + 1
              : coffee.quantity
            const updatedPrice = parseFloat((updatedQuantity * 9.9).toFixed(2))

            return {
              ...coffee,
              quantity: updatedQuantity,
              price: updatedPrice,
              // Outros campos que você precisa atualizar
            }
          }
          return coffee
        }),
      }))
    }
    console.log(state)
  }

  function handleRemoveCoffee(title: string) {
    setState((prevState) => ({
      ...prevState,
      car: prevState.car.filter((coffee) => coffee.title !== title),
    }))
  }

  return (
    <CoffeeCardContainer>
      <img src={image} alt={title} />
      <ActionsContainerCoffee>
        <h1>{title}</h1>
        <ButtonsActionsContainer>
          <div>
            <div onClick={() => handleMinusOrPlus(false, title)}>
              <Minus />
            </div>
            <span>{quantity}</span>
            <div onClick={() => handleMinusOrPlus(true, title)}>
              <Plus />
            </div>
          </div>
          <div onClick={() => handleRemoveCoffee(title)}>
            <Trash />
            <span>REMOVER</span>
          </div>
        </ButtonsActionsContainer>
      </ActionsContainerCoffee>
      <p>R$ {price}</p>
    </CoffeeCardContainer>
  )
}
