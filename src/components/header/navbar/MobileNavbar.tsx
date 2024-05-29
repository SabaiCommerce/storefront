'use client';

import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { AiOutlineClose } from 'react-icons/ai';
import useNavbar from '@/hooks/useNavbar';
import React, { useEffect } from 'react';
import { Transition } from '@headlessui/react';

const MobileNavbar = () => {
    const [isOpen, onClose] = useNavbar((set) => [set.isOpen, set.onClose]);

    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('overflow-y-hidden');
        }
        return () => document.body.classList.remove('overflow-y-hidden');
    }, [isOpen]);

    return (
        <Transition
            appear
            show={isOpen}
            enter="transition-opacity duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as="aside"
        >
            <div className="fixed inset-0 z-10 w-screen overflow-y-hidden bg-black/80">
                <AiOutlineClose
                    onClick={onClose}
                    size={35}
                    className="absolute top-6 cursor-pointer right-5 text-white"
                />
            </div>
            <div className="flex min-h-full relative z-20">
                <Transition
                    show={isOpen}
                    enter="transform transition ease-in-out duration-300"
                    enterFrom="-translate-x-full"
                    enterTo="translate-x-0"
                    leave="transform transition ease-in-out duration-300"
                    leaveFrom="translate-x-0"
                    leaveTo="-translate-x-full"
                    as="div"
                >
                    <div className="p-5 min-w-80 mt-24 bg-color-dark-gunmetal-100 h-full transition-all ease-in-out scale-105 duration-500">
                        <div className="w-full mt-5 mb-3 relative box-border overflow-hidden">
                            <input
                                type="text"
                                className="bg-color-dark-gunmetal-200 border border-color-gunmetal text-white pr-[3rem] placeholder:text-[11px] text-[11px] focus:placeholder:opacity-0 placeholder:duration-150 placeholder:ease-in focus:outline-none block w-full p-2.5"
                                placeholder="Search your keywords..."
                            />
                            <button
                                title="btn-search"
                                className="bg-color-raisin-black flex items-center absolute h-full px-2.5 top-1/2 transform -translate-y-1/2 right-0"
                            >
                                <CiSearch className="text-white" size={22} />
                            </button>
                        </div>
                        <ul className="px-3">
                            <li className="text-white text-xs flex font-semibold border-b border-color-gunmetal uppercase">
                                <Link href="/" className="size-full py-3.5">
                                    Home
                                </Link>
                            </li>
                            <li className="text-white text-xs flex font-semibold border-b border-color-gunmetal uppercase">
                                <Link href="/" className="size-full py-3.5">
                                    Product
                                </Link>
                            </li>
                        </ul>
                    </div>
                </Transition>
            </div>
        </Transition>
    );
};

export default MobileNavbar;
