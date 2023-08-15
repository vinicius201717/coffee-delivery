import {
  CoffeeContainer,
  SpanContainer,
  ActionBuy,
  ShoppingCartContainer,
} from './style'

import { Plus, Minus, ShoppingCart } from '@phosphor-icons/react'

export interface InterfaceCoffee {
  title: string
  desc: string
  subDis: string[]
  price: string
  image: string
}

export function Coffee({ title, desc, subDis, price, image }: InterfaceCoffee) {
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
          <button>
            <Minus />
          </button>
          <span>1</span>
          <button>
            <Plus />
          </button>
        </div>
        <ShoppingCartContainer>
          <ShoppingCart />
        </ShoppingCartContainer>
      </ActionBuy>
    </CoffeeContainer>
  )
}
