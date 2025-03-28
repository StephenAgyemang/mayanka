
import { useState } from "react";
import { bestSellingProducts } from "../index/constants";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Scrollbar } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import bsCartStroke from '../assets/icons/bsCartStroke.svg'
import bsCartFill from '../assets/icons/bsCartFill.svg'


const BestSelling = () => {
  const [isSelected, setIsSelected] = useState(false);
  return (
    <>
      <div className="w-full h-[21rem] mt-4 ">

        <div className="flex flex-col h-full justify-baseline ps-3 md:ps-8 ">
          <h2 className="text-xl">Best Selling Products</h2>
          <div className="overflow-x-scroll flex flex-nowrap scrollbar-hidden gap-10 items-center h-full">
            {bestSellingProducts.map((product) => (
              <div key={product.id} className=" flex flex-col border border-[#9ABAC9] w-[13rem] h-[16rem] rounded-2xl shrink-0">
                <div className="w-full flex items-center justify-center h-[10rem]">
                  <img className={`${product.id === 5 ? " w-[6rem]" : "w-[9rem]"}`} src={product.image} alt="" />
                </div>
                <div className="flex flex-col w-full h-[7rem] gap-2 p-2">
                  <h3 className="text-lg text-gray-900 font-medium">{product.name}</h3>
                  <h3 className="text-sm text-[#6A9AB0]">{product.description}</h3>
                  <div className="flex w-full items-center justify-between">
                    <p className=" font-medium text-xl text-gray-900">{product.price}</p>
                    <button className="" onClick={() => setIsSelected(!isSelected)}>
                      {isSelected ? <img className="w-6 h-6 ml-2" src={bsCartFill} alt="" /> : <img className="w-6 h-6 ml-2" src={bsCartStroke} alt="" />}
                    </button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

      </div>

    </>
  )
}

export default BestSelling