import React from 'react'

const Button = ({text}) => {
  return (
    <div className='ml-7 p-2 text-[#002f34] font-semibold bg-white rounded-md cursor-pointer border-[5px] border-slate-50 hover:bg-[#002f34] hover:text-[white] transition delay-0 duration-400 ease-in-out'>
        {text}
    </div>
  )
}

export default Button