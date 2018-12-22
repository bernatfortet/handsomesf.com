import * as React from 'react'

export default {
  plugins: ['react-static-plugin-typescript', 'react-static-plugin-styled-components'],
  getSiteData: () => ({
    title: 'Handsome Home Organization',
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/components/pages/Home',
      },
      {
        path: '/about',
        component: 'src/components/pages/About',
      },
      {
        path: '/services',
        component: 'src/components/pages/Services',
      },
      { path: '/404', component: 'src/components/pages/404' },
    ]
  },
  Document: ({ Html, Head, Body, children, renderMeta }) => (
    // `renderMeta.styleTags` contains the styles we need to inject
    // into the head of each page.
    <Html>
      <Head>
        {renderMeta.styleTags}
        <title>Handsome Home Sf</title>
      </Head>
      <Body>{children}</Body>
    </Html>
  ),

}