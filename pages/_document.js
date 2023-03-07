import 'isomorphic-unfetch'
import { createClient, Provider } from 'urql'
import Document, { Html, Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const client = createClient({ url: 'https://api-us-west-2.graphcms.com/v2/cjnmw0gb23diu01fusk0vgtpt/master'})

export default class MyDocument extends Document {
  render () {
    return (
      <Html>
        <Head>
          <link rel='stylesheet' href='/reset.css' />
          <link rel='stylesheet' href='https://use.typekit.net/amm4yao.css' />
          <link rel='stylesheet' href='/typography.css' />
          <link rel='stylesheet' href='https://use.fontawesome.com/releases/v5.0.13/css/all.css' integrity='sha384-DNOHZ68U8hZfKXOrtjWvjxusGo9WQnrNx2sqG0tfsghAvtVlRW3tvkXWZh58N9jp' crossOrigin='anonymous' />
          {this.props.styleTags}
        </Head>
        <body>
          <Provider value={client}>
            <Main />
          </Provider>
          <NextScript />
        </body>
      </Html>
    )
  }

  static async getInitialProps(
    ctx
  ) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}