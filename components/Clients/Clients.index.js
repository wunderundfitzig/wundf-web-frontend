import React from 'react'
import styled from '@emotion/styled'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import breakpoints from '../../lib/breakpoints'
import { orange } from '../../lib/colors'

const Title = styled.h1`
  font-style: italic;
  font-weight: normal;
  font-size: 20px;
  margin: 0 0 20px;
  color: ${orange};
  -webkit-font-smoothing: grayscale;
  -moz-osx-font-smoothing: grayscale;
  -o-font-smoothing: grayscale;

  @media (min-width: ${breakpoints.m.min}px) {
    margin-top: 20px;
    margin-bottom: 5px;
  }

  @media (min-width: ${breakpoints.xl.min}px) {
    font-size: 25px;
    margin-bottom: 30px;
  }
`

const Logos = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  justify-content: space-between;

  @media (min-width: ${breakpoints.xl.min}px) {
    display: block;
  }
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
    <Title>Kunden</Title>
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
