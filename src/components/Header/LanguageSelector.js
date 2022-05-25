import React, {useRef, useState} from 'react'


const LanguageSelector = () => {
  let rusLang = useRef()
  let UkrLang = useRef()

  let arr = [rusLang.current, UkrLang.current]

  const ChangeActive = (e) => console.log(this)


  return (
    <div className='flex items-center px-20'>
        <div ref={rusLang} onClick={ChangeActive} className='cursor-pointer active'>язык</div>
        <span className='text-[#61f5da] px-3'>|</span>
        <div ref={UkrLang} onClick={ChangeActive} className='cursor-pointer'>мова</div>
    </div>
  )
}

export default LanguageSelector