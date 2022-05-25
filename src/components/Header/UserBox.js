import React from 'react'
import {BiMessageSquare} from 'react-icons/bi'
import {FiHeart} from 'react-icons/fi'
import {HiOutlineUser} from 'react-icons/hi'

const UserBox = () => {
  return (
    <ul className='flex'>
        <li className='flex items-center cursor-pointer hover:opacity-50'>
            <BiMessageSquare size={'1.5em'}/>
            <div className='pl-3 text-xl'>Сообщения</div>       
        </li>
        <li className='flex items-center ml-10 cursor-pointer hover:opacity-50'>
            <FiHeart size={'1.5em'}/>
        </li>
        <li className='flex items-center ml-10 cursor-pointer hover:opacity-50'>
            <HiOutlineUser size={'1.5em'} />
            <div className='pl-2 text-xl'>Мой профиль</div>
        </li>
    </ul>
  )
}

export default UserBox