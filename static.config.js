import * as React from 'react'
import path from 'path'
import { fetchFigma } from 'figma-cms'
import config from './src/config'

export default {
  siteRoot: 'https://handsomesf.com',
  plugins: ['react-static-plugin-typescript', 'react-static-plugin-styled-components'],
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getSiteData: async () => {
    return {
      figmaData: await getFigmaData(),
    }
  },
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/components/pages/HomePage',
      },
      {
        path: '/about',
        component: 'src/components/pages/AboutPage',
      },
      {
        path: '/services',
        component: 'src/components/pages/ServicesPage',
      },
      {
        path: '/testimonials',
        component: 'src/components/pages/TestimonialsPage',
      },
      {
        path: '/gallery',
        component: 'src/components/pages/GalleryPage',
      },
      // {
      //   path: '/signature',
      //   component: 'src/components/pages/Signature',
      // },
      { path: '/404', component: 'src/components/pages/NotFoundPage' },
    ]
  },
  Document: ({ Html, Head, Body, children, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <link rel="canonical" href="https://handsomesf.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/png" href="/meta/favicon-32x32.png" sizes="32x32" />
        {renderMeta.styleTags}
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
        <meta name="google-site-verification" content="iTgVUbtYKnJOpi1sAsAun10J6jl1welmJx6U6U6WhMg" />
      </Head>
      <Body>
        {children}
        <script async='async' src="https://www.yelp.com/embed/widgets.js" type="text/javascript"></script>
      </Body>
    </Html>
  ),
}

const PERSONAL_ACCESS_TOKEN = '6212-9d008494-aadb-4fd7-9e9a-d339804593a9'
const FILE_KEY = 'Mt78ryN0usWO1SKTSxkf5AIm'

const clientOptions = {
  accessToken: PERSONAL_ACCESS_TOKEN,
  fileKey: FILE_KEY,
}

async function getFigmaData(){
  const figma = await fetchFigma(clientOptions)
  return figma.file
}

