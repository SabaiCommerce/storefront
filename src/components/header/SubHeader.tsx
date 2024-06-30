'use client';

import Image from 'next/image';
import { IoCallOutline } from 'react-icons/io5';
import { MdFavoriteBorder } from 'react-icons/md';
import { LiaShoppingBagSolid } from 'react-icons/lia';
import { CiSearch } from 'react-icons/ci';
import Link from 'next/link';
import Dropdown from '@/components/ui/dropdown';
import { HiOutlineBars3BottomLeft } from 'react-icons/hi2';
import useNavbar from '@/hooks/useNavbar';
import useScrollDirection from '@/hooks/useScrollDirection';
import { cn } from '@/lib/utils';

const SubHeader = () => {
    const scrolling = useScrollDirection();
    const [onOpen] = useNavbar((set) => [set.onOpen]);
    return (
        <div
            className={cn(
                'w-full z-[9999] transition-all duration-500 transform',
                scrolling &&
                    'fixed left-0 right-0 top-0 bg-white shadow-sm drop-shadow-sm'
            )}
        >
            <div className="main-container py-4">
                <div className="flex justify-between md:justify-normal items-center">
                    <div className="flex items-center space-x-4 lg:space-x-0 lg:flex-row-reverse">
                        <button
                            onClick={onOpen}
                            title="bar"
                            className="lg:hidden"
                        >
                            <HiOutlineBars3BottomLeft size={35} />
                        </button>
                        <Link href="/">
                            <Image
                                priority
                                src="/assets/images/ROLLER.png"
                    
                                className="w-[130px] h-[104px]"
                                alt="logo"
                                width={550}
                                height={550}
                            />
                        </Link>
                    </div>
                    {/* <div className="flex-1 hidden md:inline ml-20 mr-16 relative box-border overflow-hidden">
                        <input
                            type="text"
                            className="bg-gray-50 border-[2.5px] pr-10 border-gray-300 text-gray-900 text-sm rounded-[0.275rem] focus:placeholder:opacity-0 placeholder:duration-150 placeholder:ease-in focus:outline-none block w-full p-2.5"
                            placeholder="Search..."
                        />
                        <CiSearch
                            className="absolute top-1/2 transform -translate-y-1/2 right-3"
                            size={25}
                        />
                    </div> */}
                    <ul className="flex items-center space-x-2 lg:space-x-3">
                        <li className="lg:pr-1.5">
                            <a
                                href="tel:+"
                                className="flex items-right space-x-2"
                            >
                                <IoCallOutline size={35} />
                                <div className="lg:flex hidden flex-col justify-center">
                                    <span className="text-[12px]">
                                        Call Us Now:
                                    </span>
                                    <strong className="text-sm">
                                        (+855) 10 522 822
                                    </strong>
                                </div>
                            </a>
                        </li>
                        <li className="relative hidden lg:inline">
                            <div className="live-vertical" />
                        </li>
                        {/* <li className="cursor-pointer">
                            <MdFavoriteBorder size={35} />
                        </li> */}
                        {/* <li className="relative hidden lg:inline">
                            <div className="live-vertical" />
                        </li> */}
                        {/* <li className="relative group lg:flex hidden flex-col justify-center lg:pl-1.5">
                            <span className="text-[12px]">Shopping Cart:</span>
                            <strong className="text-sm">$0.00</strong>
                            <Dropdown className="left-1/2 transform -translate-x-2/3 w-max px-16 py-5">
                                <p className="text-left text-sm text-color-secondary">
                                    No product in the cart.
                                </p>
                            </Dropdown>
                        </li>
                        <li className="relative cursor-pointer">
                            <LiaShoppingBagSolid size={35} />
                            <div className="absolute inline-flex items-center justify-center w-5 h-5 text-xs font-bold text-white bg-red-500 border-white rounded-full top-0 -end-2">
                                0
                            </div>
                            
                        </li> */}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default SubHeader;
