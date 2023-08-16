import styled from 'styled-components'

export const SecondSectionContainer = styled.section`
  width: 90rem;
  background: ${(props) => props.theme.background};

  h1 {
    color: ${(props) => props.theme.baseSubtitle};
    font-family: 'Baloo 2';
    font-size: 1.125rem;
    font-style: normal;
    font-weight: 700;
    line-height: 130%;
  }
`
