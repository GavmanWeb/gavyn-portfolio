import styled from 'styled-components'
import { transparentize } from 'polished'

import { flexContainer, flexItem } from '../tools/mixins'
import { neutral5, green, sm } from '../tools/variables'

export const ProjectsContainer = styled.section`
  ${flexContainer()};
  width: 100%;
  background-color: ${neutral5};

  .project {
    position: relative;
    ${flexItem('480px', '1')};
    height: 380px;
    overflow: hidden;

    > img {
      height: 100%;
      min-width: 100%;
    }

    @media (max-width: ${sm}) {
      height: auto;

      > img {
        width: 100%;
        height: auto;
      }
    }
  }

  .project-about {
    ${flexContainer('center', 'center', 'center')};
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 8px;
    background-color: ${transparentize(0.2, green)};
    opacity: 0;
    transition: opacity 0.3s;

    > h1, h3 {
      width: 100%;
      text-align: center;
      color: #fff;
    }

    &:hover {
      opacity: 1;
    }
  }
`

export const ProjectPlaceholder = styled.div`
  ${flexItem('480px', '1')};
`
