import React from 'react'
import { css } from '@emotion/core'
import styled from '@emotion/styled'
import { getAbsolutAssetURL } from '../../lib/apiHelpers'
import { textContent, link, backgroundImage } from './WorkOverview.blocks'
import Attribution from './Attribution'

const whiteText = css`
  color: white;
  text-shadow: 0 0 2px black;
  line-height: 1.2em;
  -webkit-font-smoothing: grayscale;
  -moz-osx-font-smoothing: grayscale;
  -o-font-smoothing: grayscale;
`

const Wrapper = styled.article`
  position: relative;
  width: 100%;
  min-height: 300px;
  padding: 50px 30px 90px;
  overflow: hidden;
`

const Image = styled.figure`
  ${backgroundImage};
  background-image: url(${props => props.url});
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, rgba(0,0,0, 0.7), rgba(0,0,0, 0));
  }
`

const Title = styled.h1`
  ${textContent};
  ${whiteText};
  text-shadow: none;
  font-size: 30px;
  font-weight: 400;
  margin: 0 0 50px;
`

const Teaser = styled.p`
  ${textContent};
  ${whiteText};
  width: 80%;
  color: white;
  margin: 0 0 20px;
`

const Link = styled.a`
  ${link};
  ${whiteText};
`

const TopStory = ({ story }) =>
  <Wrapper>
    <Image url={getAbsolutAssetURL(story.image.path)}>
      <Attribution imageAttribution={story.imageAttribution} />
    </Image>

    <Title>{story.title}</Title>
    <Teaser>{story.teaserText}</Teaser>
    <Link>{story.linkText}</Link>
  </Wrapper>

export default TopStory
