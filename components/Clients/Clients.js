import React from 'react'
import styled from '@emotion/styled'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import breakpoints from '../../lib/breakpoints'
import colors from '../../lib/colors'
import { fadeIn, slideUp } from '../../lib/animations'

const Title = styled.h1`
  font-style: italic;
  font-weight: normal;
  text-align: center;
  font-size: 16px;
  margin: 0 0 30px;
  padding: 10px 0;
  color: ${colors.darkGrey};
  background-color: ${colors.lightGrey};
  -webkit-font-smoothing: grayscale;
  -moz-osx-font-smoothing: grayscale;
  -o-font-smoothing: grayscale;
  z-index: 100;
  animation: ${fadeIn} 1s;

  @media (min-width: ${breakpoints.xl.min}px) {
    font-size: 18px;
  }
`

const Logos = styled.div`
  max-width: 900px;
  margin: 0 auto 40px;
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;
  animation: ${fadeIn} 1s;
`

const Logo = styled.img`
  height: ${props => 20 * props.relativeSize}px;
  margin: 0 15px 20px 0;

  @media (min-width: ${breakpoints.sm.min}px) {
    margin-bottom: 30px;
  }

  @media (min-width: ${breakpoints.xl.min}px) {
    display: block;
    margin: 0 0 40px 0;
  }

  @media (min-width: ${breakpoints.xl.min}px) {
    height: ${props => 25 * props.relativeSize}px;
  }
`

const Spacer = styled.div`
  flex: 0 0 40%;
`

const Clients = ({ clients }) => {
  return <>
    <Title>Für wen und an was wir arbeiten:</Title>
    <Logos>
      {clients.map((client, i) =>
        <Logo
          key={i}
          src={getAbsolutAssetURL(client.logo.path)}
          relativeSize={client.relativeSize}
          alt={client.name} />
      )}
      <Spacer />
    </Logos>
  </>
}

export default Clients