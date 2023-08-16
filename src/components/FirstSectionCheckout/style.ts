import styled from 'styled-components'

export const FirstSection = styled.section`
  max-width: 40rem;

  h1 {
    color: ${(props) => props.theme.baseSubtitle};
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`

export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  grid-auto-rows: auto;
  padding: 2.5rem;
  gap: 10px;

  background: ${(props) => props.theme.baseCard};

  nav {
    display: flex;
    grid-column: 1 / -1;
  }

  nav svg {
    width: 22px;
    height: 22px;
    color: ${(props) => props.theme.yellowDark};
  }

  nav h2 {
    color: ${(props) => props.theme.baseSubtitle};
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  nav p {
    display: flex;
    height: 21px;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;

    color: ${(props) => props.theme.baseText};
    /* Text/Regular S */
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`

export const InputContainer = styled.input`
  padding: 0.75rem;
  background: ${(props) => props.theme.baseInput};
  border: 1px solid ${(props) => props.theme.baseButton};
  border-radius: 4px;

  color: ${(props) => props.theme.baseLabel};
  font-family: 'Roboto';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: 130%;

  &:nth-child(2) {
    grid-column: 1;
  }
  &:nth-child(3) {
    grid-column: 1 / -1;
  }
  &:nth-child(4) {
    grid-column: 1 / 2;
  }
  &:nth-child(5) {
    grid-column: 2 / -1;
  }
  &:nth-child(6) {
    grid-column: 1 / 1;
  }
  &:nth-child(7) {
    grid-column: 2 / 2;
  }
  &:nth-child(8) {
    grid-column: 3 / 3;
  }
`

export const SectionPay = styled.section`
  width: auto;
  display: flex;
  padding: 2.5rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  align-self: stretch;

  border-radius: 6px;
  background: ${(props) => props.theme.baseCard};

  div {
    display: flex;
  }

  div svg {
    width: 22px;
    height: 22px;
    color: ${(props) => props.theme.purple};
  }

  div div {
    flex-direction: column;
  }

  div div h3 {
    color: ${(props) => props.theme.baseSubtitle};
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    align-self: stretch;
  }

  div div p {
    color: ${(props) => props.theme.baseText};
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`
export const MethodPayContainer = styled.div`
  width: 100%;
  display: flex !important;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: row !important;
    justify-content: space-around;
    padding: 1rem;
    align-items: center;
    gap: 0.75rem;
    flex: 1 0 0;

    border-radius: 6px;
    background: var(--base-button, #e6e5e5);
  }

  div p {
    color: ${(props) => props.theme.baseText};
    font-family: 'Roboto' !important;
    font-size: 0.75rem !important;
    font-style: normal !important;
    font-weight: 400 !important;
    text-transform: uppercase !important;
  }
`
