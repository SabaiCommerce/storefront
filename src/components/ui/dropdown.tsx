import { cn } from '@/lib/utils';
import React from 'react';

interface Props {
    children: React.ReactNode;
    className?: string;
}
const Dropdown = ({ children, className }: Props) => {
    return (
        <ul
            className={cn(
                'absolute top-[80%] invisible opacity-0 group-hover:visible group-hover:opacity-100 group-hover:top-full transition-all duration-150 ease-in-out bg-white w-auto py-2 px-2 flex flex-col space-y-2 shadow-sm drop-shadow-sm right-1.5',
                className
            )}
        >
            {children}
        </ul>
    );
};

export default Dropdown;
