import styled from 'styled-components'

export const SecondSectionContainer = styled.section`
  max-width: 40rem;

  div {
    width: auto;
    display: flex;
    padding: 2.5rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 1.5rem;
    background: ${(props) => props.theme.baseCard};
  }

  h1 {
    color: ${(props) => props.theme.baseSubtitle};
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`
export const SectionInformation = styled.section`
  width: 100%;
  background: ${(props) => props.theme.baseCard};
  padding: 2.5rem;
`

export const SectionInformationItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row !important;
  justify-content: space-between;
  align-items: center;
  padding: 0 !important;
  margin-bottom: 0.875rem;
`

export const ButtonCheckoutContainer = styled.button`
  width: 100%;
  display: flex;
  padding: 0.75rem 0.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.25rem;
  align-self: stretch;
  border: 0;

  border-radius: 6px;
  background: ${(props) => props.theme.yellow};

  cursor: pointer;

  font-family: 'Roboto';
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 700;
  line-height: 160%;
  text-transform: uppercase;
  text-decoration: none;
  color: ${(props) => props.theme.white};
`
