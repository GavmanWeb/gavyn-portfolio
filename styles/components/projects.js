import styled from 'styled-components'

import { flexContainer, flexItem } from '../tools/mixins'
import { neutral5, neutral6, neutral1 } from '../tools/variables'

export const ProjectsContainer = styled.section`
  ${flexContainer('flex-start', 'stretch', 'stretch')};
  width: 100%;
  padding: 80px calc(50% - 600px);
  background-color: ${neutral5};

  .header {
    width: 100%;
    color: #fff;
    padding-bottom: 16px;
    text-align: center;
  }
`

export const Project = styled.a`
  ${flexItem('480px', '1')};
  margin: 16px;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.2s;

  &:hover {
    box-shadow: 2px 2px 16px 2px #000;
    transform: scale(1.01);
  }

  .img-container {
    height: 220px;
    width: 100%;
    background-image: url(${props => props.image});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: top;
  }

  .project-about {
    ${flexContainer('center')};
    width: 100%;
    height: 100%;
    padding: 24px 16px;
    background-color: ${neutral1};
    transition: opacity 0.3s;

    > h1, h3 {
      width: 100%;
      text-align: center;
      color: ${neutral6};
    }
  }
`

export const ProjectPlaceholder = styled.div`
  ${flexItem('480px', '1')};
  margin: 0 16px;
`
