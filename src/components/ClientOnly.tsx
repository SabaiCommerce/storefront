'use client';

import dynamic from 'next/dynamic';
import React from 'react';
import MobileNavbar from './header/navbar/MobileNavbar';
import Header from './header';
import Wrapper from './Wrapper';
import Navbar from './header/navbar';
import Footer from './Footer';
import FooterNavbar from './header/navbar/FooterNavbar';
import BackToTop from './BackToTop';
const UseMediaQueryNoSSR = dynamic(() => import('@/hooks/useMediaQueryNoSSR'), {
    ssr: false
});

interface Props {
    children: React.ReactNode;
}

const ClientOnly = ({ children }: Props) => {
    return (
        <Wrapper>
            <MobileNavbar />
            <div className="w-full">
                <Header />
                <Navbar />
                <main className="main-container">{children}</main>
                <Footer />
                <FooterNavbar />
                <BackToTop />
                <UseMediaQueryNoSSR />
            </div>
        </Wrapper>
    );
};

export default ClientOnly;
