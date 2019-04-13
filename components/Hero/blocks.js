import styled from '@emotion/styled'

import colors from '../../lib/colors'
import breakpoints from '../../lib/breakpoints'

export const Slogan = styled.h1`
  text-align: center;
  font-size: 23px;
  font-weight: 400;
  margin-top: 25px;
  margin-bottom: 0;

  @media (min-width: ${breakpoints.m.min}px) {
    font-size: 35px;
  }
  @media (min-width: ${breakpoints.l.min}px) {
    font-size: 47px;
    margin-top: 40px;
    white-space: nowrap;
  }
  @media (min-width: ${breakpoints.xl.min}px) {
    font-size: 49px;
    margin-top: 50px;
  }

  strong {
    font-weight: 600;
    display: block;
    height: 25px;
    color: ${colors.rosa};

    @media (min-width: ${breakpoints.m.min}px) {
      height: 40px;
    }
    @media (min-width: ${breakpoints.l.min}px) {
      height: 62px;
    }
  }
`

export const Contact = styled.div`
  margin: 20px 0 20px;
  text-align: center;
  font-size: 12px;
  line-height: 1.7em;
  color: ${colors.textGrey};

  @media (min-width: ${breakpoints.m.min}px) {
    font-size: 14px;
  }
  @media (min-width: ${breakpoints.l.min}px) {
    font-size: 17px;
  }
  @media (min-width: ${breakpoints.xl.min}px) {
    margin-bottom: 50px;
  }
`

export const PhoneAndMail = styled.p`
  white-space: nowrap;
  margin: 0;
`
