import React from 'react'
import { withSiteData } from 'react-static'

export default withSiteData(() => {
  return (
    <div style={{display:'block', textAlign: 'left'}}>
      {/* <Logo height={40}  minw={100} /> */}
      <a href='https://handsomesf.com'>
        <img src='https://handsomesf.com/images/logo.png' height={36} />
      </a>
      <div style={{color: '#3A5055', fontSize: 15, lineHeight: 1.8, fontFamily: 'Trebuchet MS, Arial, sans-serif'}}>
        eco · minimalist · kitchens
      </div>
      <div style={{color: '#6B7C7F',fontSize: 15, lineHeight: 1.8, fontFamily: 'Trebuchet MS, Arial, sans-serif'}}>
        {/* <a href='https://handsomesf.com' style={{color: '#6B7C7F'}}>handsomeSF.com</a> */}
        {/* <span style={{color: '#B5BDBF', margin: '0 6px'}}>—</span> */}
        <a href='https://www.instagram.com/handsome_sf/' style={{color: '#6B7C7F'}}>
          <img src='https://handsomesf.com/images/instagram.png' height={14} style={{marginRight:4, verticalAlign:'middle'}} />
          Instagram
        </a>
        <span style={{color: '#B5BDBF', margin: '0 8px'}}>—</span>
        
        <a href='https://www.pinterest.com/handsome_sf/' style={{color: '#6B7C7F'}}>
          <img src='https://handsomesf.com/images/pinterest.png' height={14} style={{marginRight:4, verticalAlign:'middle'}} />
          Pinterest
        </a>
      </div>

    </div>

  )
})
