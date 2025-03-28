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
import { Link, Links } from 'react-router-dom'
import Cart from './Cart'
import HomePage from '../screens/HomePage'


const NavBar = () => {
    const [isOpen, setisOpen] = useState(false)
    

    return (
        <div className="">

            <div className="w-full h-11 bg-[#001F3F] flex justify-between  items-center px-3 md:justify-center md:h-12">
                <Link to={'/homepage'} title='Mayanka Home'><img  className="w-[7.5rem] md:w-[10rem]" src={mayankaLogo} alt="" /></Link>
                <div className="flex gap-3 md:hidden">
                    <Link className=""
                    to={"/cart"}
                    >
                        <img className="w-[1.2rem]" src={addToCart} alt="" />
                    </Link>
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
                } duration-400 ease-in-out md:hidden z-10`}>
                <div className="flex items-center justify-between px-3 h-11">
                    <Link to={'/homepage'} title='Mayanka Home'><img className="w-[7.5rem]" src={mayankaLogo} alt="" /></Link>
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
                                    <Link className="text-white font-sans tracking-wide " to={item.href}>{item.label}</Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                </div>

            </div>

            <nav className="">

                <div className=" hidden md:flex md:items-center md:h-14 md:bg-white ">
                    <div className="flex-1 p-2">
                        <button title='Products' className="flex w-full">
                            <div className="flex gap-3 items-center justify-start ps-2 ">
                                <span className='max-[1220px]:hidden font-medium text-[#001F3F]'>Products</span>
                                <img className='w-[1.3rem] max-[1220px]:w-[1.5rem]' src={arrowdownIcon} alt="" />
                            </div>
                        </button>
                    </div>
                    <div className="flex-5 flex px-2 h-full ">
                        <ul className="flex items-center gap-10 h-full ">
                            {navLinks.map((item) => (
                                <li className="flex items-center list-none pt-1 transition duration-150  border-white border-b-3 hover:border-b-3 hover:bg-[#CDE2EB90] hover:border-[#3A6D8C] focus:border-b-3 focus:bg-[#CDE2EB90] focus:border-[#3A6D8C]  px-2 h-full  text-gray-900" key={item.label} title={item.label}>
                                    <Link className="font-sans tracking-wide" to={item.href}>{item.label}</Link>
                                </li>
                                
                            ))}
                        </ul>
                    </div>
                    <div className="flex-4 text-white px-2 py-1">
                        <form className="max-w-md mx-auto w-full ">
                            <div className="flex">
                                <div className="relative w-full">
                                    <input type="search" className="block p-2.5 w-full z-20 text-sm rounded-sm text-gray-900 bg-[#CDE2EB]  border-s-gray-50 placeholder:text-[#587B9B] outline-0" placeholder="Search for product" required />
                                    <button type="submit" className="absolute top-0 end-0 h-full p-2  font-medium bg-[#CDE2EB] rounded-e-sm">
                                        <img className='w-5' src={searchIconDesktop} alt="search icon" />
                                        <span className="sr-only">Search</span>
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="flex-1 p-2">
                        <Link title='My cart' className="flex w-full"
                        to={"/cart"}
                        >
                            <div className="flex w-full gap-2 items-center justify-end pe-2">
                                <span className='max-[1220px]:hidden font-medium text-[#001F3F]'>My Cart</span>
                                <img className='w-[1.3rem] max-[1220px]:w-[1.5rem]' src={addToCartDesktop} alt="" />
                            </div>
                        </Link>
                    </div>
                </div>
            </nav>
            

        </div>
    )
}

export default NavBar