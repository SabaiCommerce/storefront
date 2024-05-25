'use client';

import ItemList from './ItemList';
import { CiHome } from 'react-icons/ci';
import { CiShoppingCart } from 'react-icons/ci';
import { cn } from '@/lib/utils';
import useScrollDirection from '@/hooks/useScrollDirection';

const FooterNavbar = () => {
    const scrolling = useScrollDirection();
    return (
        <nav
            className={cn(
                'fixed md:hidden block z-[9999] transition-all duration-500 transform left-0 -bottom-24 right-0 bg-white shadow-t-xl',
                scrolling && 'bottom-0'
            )}
        >
            <div className="flex px-8 space-x-10 py-2.5 items-center justify-center">
                <ItemList title="Home" icon={CiHome} />
                <ItemList title="Cart" icon={CiShoppingCart} />
            </div>
        </nav>
    );
};

export default FooterNavbar;
