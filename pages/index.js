import 'isomorphic-unfetch'
import { createClient, Provider } from 'urql'

import Portfolio from '../components/portfolio'
import Hero from '../components/hero'
import { Page } from '../styles/base'

const client = createClient({ url: 'https://api-us-west-2.graphcms.com/v2/cjnmw0gb23diu01fusk0vgtpt/master'})

export default (props) => {
  return (
    <Provider value={client}>
      <Page>
        <Hero />
        <Portfolio />
      </Page>
    </Provider>
  )
}
