'use client';

import React, { useEffect, useState } from 'react';
import { IoIosArrowRoundUp } from 'react-icons/io';

const BackToTop = () => {
    const [visible, setVisible] = useState(false);
    const [scroll, setScroll] = useState(0);
    const isBrowser = () => typeof window !== 'undefined'; //The approach recommended by Next.js

    function scrollToTop() {
        if (!isBrowser()) return;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400) {
                setVisible(true);
            } else {
                setVisible(false);
            }
        });
    }, []);

    return (
        <button
            onClick={scrollToTop}
            title="backToTop"
            className={`fixed hidden shadow-sm drop-shadow-md bg-white bottom-[25px] ${visible ? 'md:inline' : 'hidden'} rounded right-[25px] z-[9999] w-[44px] h-[44px] transition-all duration-500`}
        >
            <IoIosArrowRoundUp
                className="absolute mx-auto text-black transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                size={32}
            />
        </button>
    );
};

export default BackToTop;
