import * as React from 'react'
import path from 'path'

export default {
  // siteRoot: 'https://handsomehomesf.com'
  plugins: ['react-static-plugin-typescript', 'react-static-plugin-styled-components'],
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  entry: path.join(__dirname, 'src', 'index.tsx'),
  getSiteData: () => ({
    title: 'Handsome Home Organization',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/components/pages/Home',
      },
      // {
      //   path: '/about',
      //   component: 'src/components/pages/About',
      // },
      // {
      //   path: '/services',
      //   component: 'src/components/pages/Services',
      // },
      // { path: '/404', component: 'src/components/pages/404' },
    ]
  },
  Document: ({ Html, Head, Body, children, renderMeta }) => (
    <Html lang="en-US">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" type="image/png" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/png" href="/meta/favicon-32x32.png" sizes="32x32" />
        {renderMeta.styleTags}
        <title>Handsome Home Sf</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),
}