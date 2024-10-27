import React from 'react'

function Header() {
  return (
    <div className='flex justify-between  h-[35px]' style={{ color: "black", margin: "30px 200px"}}>
      <div className='text-black font-[20px] text-4xl'>ma.</div>
      <div className='flex gap-8 capitalize ' style={{fontSize: "21px", lineHeight: "25.2px", alignItems: "flex-end"}}>
        <div>work</div>
        <div>about</div>
        <div>playground</div>
        <div>contact</div>
      </div>
    </div>
  )
}

export default Header
