import {
  SectionContainer,
  FirstElementSection,
  BlurredBackground,
  SecondElementSection,
  CycleContainer,
} from './style'

import { Timer, ShoppingCart, Package, Coffee } from '@phosphor-icons/react'
import coffeeBanner from '../../assets/Imagem.png'

export function SectionHome() {
  return (
    <SectionContainer>
      <div>
        <FirstElementSection>
          <BlurredBackground />
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffe Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>
        </FirstElementSection>

        <SecondElementSection>
          <div>
            <div>
              <CycleContainer variant={'yellowDark'}>
                <ShoppingCart />
              </CycleContainer>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <CycleContainer variant={'yellow'}>
                <Timer />
              </CycleContainer>
              <p>Compra simples e segura</p>
            </div>
          </div>

          <div>
            <div>
              <CycleContainer variant={'baseText'}>
                <Package />
              </CycleContainer>
              <p>Compra simples e segura</p>
            </div>
            <div>
              <CycleContainer variant={'purple'}>
                <Coffee />
              </CycleContainer>
              <p>Compra simples e segura</p>
            </div>
          </div>
        </SecondElementSection>
      </div>
      <img src={coffeeBanner} alt="imagem de um copo de cafe" />
    </SectionContainer>
  )
}
