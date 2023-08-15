import styled from 'styled-components'

export const CoffeeContainer = styled.section`
  width: 16rem;
  height: 19.875rem;
  background: ${(props) => props.theme.baseCard};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px 20px 20px;
  margin: 20px 10px 20px 0;

  img {
    margin-bottom: 0.75rem;
    margin-top: -20px;
  }

  h1 {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 700;
    text-align: center;
    line-height: 130%;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 0.875rem;
    color: ${(props) => props.theme.baseLabel};
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
    text-align: center;
    margin-bottom: 2.06rem;
  }
`
export const SpanContainer = styled.span`
  color: ${(props) => props.theme.yellowDark};
  display: flex;

  margin-bottom: 1rem;
  justify-content: center;
  align-items: center;
  font-family: Roboto;
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 130%;
  text-transform: uppercase;

  span {
    padding: 4px 8px;
    border-radius: 100px;
    margin-right: 0.5rem;
    background: ${(props) => props.theme.yellowLight};
  }
`
export const ActionBuy = styled.div`
  display: flex;
  width: 13rem;
  flex-wrap: nowrap !important;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;

  span {
    color: ${(props) => props.theme.baseText};
    text-align: right;
    font-family: 'Roboto';
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }

  span b {
    color: ${(props) => props.theme.baseText};
    font-family: 'Baloo 2';
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    margin-left: 0.2rem;
  }

  div {
    display: flex;
    height: 2.375rem;
    justify-content: space-between;
    padding: 0.5rem;
    align-items: center;
    flex-wrap: nowrap !important;
    gap: 0.25rem;
    border-radius: 6px 36px;
    background: ${(props) => props.theme.baseCard};
  }

  div button {
    display: flex;
    height: 38px;
    padding: 8px;
    justify-content: center;
    align-items: center;
    gap: 4px;
    border: 0;
    color: ${(props) => props.theme.purple};
    cursor: pointer;
  }

  div span {
    color: ${(props) => props.theme.baseTitle};
    text-align: center;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 130%;
  }
`
export const ShoppingCartContainer = styled.div`
  width: auto !important;
  height: auto !important;
  display: flex;
  padding: 0.5rem;
  justify-content: center !important;
  align-items: center;
  gap: 8px;
  border-radius: 6px !important;
  background: ${(props) => props.theme.purpleDark}!important;
  color: ${(props) => props.theme.white};
`
