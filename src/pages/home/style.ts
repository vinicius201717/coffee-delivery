import styled from 'styled-components'

export const CoffeeContainer = styled.section`
  width: 90rem;
  display: flex;
  flex-wrap: wrap;
  gap: 54px;
  margin: 0 auto;
  padding: 2rem 10rem 9.812rem 12.5rem;
  margin-top: 2rem;

  h1 {
    font-family: 'Baloo 2';
    font-size: 2rem;
    font-style: normal;
    font-weight: 800;
    line-height: 130%;
    color: ${(props) => props.theme.baseSubtitle};
  }

  div {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  }
`
