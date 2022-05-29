import React from 'react'

import { Headings } from '../../data/Headings'

function MainHeadings() {

    const heading_item = (item) => {
        return (
            <div key={item.id} className={`w-[100px] m-[15px]`}>
                <a href="">
                    <div className=''>
                        <div className={`rounded-[50%] overflow-hidden`} style={{background: item.bg_color}}>
                            <img className='bg-none object-cover' src={`${item.url}`} alt={item.title} />
                        </div>
                        <p className='w-full text-center my-[10px]'>{item.title}</p>
                    </div>
                </a>
            </div>
        )
    }
    return (
        <div className='w-[100%] h-auto bg-white flex justify-center align-center flex-col px-[20px] py-[50px] shadow'>
            <h2 className='text-[30px] text-center'>Главные рубрики</h2>
            <div className='flex flex-wrap w-[100%] h-auto mt-[20px]'>
                {Headings.map(item => {
                    return heading_item(item)
                })}
            </div>

        </div>
  )
}

export default MainHeadings