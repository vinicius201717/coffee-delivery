import styled from 'styled-components'

export const CoffeeCardContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  padding: 0 !important;
  justify-content: flex-start;
  align-items: flex-start;
  align-self: stretch;
  padding-bottom: 1rem !important;
  border-bottom: 1px solid ${(props) => props.theme.baseButton};
  background: ${(props) => props.theme.baseCard};
  padding-bottom: 1.5rem !important;

  img {
    display: flex;
    width: 4rem;
    height: 4rem;
    justify-content: center;
    align-items: center;
  }

  p {
    color: ${(props) => props.theme.baseText};
    text-align: right;
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
    margin-left: 1rem;
  }
`
export const ActionsContainerCoffee = styled.div`
  width: auto !important;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 !important;
  padding: 0 !important;
  gap: 0.5rem !important;

  h1 {
    color: ${(props) => props.theme.baseSubtitle};
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`

export const ButtonsActionsContainer = styled.div`
  display: flex;
  flex-direction: row !important;
  width: 10.68rem !important;
  justify-content: center;
  align-items: center;
  gap: 0.25rem !important;
  padding: 0 !important;

  div {
    display: flex !important;
    flex-direction: row !important;
    gap: 0.25rem;
    padding: 0.5rem !important;
    background: ${(props) => props.theme.baseCard};
    border-radius: 8px;
    background: ${(props) => props.theme.baseButton} !important;
  }

  div div {
    padding: 0 !important;
  }

  div:nth-child(2) {
    cursor: pointer;
  }

  div svg {
    color: ${(props) => props.theme.purple};
  }

  > div:first-child > span {
    width: 1.25rem;
    color: ${(props) => props.theme.baseTitle};
    text-align: center;
    font-family: 'Roboto';
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  > div > span {
    color: ${(props) => props.theme.baseText};
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;
    text-transform: uppercase;
  }
`
