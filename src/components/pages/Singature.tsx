import React from 'react'
import { withSiteData } from 'react-static'

export default withSiteData(() => {
  return (
    <div style={{display:'block', textAlign: 'left'}}>
      {/* <Logo height={40}  minw={100} /> */}
      <a href='https://handsomesf.com'>
        <img src='https://lh3.googleusercontent.com/sxfkMqcbrYKRvWO870FEiA-5q1VCc1gwKz7W8rlGR8HvdncxCCLp_dTJmnmKWjdgQYn0FJhK2o5_AORntfQZ=w2880-h1578' height={36} />
      </a>
      <div style={{color: '#3A5055', fontSize: 15, lineHeight: 1.8, fontFamily: 'Trebuchet MS, Arial, sans-serif'}}>
        eco · minimalist · kitchens
      </div>
      <div style={{color: '#6B7C7F',fontSize: 15, lineHeight: 1.8, fontFamily: 'Trebuchet MS, Arial, sans-serif'}}>
        {/* <a href='https://handsomesf.com' style={{color: '#6B7C7F'}}>handsomeSF.com</a> */}
        {/* <span style={{color: '#B5BDBF', margin: '0 6px'}}>—</span> */}
        <a href='https://www.instagram.com/handsome_sf/' style={{color: '#6B7C7F'}}>
          <img src='https://lh5.googleusercontent.com/UHFL0lJHOFYjXkxSkA-u1ZFCbgeD-A3ylajRY8D6bqb3yxp3x-FppeQFPPSd2Wx4-MeHDAGKwg8H4PKcsZPZ=w2880-h1578' height={14} style={{marginRight:4, verticalAlign:'middle'}} />
          Instagram
        </a>
        <span style={{color: '#B5BDBF', margin: '0 8px'}}>—</span>
        
        <a href='https://www.pinterest.com/handsome_sf/' style={{color: '#6B7C7F'}}>
          <img src='https://lh5.googleusercontent.com/JzCzPghjFIc_-08CaaUL4_QZrbNB3N830t4Gz4RYodqmBoZs9aBV9230Pb7i_oqy2Lzs1tERHs6GfYuBZsb7=w2880-h1578' height={14} style={{marginRight:4, verticalAlign:'middle'}} />
          Pinterest
        </a>
      </div>

    </div>

  )
})
