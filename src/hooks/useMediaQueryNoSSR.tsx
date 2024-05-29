'use client';

import { useMediaQuery } from '@uidotdev/usehooks';
import { useEffect } from 'react';
import useNavbar from '@/hooks/useNavbar';

const UseMediaQueryNoSSR = () => {
    const [isOpen, onClose] = useNavbar((set) => [set.isOpen, set.onClose]);
    const isMediumDevice = useMediaQuery('(min-width: 1024px)');
    useEffect(() => {
        if (isMediumDevice && isOpen) {
            onClose();
        }
    }, [isMediumDevice, isOpen, onClose]);
    return '';
};

export default UseMediaQueryNoSSR;
