import { useState } from 'react'
import mayankaLogo from '../assets/icons/mayankaLogo.svg'
import addToCart from '../assets/icons/addToCart-stroke.svg'
import searchIcon from '../assets/icons/searchIcon.svg'
import hamburger from '../assets/icons/hamburgerIcon.svg'
import closeIcon from '../assets/icons/closeIcon.svg'
import { navLinks } from '../index/constants'
import arrowdownIcon from '../assets/icons/arrowdownIcon.svg'
import addToCartDesktop from '../assets/icons/addToCartDesktop.svg'
import searchIconDesktop from '../assets/icons/searchIconDesktop.svg'




const NavBar = () => {
    const [isOpen, setisOpen] = useState(false)
    return (
        <div className="">

            <div className="w-full h-11 bg-[#001F3F] flex justify-between  items-center px-3 md:justify-center md:h-12">
                <button><img className="w-[7.5rem] md:w-[10rem]" src={mayankaLogo} alt="" /></button>
                <div className="flex gap-3 md:hidden">
                    <button className="">
                        <img className="w-[1.2rem]" src={addToCart} alt="" />
                    </button>
                    <button className="">
                        <img className="w-[1.2rem]" src={searchIcon} alt="" />
                    </button>
                    <button className=""
                        onClick={() => setisOpen(true)}>
                        <img className="w-[1.2rem]" src={hamburger} alt="" />
                    </button>
                </div>
            </div>
            <div className={`fixed top-0 left-0  bg-[#001F3F] w-full  flex flex-col  transform transition-transform ${isOpen ? "translate-y-0" : "-translate-y-full"
                } duration-400 ease-in-out md:hidden`}>
                <div className="flex items-center justify-between px-3 h-11">
                    <button><img className="w-[7.5rem]" src={mayankaLogo} alt="" /></button>
                    <button><img className="w-[0.9rem]"
                        src={closeIcon}
                        alt=""
                        onClick={() => setisOpen(false)}
                    /></button>
                </div>
                <div className="flex flex-col items-center py-[4rem]">

                    <nav>
                        <ul className='flex flex-col items-center gap-6'>
                            {navLinks.map((item) => (
                                <li className='list-none' key={item.label}>
                                    <a className="text-white font-sans tracking-wide " href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

            </div>

            <nav className="">

                <div class=" hidden md:flex md:items-center md:h-14 md:white md:py-4">
                    <div class="flex-1 p-2">
                        <button title='Products' className="flex w-full">
                            <div className="flex gap-3 items-center justify-start ps-2 ">
                                <span className='max-[1220px]:hidden font-medium text-[#001F3F]'>Products</span>
                                <img className='w-[1.3rem] max-[1220px]:w-[1.5rem]' src={arrowdownIcon} alt="" />
                            </div>
                        </button>
                    </div>
                    <div class="flex-5 p-2">
                        <ul className="flex  gap-12">
                            {navLinks.map((item) => (
                                <li className="list-none  text-gray-900" key={item.label} title={item.label}>
                                    <a className="font-sans tracking-wide" href={item.href}>{item.label}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div class="flex-4 text-white px-2 py-1">
                        <form class="max-w-md mx-auto w-full ">
                            <div class="flex">
                                <div class="relative w-full">
                                    <input type="search" class="block p-2.5 w-full z-20 text-sm rounded-sm text-gray-900 bg-[#CDE2EB]  border-s-gray-50 placeholder:text-[#587B9B] outline-0" placeholder="Search for product" required />
                                    <button type="submit" class="absolute top-0 end-0 h-full p-2  font-medium bg-[#CDE2EB] rounded-e-sm">
                                        <img className='w-5' src={searchIconDesktop} alt="search icon" />
                                        <span class="sr-only">Search</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="flex-1 p-2">
                        <button title='My cart' className="flex w-full">
                            <div className="flex w-full gap-2 items-center justify-end pe-2">
                                <span className='max-[1220px]:hidden font-medium text-[#001F3F]'>My Cart</span>
                                <img className='w-[1.3rem] max-[1220px]:w-[1.5rem]' src={addToCartDesktop} alt="" />
                            </div>
                        </button>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default NavBar