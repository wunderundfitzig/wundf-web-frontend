import { FunctionComponent } from 'react'
import WundFLogo from './wundf-logo'

const Hero: FunctionComponent = (props) => {
  return (
    <section className='hero'>
      <h2 className='slogan'>
        Wir <br />
        gestalten <br />
        Nutzererlebnisse
      </h2>
      <WundFLogo gridArea='logo' />
      <style jsx>{`
        .hero {
          max-width: 700px;
          margin: 0 auto;
          display: grid;
          grid-template-areas: 'slogan logo';
          grid-template-columns: 400px 1fr;
          justify-items: end;
        }

        .slogan {
          grid-area: slogan;
          font-size: 55px;
          width: 100%;
        }
      `}</style>
    </section>
  )
}

export default Hero
