'use client'

import Image from "next/image"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { cn } from "@/lib/utils"
import { Fragment, useState } from 'react'
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from "next/link"
import { HiOutlinePlusSmall, HiOutlineHome, HiOutlineMinusSmall } from "react-icons/hi2";
import { MdFavoriteBorder } from "react-icons/md";

const DetailProduct = () => {
    const dis = undefined;
    const [count, setCount] = useState<number>(1)
    const handleIncrement = () => setCount((prev) => prev + 1)
    const handleDecrement = () => {
        if (count === 1) return
        setCount((prev) => prev - 1)
    }
    return (
        <section className="py-4">
            <div className="container mx-auto">
                <div className="lg:col-gap-12 xl:col-gap-16 grid grid-cols-1 gap-12 lg:grid-cols-5 lg:gap-5">
                    <div className="lg:col-span-3 lg:row-end-1">
                        <div className="lg:flex lg:items-start">
                            <div className="lg:order-2 lg:ml-2">
                                <div className="max-w-xl overflow-hidden rounded relative">
                                    <Image
                                        className="h-full w-full max-w-full object-cover"
                                        src="/assets/images/product-detail/1-3.jpg"
                                        alt="thumbnail"
                                        width={500}
                                        height={500}
                                    />
                                    <div
                                        className={cn(
                                            'uppercase z-30 absolute top-[20px] left-[20px] text-white font-semibold text-center text-[13px] px-2.5 rounded-[2.5px]',
                                            dis ? 'bg-red-500' : 'bg-black'
                                        )}
                                    >
                                        {dis ? '39% OFF' : 'top'}
                                    </div>
                                </div>
                            </div>
                            <div className="w-full lg:order-1 lg:w-28 lg:flex-shrink-0">
                                <div className="flex flex-row items-start lg:flex-col">
                                    <button title="product-01" type="button" className="flex-0 aspect-square mb-3 h-28 overflow-hidden rounded border-2 border-gray-900 text-center">
                                        <Image width={500} height={500} priority className="h-full w-full object-cover" src="/assets/images/product-detail/1-3.jpg" alt="" />
                                    </button>
                                    <button title="product-02" type="button" className="flex-0 aspect-square mb-3 h-28 overflow-hidden rounded border-2 border-transparent text-center">
                                        <Image width={500} height={500} priority className="h-full w-full object-cover" src="/assets/images/product-detail/2-5.jpg" alt="" />
                                    </button>
                                    <button title="product-03" type="button" className="flex-0 aspect-square mb-3 h-28 overflow-hidden rounded border-2 border-transparent text-center">
                                        <Image width={500} height={500} priority className="h-full w-full object-cover" src="/assets/images/product-detail/3-4.jpg" alt="" />
                                    </button>
                                    <button title="product-04" type="button" className="flex-0 aspect-square mb-3 h-28 overflow-hidden rounded border-2 border-transparent text-center">
                                        <Image width={500} height={500} priority className="h-full w-full object-cover" src="/assets/images/product-detail/4-2.jpg" alt="" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-2 lg:row-span-2 lg:row-end-2">
                        <nav className="flex items-center">
                            <ol role="list" className="flex items-center">
                                <li className="text-left">
                                    <div className="-m-1">
                                        <Link href="/" className="rounded-md  text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"><HiOutlineHome size={18} /></Link>
                                    </div>
                                </li>
                                <li className="text-left">
                                    <div className="flex items-center">
                                        <span className="mx-2 text-gray-400"><MdKeyboardArrowRight /></span>
                                        <div className="-m-1">
                                            <Link href="/" className="rounded-md text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800">Man&apos;s</Link>
                                        </div>
                                    </div>
                                </li>
                            </ol>
                        </nav>
                        <h1 className="text-2xl font-bold my-5 text-gray-900 sm:text-3xl">Sports Tops</h1>
                        <div className="flex items-end">
                            <h1 className="text-3xl font-bold text-color-primary">$60.50</h1>
                        </div>
                        <p className="my-5 text-color-secondary text-[14px]">Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus adipiscing.</p>
                        <div className="flex items-center space-y-4 border-t border-b py-4 flex-row sm:space-y-0">
                            <button onClick={handleDecrement} title="Plus" className="px-2 rounded-l border h-[3rem]">
                                <HiOutlineMinusSmall />
                            </button>
                            <input
                                type="text"
                                value={count}
                                onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }}
                                onChange={(e) => setCount(Number(e.target.value))}
                                title="orderNumber"
                                className="border-t outline-none text-center px-2 h-[3rem] border-b w-14"
                            />
                            <button onClick={handleIncrement} title="Plus" className="px-2 rounded-r border h-[3rem] outline-none">
                                <HiOutlinePlusSmall />
                            </button>
                            <button type="button" className="inline-flex ml-3 items-center justify-center rounded border-2 border-transparent bg-gray-900 bg-none px-12 h-[3rem] text-center text-base font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800">
                                <svg xmlns="http://www.w3.org/2000/svg" className="shrink-0 mr-3 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                                Add to cart
                            </button>
                        </div>
                        <ul className="mt-4 ml-5 space-y-2">
                            <li>
                                <button className="flex items-center space-x-2 text-left text-sm font-medium text-gray-600">
                                    <MdFavoriteBorder size={22} />
                                    Add to wishlist
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="lg:col-span-full">
                        <TabGroup>
                            <div className="border-b border-gray-300">
                                <TabList>
                                    <nav className="flex justify-center gap-4 w-full">
                                        <Tab as={Fragment}>
                                            {({ selected }) => (
                                                <button className={cn("border-gray-900 relative group w-max outline-none py-4 text-2xl font-bold text-gray-900 hover:text-gray-800", selected && 'border-b-2')}>
                                                    Description
                                                    <span className={cn("absolute bottom-0 left-1/2 w-0 transition-all h-[2px] bg-gray-900 group-hover:w-3/6", selected && "group-hover:w-0")}></span>
                                                    <span className={cn("absolute bottom-0 right-1/2 w-0 transition-all h-[2px] bg-gray-900 group-hover:w-3/6", selected && "group-hover:w-0")}></span>
                                                </button>
                                            )}
                                        </Tab>
                                        <Tab as={Fragment}>
                                            {({ selected }) => (
                                                <button className={cn("border-gray-900 relative group w-max outline-none py-4 text-2xl font-bold text-gray-900 hover:text-gray-800", selected && 'border-b-2')}>
                                                    Shipping & Returns
                                                    <span className={cn("absolute bottom-0 left-1/2 w-0 transition-all h-[2px] bg-gray-900 group-hover:w-3/6", selected && "group-hover:w-0")}></span>
                                                    <span className={cn("absolute bottom-0 right-1/2 w-0 transition-all h-[2px] bg-gray-900 group-hover:w-3/6", selected && "group-hover:w-0")}></span>
                                                </button>
                                            )}
                                        </Tab>
                                    </nav>
                                </TabList>
                            </div>
                            <TabPanels>
                                <TabPanel>
                                    <div className="mt-8 flow-root sm:mt-12">
                                        <h1 className="text-3xl font-bold">Delivered To Your Door</h1>
                                        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusantium nesciunt fuga.</p>
                                        <h1 className="mt-8 text-3xl font-bold">From the Fine Farms of Brazil</h1>
                                        <p className="mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam enim facere.</p>
                                        <p className="mt-4">Amet consectetur adipisicing elit. Optio numquam enim facere. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore rerum nostrum eius facere, ad neque.</p>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="mt-8 flow-root sm:mt-12">
                                        <h1 className="text-xl font-bold">Free Shipping</h1>
                                        <p>We deliver to over 100 countries around the world. For full details of the delivery options we offer, please view our Delivery information We hope you’ll love every purchase, but if you ever need to return an item you can do so within a month of receipt. For full details of how to make a return, please view our Returns information</p>
                                    </div>
                                </TabPanel>
                            </TabPanels>
                        </TabGroup>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default DetailProduct
