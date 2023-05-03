import React, { useState, useEffect, useContext } from 'react'

import { title, cart, profile, remove, firstImage, secondImage, thirdImage, fourthImage } from "../assets"

import { Context } from "../App"

const Navbar = () => {

    const [cartItems, setCart] = useContext(Context)

    const [totalCost, setTotalCost] = useState(0)

    // const [cartLength, setCartLength] = useState(JSON.parse(localStorage.getItem("itemsInCart")) || 0)
    const [toggle, setToggle] = useState(false)

    useEffect(() => {
        setTotalCost(cartItems * 125)
    }, [cartItems])

    return (

        <nav className='w-full h-[112px] px-[165px] kumbh'>
            <div className='w-full h-full flex flex-row'>
                <section className='w-full h-full flex items-center justify-start text-[#69707D]'>
                    <img src={title} className='w-[137.5px] h-[20px] cursor-pointer' />
                    <div className='w-min-content h-full items-center flex flex-row ml-[56.5px] gap-[32px]'>
                        <p className='cursor-pointer py-[42px] hover:border-b-[4px] border-[#FF7E1B]'>Collections</p>
                        <p className='cursor-pointer py-[42px] hover:border-b-[4px] border-[#FF7E1B]'>Men</p>
                        <p className='cursor-pointer py-[42px] hover:border-b-[4px] border-[#FF7E1B]'>Women</p>
                        <p className='cursor-pointer py-[42px] hover:border-b-[4px] border-[#FF7E1B]'>About</p>
                        <p className='cursor-pointer py-[42px] hover:border-b-[4px] border-[#FF7E1B]'>Contact</p>
                    </div>
                </section>
                <section className='w-min-content h-full flex items-center justify-end gap-[46.18px]'>
                    <img src={cart} onClick={() => setToggle(!toggle)} className='h-[20px] w-[21.82px] object-contain cursor-pointer' />
                    <img src={profile} className='h-[50px] w-[50px] object-contain cursor-pointer hover:border-[2px] rounded-full border-[#FF7E1B]' />
                    <p className='fixed top-[38px] right-[255px] text-[10px] w-[19px] h-[13px] leading-[13px] bg-[#FF7E1B] text-white text-center rounded-2xl'>{cartItems}</p>
                    <div className={`${!toggle ? 'hidden' : 'flex'} absolute top-[87px] right-[115px] w-[360px] h-[256px] rounded-2xl shadow-2xl flex flex-col text-[16px]`}>
                        <div className='w-full'>
                            <div className='px-[24px] h-[67px]'>
                                <p className='font-bold pt-[24px]'>Cart</p>
                            </div>
                            <div className='w-full h-[1px] bg-[#E4E9F2]' />
                        </div>
                        <div className={`${cartItems ? "box" : "hidden"} flex flex-col px-[24px] mt-[24px]`}>
                            <div className='flex flex-row gap-[16px]'>
                                <img src={firstImage} className='w-[50px] h-[50px] object-contain rounded-md' />
                                <div className='flex flex-col text-[#69707D]'>
                                    <p>Fall Limited Edition Sneakers</p>
                                    <div className='flex flex-row gap-[6px]'>
                                        <p>$125.00 x {cartItems}</p>
                                        <p className='text-[black]'>${totalCost}.00</p>
                                    </div>
                                </div>
                                <div className='flex items-center'>
                                    <img src={remove} onClick={() => setCart(cart => cart - 1)} className='object-contain cursor-pointer' />
                                </div>
                            </div>
                            <div className='flex justify-center mt-[26px] w-[312px] h-[56px] bg-[#FF7E1B] rounded-xl text-white'>
                                <button>Checkout</button>
                            </div>
                        </div>
                        <p className={`${cartItems ? "hidden" : "box"} mt-[77px] text-[#69707D] text-[26px] text-center`}>Your cart is empty.</p>
                        {/* <div className={`${cartLength ? "hidden" : "box"} mt-[77px] text-[#69707D] text-[26px] text-center`}>
                        </div> */}
                    </div>
                </section>
            </div>
            <div className='w-full h-[1px] bg-[#E4E9F2]' />
        </nav>
    )
}

export default Navbar