import * as React from 'react'
import Helmet from 'react-helmet'

import config from 'config'

const mainTitle = config.webTitle
const mainDescription = config.webDescription
const siteUrl = 'https://handsomehomesf.com'

const facebookImg = `${siteUrl}/meta/social-facebook-1200x1200.jpg`
const themeColor = `#080E1A`
const support_email = 'steph@handsomehomesf.com'

type Props = {
  title?: string,
  description?: string,
}


const WebMeta: React.SFC<Props> = (props: Props) => {
  const { title, description } = props
  const composedDescription = description ? description : mainDescription

  const composedTitle = `${title} | ${mainTitle}`

  return <>
    <Helmet key={1}
      // is necessary to not use mainTitle var in order for the emoji to render on google resutls
      title={mainTitle}
      link={[
        { rel: 'canonical', href: siteUrl },
        { rel: 'icon', type: 'image/png', href: `${siteUrl}/meta/favicon-16x16`, size: '16x16' },
        { rel: 'icon', type: 'image/png', href: `${siteUrl}/meta/favicon-32x32`, size: '32x32' },
        { rel: 'shortcut icon', type: 'image/png', href: `${siteUrl}/meta/favicon.png` },

        //iOS Homescreen App meta link
        { rel: 'apple-touch-icon', href: `${siteUrl}/meta/apple-icon.png` },
        { rel: 'apple-touch-startup-image', href: `${siteUrl}/meta/ios-web-app-launch-image.png` },

        // Android Homescreen App meta link
        { rel: 'manifest', href: `${siteUrl}/meta/android-manifest.json` },
      ]}
      meta={[
        { name: 'description', content: composedDescription },

        //Social Meta data from: https://moz.com/blog/meta-data-templates-123

        // Schema.org markup for Google+
        { itemprop: 'name', content: mainTitle },
        { itemprop: 'description', content: mainDescription },
        { itemprop: 'image', content: facebookImg },

        // Facebook Open Graph data
        { property: 'og:title', content: mainTitle },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: siteUrl },
        { property: 'og:image', content: facebookImg },
        { property: 'og:description', content: mainDescription },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '1200' },
        { property: 'og:site_name', content: 'Cryptagon.io' },

        // iOS Homescreen App meta
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-title', content: mainTitle },
        { name: 'apple-mobile-web-app-status-bar-style', content: themeColor },

        // Android Homescreen App meta
        { name: 'theme-color', content: themeColor },
      ]}
      script={[{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          "@context": "http://www.schema.org",
          "@type": "LocalBusiness",
          "url": siteUrl,
          "name": mainTitle,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "San Francisco",
            "addressRegion": "California",
            "addressCountry": "US"
          },
          "sameAs": [
            "https://www.instagram.com/handsomehome_sf/",
          ],
          "contactPoint": [
            {
              "@type": "ContactPoint",
              "email": support_email,
              "contactType": "customer service",
              "url": siteUrl,
            }
          ]
        })
      }]}
    />
    {/* // This is a small hack to add a unicode char to the title, which only works if it's
    // a raw string. If there's a title coming from a sub page, we will override the title
    // prop */}
    {title && title != undefined && title != null ? <Helmet title={composedTitle} key={2} /> : null}
  </>
}

export default WebMeta
