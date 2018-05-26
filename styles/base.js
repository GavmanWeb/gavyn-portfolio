import styled, { css } from 'styled-components'
import { flexContainer, flexItem } from './tools/mixins'
import { neutral3, neutral5, neutral6, purple, green, sm, md } from './tools/variables'
import { gradientbg } from './tools/animations'

export const container = styled.div`
  width: 100%;
  height: 100%;

  @media (mix-width: 1920px) {
    padding-left: calc(50% - 960px);
    padding-right: calc(50% - 960px);
  }

  > span {
    display: block;
    position: fixed;
    top: 0;
    left: 0;
    background: url('https://res.cloudinary.com/gavmanweb/image/upload/v1512004291/portfolio/bright-squares_fh12l8.png');
    background-size: auto;
    background-repeat: repeat;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
`

export const Page = styled.div`
  max-width: 1920px;
  height: 100%;
  margin: auto;

  @media (min-width: 1920px) {
    box-shadow: 0 0 48px 8px ${neutral6};
  }
`

export const Section = styled.section`
  ${flexContainer('flex-start', 'center', 'center')}
  padding: 80px calc(50% - 600px);
  background-color: ${neutral5};
  color: #fff;

  @media (max-width: ${sm}) {
    padding: 40px 16px;
  }

  ${props => props.white && css`
    background-color: #fff;
    color: ${neutral6};
  `}

  ${props => props.center && css`
    justify-content: center;
    text-align: center;
  `}

  ${props => props.flush && css`
    padding: 0;
    background-color: #fff;
  `}

  ${props => props.noBottomPadding && css`
    padding-bottom: 0;
  `}

  ${props => props.gradient && css`
    background: linear-gradient(
      to bottom right,
      #fd746c, ${purple},
      ${green}, #00c9ff,
      ${purple}, #e73827);
    background-repeat: no-repeat;
    background-size: 1000% 1000%;
    animation: ${gradientbg} 150s ease infinite;
  `}

  ${props => props.hireme && css`
    position: relative;
    background: url('https://res.cloudinary.com/gavmanweb/image/upload/v1490279436/portfolio/imac-606765_1920_xdbtrx.jpg');
    background-attachment: fixed;
    background-position: center center;
    background-size: cover;
  `}

  .section__header {
    width: 100%;
    padding-bottom: 24px;
  }

  .section__main-content {
    ${flexContainer()};
    ${flexItem('400px', 1)};
    height: 100%;
    padding: 8px;
    z-index: 200;
  }

  .section__aside-content {
    ${flexContainer()};
    ${flexItem('200px', '1')};
    height: 100%;
    padding: 8px;
    z-index: 200;
  }

  .section__aside-content--right-align {
    justify-content: flex-end;

    @media (max-width: ${md}) {
      justify-content: center;
    }
  }

  .section__aside-content--vertical-center {
    align-items: center;
  }

  .section__aside-content--center {
    align-content: center;
    align-items: center;
    justify-content: center;
  }

  .section__aside-content--lg {
    flex-basis: 320px;
  }

  .section__aside-content--last-on-mobile { 
    @media (max-width: ${md}) {
      order: 2;
    }
  }

  .hero-title {
    width: 100%;
  }

  .hero-links {
    flex-basis: 100%;
    ${flexContainer('center', 'center')};

    > a, span {
      margin: 8px;
      margin-bottom: 0;
      transition: color 0.3s;
      font-size: 40px;
      color: #fff;
      transition: color 0.3s;

      &:hover {
        color: ${neutral3};
      }
    }
  }

  .hero-img-container {
    ${flexItem('200px', '0')};
    margin-bottom: 16px;

    > img {
      width: 100%;
      border-radius: 50%;
    }
  }
`

export const Recieved = styled.div`
  ${flexContainer('center', 'center', 'center')};
  max-width: 1000px;
  padding: 24px;
  border: 0;

  > h1 {
    width: 100%;
    padding-bottom: 24px;
    text-align: center;
    color: #fff;
  }

  &:hover {
    border: 0;
  }
`

export const ImageContainer = styled.div`
  ${flexItem('100%')};

  > img {
    width: 100%;
  }

  ${props => props.hideMobile && css`
    @media (max-width: ${sm}) {
      display: none;
    }
  `}

  ${props => props.heroImage && css`
    ${flexItem('200px', '0')};
    margin-bottom: 16px;

    > img {
      border-radius: 50%;
    }
  `}
    

  ${props => props.react && css`
    ${flexItem('280px', '0')};

    @media (max-width: ${sm}) {
      flex-basis: 120px;
    }
  `} 

  ${props => props.htmlCSS && css`
    ${flexItem('160px', '1')};
    padding: 16px;

    @media (max-width: ${sm}) {
      flex-basis: 120px;
      flex-grow: 0;
    }
  `}
`
