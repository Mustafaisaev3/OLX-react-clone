import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import Logo from './Logo'
import LanguageSelector from './LanguageSelector'
import UserBox from './UserBox'
import Button from './Button'

const Header = () => {

  const [isScrolled, setIsScrolled] = useState(false)
  const [scrollNum, setScrollNum] = useState(window.scrollY)

    useEffect(() => {
        const handleScroll = () => {
            setScrollNum(window.scrollY)
            if (window.scrollY > scrollNum){
                setIsScrolled(true)
            } else if (window.scrollY < scrollNum) {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)


        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scrollNum])


  return (
    <motion.header transition={{delay: 0.1, duration: 0.6}} initial={!isScrolled ? {top: -100} : {top: 0}} animate={isScrolled ? {top: -100} : {top: 0}} className={'fixed -top-[100%] left-0'}>
      <div className="container">
        <nav className='flex justify-between'>
          <div>
            <Logo />
          </div>
          <div className='flex items-center'>
            <LanguageSelector />
            <UserBox />
            <Button text='Подать обьявление' />
          </div>
        </nav>
      </div>
    </motion.header>
  )
}

export default Header