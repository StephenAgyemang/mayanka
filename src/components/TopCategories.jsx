import React from 'react'
import { topCategories } from '../index/constants'

const TopCategories = () => {
  return (
    <>
     <div className="w-full h-[22rem] mt-4 ">
    
            <div className="flex flex-col h-full justify-baseline ps-3 md:ps-8 ">
              <h2 className="text-xl">Top Categories</h2>
              <div className="overflow-x-scroll flex flex-nowrap scrollbar-hidden gap-8 items-center h-full">
                {topCategories.map((category) => (
                  <div key={category.id} className="relative flex flex-col overflow-hidden w-[14rem] h-[17rem] rounded-3xl shrink-0">
                    <img src={category.image} alt="" className="object-cover max-w-full max-h-full" />
                   <div className=" absolute flex py-2 items-end justify-center w-full h-full bg-gradient-to-t from-black/88 to-transparent">
                    <h3 className="text-white/95 text-lg font-medium text-center pt-2 tracking-wider">{category.title}</h3>
                   </div>
                  </div>
                ))}
              </div>
            </div>
    
          </div>
    </>
  )
}

export default TopCategories