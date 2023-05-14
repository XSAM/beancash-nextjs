import { createGetInitialProps } from '@mantine/next'
import Document, { Head, Html, Main, NextScript } from 'next/document'

const getInitialProps = createGetInitialProps()

const APP_NAME = 'Beancash'
const APP_DEFAULT_TITLE = 'Beancash'
const APP_TITLE_TEMPLATE = '%s - Beancash'
const APP_DESCRIPTION = 'Beancash on Web'

export default class _Document extends Document {
  static getInitialProps = getInitialProps

  render() {
    return (
      <Html lang='en' dir='ltr'>
        <Head>
          <title>{APP_DEFAULT_TITLE}</title>
          <meta charSet='utf-8' />
          <meta name='author' content='Sam Xie' />
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          {/* KEYWORDS */}
          <meta name='title' content='The Next.js Progressive Web App for Beancount' />
          <meta
            name='description'
            content={APP_DESCRIPTION}
          />
          <meta
            name='keywords'
            content='Next.js, pwa, React, HTML, CSS, JavaScript, TypeScript, cats, facts, breeds'
          />
          {/* THEMES */}
          <meta name='color-scheme' content='dark light' />
          <meta name='theme-color' content='#F3EFE0' media='(prefers-color-scheme: light)' />
          <meta name='theme-color' content='#18181b' media='(prefers-color-scheme: dark)' />
          <meta name='mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-capable' content='yes' />
          <meta name='apple-mobile-web-app-title' content='Cats Realm' />
          <meta name='application-name' content={APP_NAME} />
          <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
          {/* ICONS */}
          <link rel='apple-touch-icon' sizes='180x180' href='/icons/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/icons/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/icons/favicon-16x16.png' />
          <link rel='manifest' href='/manifest.json' />
          {/* OG TAGS */}
          <meta property='og:type' content='website' />
          <meta property='og:url' content='https://nextjs-pwa-template-repo.vercel.app' />
          <meta property='og:title' content='The Next.js Progressive Web App Template' />
          <meta
            property='og:description'
            content='A Solid Foundation for Building Scalable and Efficient Progressive Web Application!'
          />
          <meta
            property='og:image'
            content='https://nextjs-pwa-template-repo.vercel.app/icons/og-image.png'
          />
          {/* TWITTER */}
          {/*<meta property='twitter:card' content='summary_large_image' />*/}
          {/*<meta name='twitter:creator' content='@AjayKanniyappan' />*/}
          {/*<meta property='twitter:url' content='https://nextjs-pwa-template-repo.vercel.app' />*/}
          {/*<meta property='twitter:title' content='The Next.js Progressive Web App Template' />*/}
          {/*<meta*/}
          {/*  property='twitter:description'*/}
          {/*  content='A Solid Foundation for Building Scalable and Efficient Progressive Web Application!'*/}
          {/*/>*/}
          {/*<meta*/}
          {/*  property='twitter:image'*/}
          {/*  content='https://nextjs-pwa-template-repo.vercel.app/icons/og-image.png'*/}
          {/*/>*/}

          <link
            rel='apple-touch-icon'
            sizes='180x180'
            href='/icons/apple-touch-icon.png'
          />
          <link rel='manifest' href='/manifest.json' />
          <link rel='shortcut icon' href='/favicon.ico' />
          <style>{`
            html, body, #__next {
              height: 100%;
            }
            #__next {
              margin: 0 auto;
            }
            h1 {
              text-align: center;
            }
            `}</style>
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    )
  }
}
