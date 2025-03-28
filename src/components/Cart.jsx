import NavBar from "./NavBar"
import { cartArray } from "../index/constants"
import removeIcon from '../assets/icons/removeIcon.svg'
import subtractIcon from '../assets/icons/subtractIcon.svg'
import addIcon from '../assets/icons/addIcon.svg'

const Cart = () => {


    return (
        <>
            <main>
                <div className="bg-white px-4 flex flex-col my-4">
                    <div className="flex flex-col gap-6">
                    <h3 className="text-2xl font-mono">Shopping Cart</h3>
                    <div className="flex flex-col gap-4">
                        {cartArray.map((product) => (
                            <div key={product.id} className="flex  w-full h-full  items-center justify-between">
                                <div className="flex h-full w-full items-end gap-4">
                                    <div className=" flex justify-center h-[7.5rem] w-[7.5rem] bg-[#F6EDDB] rounded-2xl">
                                        <img className=" w-[5rem] object-contain " src={product.image} alt="" />
                                    </div>
                                    <div className="flex flex-col h-full gap-2">
                                        <h3 className="text-xl text-gray-900 font-medium">{product.title}</h3>
                                        <h3 className="text-lg font-medium text-[#6A9AB0]">{product.description}</h3>
                                        <p className=" font-medium text-lg text-gray-900">{product.price}</p>
                                    </div>
                                </div>
                                    <div className="flex flex-col h-full items-end self-end gap-4">
                                        <button className="">
                                            <img className="w-6" src={removeIcon} alt="remove from cart" />
                                        </button>
                                        <div className="flex gap-2">
                                            <button className="">
                                                <img className="w-8" src={subtractIcon} alt="subtract" />
                                            </button>
                                            <span className="font-medium ">1</span>
                                            <button>
                                                <img className="w-8" src={addIcon} alt="add" />
                                            </button>

                                        </div>

                                    </div>
                               

                            </div>
                        ))}
                    </div>
                    </div>
                </div>

            </main>

        </>
    )
}

export default Cart