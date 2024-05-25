'use client';

import { ReactNode } from 'react';

interface Props {
    children: ReactNode;
}
const Wrapper = ({ children }: Props) => {
    return <article className="flex overflow-hidden">{children}</article>;
};

export default Wrapper;
