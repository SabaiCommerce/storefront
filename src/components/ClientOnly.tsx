'use client';

import React, { useEffect } from 'react';
import MobileNavbar from './header/navbar/MobileNavbar';
import Header from './header';
import Wrapper from './Wrapper';
import Navbar from './header/navbar';
import { useMediaQuery } from '@uidotdev/usehooks';
import useNavbar from '@/hooks/useNavbar';
import Footer from './Footer';
import FooterNavbar from './header/navbar/FooterNavbar';
import BackToTop from './BackToTop';

interface Props {
    children: React.ReactNode;
}

const ClientOnly = ({ children }: Props) => {
    const [isOpen, onClose] = useNavbar((set) => [set.isOpen, set.onClose]);
    // const isMediumDevice = useMediaQuery(
    //     "(min-width: 1024px)"
    // );
    // useEffect(() => {
    //     if (isMediumDevice && isOpen) {
    //         onClose()
    //     }
    // }, [isMediumDevice, isOpen, onClose])
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
            </div>
        </Wrapper>
    );
};

export default ClientOnly;
