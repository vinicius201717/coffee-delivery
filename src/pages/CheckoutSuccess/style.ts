import { styled } from 'styled-components'

export const WrapperContainer = styled.main`
  width: 80rem;
  margin: 0 auto;
  padding-top: 5rem;
  background: ${(props) => props.theme.background};
`

export const TextsWrapper = styled.article`
  text-align: start;

  h1 {
    color: ${(props) => props.theme.yellowDark};
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
  }

  p {
    width: 34.5rem;
    color: ${(props) => props.theme.baseSubtitle};
    font-family: 'Roboto';
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`

export const SectionWrappeContainer = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-top: 1.75rem;
`

export const FisrtElementSectionContainer = styled.div`
  display: flex;
  height: auto;
  width: 32.875rem;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  border-radius: 0.375rem 2.25rem;
  border: 1px solid black;
  /* display: inline-block; */

  div {
    display: flex;
    align-items: center;
    gap: 0.4rem;
  }

  div p {
    color: ${(props) => props.theme.baseText};
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  div p b {
    color: ${(props) => props.theme.baseText};
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`
interface BgColor {
  variant: 'purple' | 'yellow' | 'yellowDark'
}

export const IconContainer = styled.div<BgColor>`
  background: ${(props) => props.theme[props.variant]};
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;

  svg {
    width: 32px;
    height: 32px;
    padding: 8px;
    border-radius: 50%;
    color: white;
  }
`
export const SecondElementSectinoContainer = styled.div`
  display: flex;
  width: 32.875rem;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;

  img {
    width: 392px;
  }
`
