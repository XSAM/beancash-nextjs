// import '@/styles/globals.css'
import { AppProps } from 'next/app'
import Head from 'next/head'
import { MantineProvider } from '@mantine/core'
import { Notifications } from '@mantine/notifications'
import { useDB } from '@/components/database/Database'

export default function App(props: AppProps) {
  const { Component, pageProps } = props

  // Trigger init
  const _ = useDB()

  return (
    <>
      <Head>
        <title>Beancash</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: 'light',
        }}
      >
        <Notifications />
        <Component {...pageProps} />
      </MantineProvider>
    </>
  )
}
