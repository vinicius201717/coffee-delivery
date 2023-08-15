import styled from 'styled-components'

export const SectionContainer = styled.section`
  max-width: 80rem;
  height: 34rem;
  margin: 0 auto;
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;

  padding: 8.25rem 7rem;
  background: ${(props) => props.theme.baseCard};

  img {
    width: 29.93rem;
    height: 22.5rem;
  }
`

export const BlurredBackground = styled.div`
  width: 100%;
  height: 100%;
  background: inherit;
  filter: blur(80px);
`

export const FirstElementSection = styled.div`
  width: 36.75rem;
  margin-bottom: 4.125rem;

  h1 {
    font-size: 2.5rem;
    color: ${(props) => props.theme.baseTitle};
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    margin-bottom: 1rem;
  }
  p {
    color: ${(props) => props.theme.baseSubtitle};
    font-family: 'Roboto';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`
export const SecondElementSection = styled.div`
  height: 5.25rem;
  display: flex;
  max-width: 35.43rem;
  justify-content: space-between;

  div div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 0.5rem;
  }
  div div p {
    color: ${(props) => props.theme.baseText};
    font-family: Roboto;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`
type Variants = 'yellowDark' | 'yellow' | 'baseText' | 'purple'

interface CycleContainerProps {
  variant: Variants
}

const colorVariant = {
  yellowDark: '#C47F17',
  yellow: '#DBAC2C',
  baseText: '#574F4D',
  purple: '#8047F8',
}

export const CycleContainer = styled.div<CycleContainerProps>`
  padding: 0.5rem;
  border-radius: 50%;
  margin-right: 0.5rem;
  color: ${(props) => props.theme.white};
  ${(props) => {
    return `background: ${colorVariant[props.variant]}`
  }}
`
