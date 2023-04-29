import { ThemeProvider } from 'styled-components'
import Head from 'next/head'
import GlobalStyles from '../styles/global'
import theme from '../styles/theme'
import { ReactNode } from 'react'

interface MyAppProps {
  Component: any
  pageProps: unknown[]
}

function MyApp({ Component, pageProps }: MyAppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@200&family=Montserrat:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        />{' '}
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      </Head>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  )
}

export default MyApp
