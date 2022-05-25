import React, { useEffect, useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import {VscChromeClose} from 'react-icons/vsc'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
  
  const onCloseBtnClick = () => {
    setSearchTerm(null)
  }

  return (
    <div className='flex items-center justify-center h-[200px] px-[40px] py-[60px]'>
        <div className='bg-white w-full h-full'>
            <form className='h-full mx-14'>
                <div className="searh-input flex items-center h-full w-[40%] ">
                    <BsSearch size={'2em'}/>
                    <input type="text" onChange={(term) => setSearchTerm(term.target.value)} className='h-full w-full outline-none px-10' placeholder={!searchTerm ? '9 121 112 обьявлений рядом' : searchTerm}/>
                    {searchTerm && <div onClick={onCloseBtnClick}><VscChromeClose size={'2em'}/></div>}
                    
                </div>
                <div className="coutry-input"></div>
                <div className="searh-button"></div>
            </form>
        </div>
    </div>
  )
}

export default SearchBar