import { SectionHome } from '../../components/SectionHome'
import { CoffeeContainer } from './style'

import { Coffee } from '../../components/Coffee'

import { coffees } from '../../api/coffees'

export function Home() {
  return (
    <>
      <SectionHome />
      <CoffeeContainer>
        <h1>Nossos cafés</h1>
        <div>
          {coffees.map((coffee) => (
            <Coffee
              key={coffee.title}
              title={coffee.title}
              desc={coffee.desc}
              subDis={coffee.subDis}
              price={coffee.price}
              image={coffee.image}
            />
          ))}
        </div>
      </CoffeeContainer>
    </>
  )
}
