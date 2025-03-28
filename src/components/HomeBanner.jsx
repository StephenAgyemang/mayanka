import homeBannerImage from '../assets/images/homeBannerImage.svg'
import desktopBanner from '../assets/images/desktopBanner.svg'

const HomeBanner = () => {
  return (
    <div>
        <div className=" md:bg-amber-500 w-full min-h-[1px] md:h-[28rem] z-0">
          <img className="hidden md:flex md:w-full md:h-full md:object-cover" src={desktopBanner} alt="desktop banner"  />
            <img className="w-full h-full object-cover md:hidden" src={homeBannerImage} alt="homeBannerImage" />
        </div>
    </div>
  )
}

export default HomeBanner