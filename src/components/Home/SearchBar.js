import React, { useState } from 'react'
import {BsSearch} from 'react-icons/bs'
import {VscChromeClose} from 'react-icons/vsc'
import {GrLocation} from 'react-icons/gr'

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('')
//   const [countrySearchTerm, setCounrtySearchTerm] = useState('')

  return (
    <div className='flex items-center justify-center h-[150px] px-[20px] py-[40px]'>
        <div className='bg-white w-full h-full'>
            <form className='flex h-full'>
                <div className="searh-input flex items-center h-full w-[45%] px-10 border-zinc-200 border-r-[1px]">
                    <BsSearch size={'1.5em'}/>
                    <input type="text" onChange={(term) =>  setSearchTerm(term.target.value) } className='h-full w-full outline-none px-10' placeholder={!searchTerm ? '9 121 112 обьявлений рядом' : searchTerm}/>
                    {searchTerm && <span onClick={() => setSearchTerm('')}><VscChromeClose size={'2em'}/></span>}
                    
                </div>
                <div className="coutry-input flex items-center h-full w-[40%] px-10">
                    <GrLocation size={'1.5em'} />
                    <input type="text" className='h-full w-full outline-none px-10' placeholder='Вся Украина'/>
                </div>
                <div onClick={() => console.log(searchTerm)} className="searh-button flex items-center justify-center w-[15%] text-black  hover:bg-[#002f34] hover:text-white transition duration-300 cursor-pointer border-zinc-200 border-l-[1px]">
                    <span className='text-[20px]'>Поиск</span>
                    <span className='px-2'><BsSearch size={'1.5em'}/></span>
                </div>
            </form>
        </div>
    </div>
  )
}

export default SearchBar