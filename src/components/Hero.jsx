import React, { useState, useEffect, useContext } from 'react'

import { Context } from "../App"

import { firstImage, secondImage, thirdImage, fourthImage, cart, close, cart_white, page_left, page_right } from "../assets"

const Hero = () => {

    const [count, setCount] = useState(0)
    const [items, setItems] = useState(0)

    const [modal, setModal] = useState(false)

    const [activeImage, setActive] = useState(firstImage)
    const handleCount = (change) => {
        switch (change) {
            case "add":
                setCount(count => count + 1)
                break
            case "subtract":
                if (count < 1) { return }
                setCount(count => count - 1)
        }
    }

    const [cartItems, setCart] = useContext(Context)

    const addToCart = (count) => {
        // setItems(items => items + count)
        setCart(cart => cart + count)
        setCount(0)
        // localStorage.setItem("itemsInCart", JSON.stringify(items))
    }
    const imageIndex = (direction) => {
        /* inte fint, jag vet... :( fick bara problem med hantering av den state jag använde, så fick bli detta mästerverk :) */
        if (direction == "left") {
            if (activeImage == firstImage) { return }
            else if (activeImage == secondImage) {
                setActive(firstImage)
            } else if (activeImage == thirdImage) {
                setActive(secondImage)
            } else if (activeImage == fourthImage) {
                setActive(thirdImage)
            } else { return }
        }
        if (direction == "right") {
            if (activeImage == fourthImage) { return }
            else if (activeImage == thirdImage) {
                setActive(fourthImage)
            } else if (activeImage == secondImage) {
                setActive(thirdImage)
            } else if (activeImage == firstImage) {
                setActive(secondImage)
            } else { return }
        }

        //Detta strular bara pga dålig state management....
        /*  */
        // let images = [
        //     firstImage,
        //     secondImage,
        //     thirdImage,
        //     fourthImage
        // ]
        // if (direction == "left") {
        //     if (index == 0) { return }
        //     setIndex(index => index -= 1)
        // }
        // if (direction == "right") {
        //     if (index > 3) { return }
        //     setIndex(index => index += 1)
        // }
        // setActive(images[index])
        // console.log(index)
    }

    return (
        <>
            <div className='flex flex-row'>
                {/* IMAGES */}
                <div className='w-[445px]'>
                    <img src={activeImage} className='cursor-pointer w-[445px] h-[445px] min-w-[445px]' onClick={() => setModal(!modal)} />
                    <div className='flex flex-row gap-[31px] mt-[32px]'>
                        <img src={firstImage} onClick={() => setActive(firstImage)} className={`${activeImage == firstImage ? "border-[2px]" : "border-none"} border-[#FF7E1B] w-[88px] h-[88px] rounded-2xl hover:opacity-[75%] cursor-pointer`} />
                        <img src={secondImage} onClick={() => setActive(secondImage)} className={`${activeImage == secondImage ? "border-[2px]" : "border-none"} border-[#FF7E1B] w-[88px] h-[88px] rounded-2xl hover:opacity-[75%] cursor-pointer`} />
                        <img src={thirdImage} onClick={() => setActive(thirdImage)} className={`${activeImage == thirdImage ? "border-[2px]" : "border-none"} border-[#FF7E1B] w-[88px] h-[88px] rounded-2xl hover:opacity-[75%] cursor-pointer`} />
                        <img src={fourthImage} onClick={() => setActive(fourthImage)} className={`${activeImage == fourthImage ? "border-[2px]" : "border-none"} border-[#FF7E1B] w-[88px] h-[88px] rounded-2xl hover:opacity-[75%] cursor-pointer`} />
                    </div>
                </div>
                <div className='ml-[125px] mt-[40px] w-[445px]'>
                    <p className='text-[13px] text-[#FF7E1B] leading-[16.12px] font-bold tracking-widest'>SNEAKER COMPANY</p>
                    <p className='font-bold mt-[24px] text-[44px]'>Fall Limited Edition Sneakers</p>
                    <p className='text-[16px] mt-[32px] text-[#69707D] leading-[26px]'>These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.</p>
                    <div className='flex flex-col text-[28px] font-bold'>
                        <div className='flex flex-row gap-[31px]'>
                            <p>$125.00</p>
                            <p className='text-[16px] mt-[10px] text-[#FF7E1B] bg-[#FFEEE2] text-center flex rounded-2xl leading-[27px] justify-center w-[51px] h-[27px]'>50%</p>
                        </div>
                        <p className='text-[#B6BCC8] line-through'>$250.00</p>
                    </div>
                    <div className='flex flex-row mt-[32px] gap-[16px]'>
                        <div className='w-[157px] h-[56px] flex flex-row justify-between items-center bg-[#F6F8FD] rounded-2xl px-[16px] text-[#FF7E1B] font-bold'>
                            <p onClick={() => handleCount("subtract")} className='cursor-pointer text-[25px]'>-</p>
                            <p className='text-[black]'>{count}</p>
                            <p onClick={() => handleCount("add")} className='cursor-pointer text-[25px]'>+</p>
                        </div>
                        <button className='flex flex-row justify-center items-center w-[272px] h-[56px] bg-[#FF7E1B] text-[white] rounded-2xl' onClick={() => addToCart(count)}>
                            <img src={cart_white} className='mr-[15.6px]' />
                            <p>Add to cart</p>
                        </button>
                    </div>
                </div>
                <div className={`${!modal ? 'hidden' : 'flex'} absolute bg-[#00000088] w-full h-full top-0 left-0 justify-center`}>
                    <div className='flex flex-col justify-center items-center'>
                        <div className='w-full flex justify-end mb-[20px]'>
                            <img src={close} className='cursor-pointer w-[20px] h-[20px]' onClick={() => setModal(!modal)} />
                            <img src={page_left} onClick={() => imageIndex("left")} className='w-[56px] h-[56px] absolute mt-[280px] mr-[520px] cursor-pointer' />
                            <img src={page_right} onClick={() => imageIndex("right")} className='w-[56px] h-[56px] absolute mt-[280px] mr-[-25px] cursor-pointer' />
                        </div>
                        <img src={activeImage} className='w-[550px] h-[550px] rounded-md' />
                        <div className='flex flex-row gap-[31px] mt-[40px]'>
                            <div className='bg-[white] rounded-2xl'>
                                <img src={firstImage} onClick={() => setActive(firstImage)} className={`${activeImage == firstImage ? "border-[2px]" : "border-none"} w-[88px] h-[88px] rounded-2xl hover:opacity-[50%] cursor-pointer border-[#FF7E1B]`} />
                            </div>
                            <div className='bg-[white] rounded-2xl'>
                                <img src={secondImage} onClick={() => setActive(secondImage)} className={`${activeImage == secondImage ? "border-[2px]" : "border-none"} w-[88px] h-[88px] rounded-2xl hover:opacity-[50%] cursor-pointer border-[#FF7E1B]`} />
                            </div>
                            <div className='bg-[white] rounded-2xl'>
                                <img src={thirdImage} onClick={() => setActive(thirdImage)} className={`${activeImage == thirdImage ? "border-[2px]" : "border-none"} w-[88px] h-[88px] rounded-2xl hover:opacity-[50%] cursor-pointer border-[#FF7E1B]`} />
                            </div>
                            <div className='bg-[white] rounded-2xl'>
                                <img src={fourthImage} onClick={() => setActive(fourthImage)} className={`${activeImage == fourthImage ? "border-[2px]" : "border-none"} w-[88px] h-[88px] rounded-2xl hover:opacity-[50%] cursor-pointer border-[#FF7E1B]`} />
                            </div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero