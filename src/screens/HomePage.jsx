import HomeBanner from "../components/HomeBanner"
import desktopCow from '../assets/images/desktopCow.svg'
import { bannerCard } from "../index/constants"
import BestSelling from "../components/BestSelling"
import TopCategories from "../components/TopCategories"
import bgBlackSteak from '../assets/images/bgBlackSteak.svg'

const HomePage = () => {
  return (
    <>
      <header>
        <div className="relative">
          <HomeBanner />
          <div className=" absolute top-1/2 left-0 -translate-y-1/2  w-full md:hidden">
            <div className="flex flex-col items-center justify-center">
              <span className="text-[1.4rem]  text-white/90 text-center">Want Some Meat?...<br></br>Pause.</span>
              <span className="text-md text-white/75">We are here for you.</span>
            </div>
          </div>

          <div className="hidden  md:absolute md:top-0 md:left-0 md:flex md:flex-col   md:w-full md:h-full">
            <div className="w-full  h-full  flex">
              <div className="flex-2 h-full w-full flex justify-center ">
                <img className=" mt-18 pe-28 max-[1070px]:mt-37" src={desktopCow} alt="desktopCow" />
              </div>


              <div className="flex flex-col items-start max-[820px]:pe-6 ">  
                  <div className="flex flex-col pt-8 gap-4">
                    <span className="text-white/90 text-4xl tracking-wide max-[820px]:text-3xl ">Want some meat?...<br></br> Pause</span>
                    <p className="text-white/75 text-2xl tracking-wide max-[820px]:text-xl">We are here for you.</p>
                  </div>
                  <div className="flex-1 h-full flex items-end justify-end pb-3 pe-10  gap-10">
                    {bannerCard.map((product)=>(
                      <div  key={product.id} className={`relative ${product.id === 1 ? "max-[864px]:hidden" : ""} ${product.id === 3 ? "max-[1167px]:hidden" : ""}`}>
                      <div className="backdrop-blur-xs bg-white/8 shadow-lg rounded-2xl  h-[10rem] w-[8rem]  px-3 flex flex-col items-start justify-between pt-18 pb-2">
                      <h2 className="text-white/90 text-md font-semibold pt-2">{product.title}</h2>
                      <p className="text-white/75 text-xs">
                        {product.description}
                      </p>
                      <p className="text-white/75 text-xs mt-2 ">
                        {product.price}
                      </p>
                    </div>
                    <div className={` ${product.id === 3 ? "w-[11rem]" : ""}`}></div>
                    <img className={`absolute bottom-22 ${product.id === 3 ? "w-[11rem] " : ""}`} src={product.image} alt="" />
                    </div>
                    ))}
                  </div>
              </div> 


            </div>
          </div>
        </div>
      </header>
      <main>
        <BestSelling />
        <TopCategories />
        <div className="hidden md:flex w-full h-[24rem] bg-black justify-between pe-14 ">
        <img src={bgBlackSteak} alt="" />
        <div className="flex flex-col items-center justify-center gap-10">
                    <div className="flex flex-col items-start gap-4">
                    <span className="text-white/90 text-5xl tracking-wide max-[820px]:text-3xl ">"Vegan ting<br></br> I slaughter one."</span>
                    <p className="text-white/75 text-2xl tracking-wide max-[820px]:text-xl flex self-start">~Santan Dave</p>
                    </div>
                    <button className="bg-white rounded-full py-2 w-[14rem] ">Buy Steak</button>
        </div>
        </div>
        

      </main>
    </>
  )
}

export default HomePage