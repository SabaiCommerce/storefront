'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { HiOutlineShoppingBag } from 'react-icons/hi2';
import { GrFavorite } from 'react-icons/gr';

interface Props {
    img1: string;
    img2: string;
    gender: string;
    title: string;
    price: number;
    dis?: number;
}

const CardProduct = ({ img1, img2, gender, title, price, dis }: Props) => {
    const [isHovering, setIsHovering] = useState(false);
    const handleMouseOver = () => {
        setIsHovering(true);
        setTimeout(() => {
            setIsHovering(false);
        }, 150);
    };
    const handleMouseOut = () => {
        setIsHovering(false);
    };
    return (
        <figure className="max-w-lg animate-pulse animate-once">
            <Link href="/product/1">
                <div className="relative group transition-all ease-in-out duration-300">
                    <div
                        className={cn(
                            'uppercase z-30 absolute top-[20px] left-[20px] text-white font-semibold text-center text-[13px] px-2.5 rounded-[2.5px]',
                            dis ? 'bg-red-500' : 'bg-black'
                        )}
                    >
                        {dis ? '39% OFF' : 'top'}
                    </div>
                    <div className="flex flex-col space-y-2 absolute top-[15px] right-[20px]">
                        <div className="z-30 opacity-0 invisible hover:text-white hover:bg-color-raisin-black flex-col group-hover:visible group-hover:opacity-100 flex transition-all ease-in-out duration-300 justify-center items-center bg-white text-center w-9 h-9 rounded-full">
                            <HiOutlineShoppingBag size={20} />
                        </div>
                        <div className="z-30 opacity-0 invisible hover:text-white hover:bg-color-raisin-black flex-col group-hover:visible group-hover:opacity-100 flex transition-all ease-in-out duration-300 justify-center items-center bg-white text-center w-9 h-9 rounded-full">
                            <GrFavorite size={20} />
                        </div>
                    </div>
                    <Image
                        className="h-auto max-w-full transition-all ease-in-out duration-300"
                        src={img1}
                        width={500}
                        height={500}
                        alt="demo"
                        priority
                    />
                    <div
                        onMouseOver={handleMouseOver}
                        onMouseOut={handleMouseOut}
                        className={cn(
                            'absolute size-full inset-0 z-10 transition-all ease-in-out duration-300',
                            isHovering &&
                                'hidden group-hover:block bg-white/50 blur-sm backdrop-blur-sm'
                        )}
                    >
                        <div className="absolute size-full inset-0 z-20 hidden group-hover:block transition-all ease-in-out duration-300">
                            <Image
                                className="h-auto max-w-full transition-all ease-in-out duration-300 absolute z-50 inset-0 size-full"
                                src={img2}
                                width={500}
                                height={500}
                                alt="demo"
                            />
                        </div>
                    </div>
                </div>
            </Link>
            <figcaption>
                <div className="text-[10px] uppercase text-color-lemon-grass mt-[12px]">
                    {gender}
                </div>
                <h3 className="text-[14px] text-color-secondary leading-[19.6px] mt-[4px] mb-[7px]">
                    <Link href="/product/1">{title}</Link>
                </h3>
                <div className="flex items-center text-[16px] font-semibold space-x-3">
                    <bdi>${price}.00</bdi>
                    {dis && (
                        <bdi>
                            <del className="text-color-silver-chalice">
                                $160.00
                            </del>
                        </bdi>
                    )}
                </div>
            </figcaption>
        </figure>
    );
};

export default CardProduct;
