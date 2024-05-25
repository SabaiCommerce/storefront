'use client';

import { useEffect, useState, useRef } from 'react';

const SmallBanner = () => {
    const ref = useRef<HTMLDivElement | null>(null);
    const [isIntersecting, setIntersecting] = useState<boolean>(false);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIntersecting(entry.isIntersecting);
        });
        observer.observe(ref?.current!);
        return () => {
            observer.disconnect();
        };
    }, [ref]);
    return (
        <section className="mt-[81px] scroll-smooth">
            <div className={`w-full relative h-72 md:h-56 rounded bg-gray-500`}>
                <div className="absolute flex flex-col md:flex-row justify-start md:justify-center md:items-center leading-5 text-white top-1/2 transform -translate-y-1/2 left-3 md:left-[58px] md:space-x-10">
                    <div>
                        <h4 className="uppercase text-[26px] leading-[1em] tracking-[-.65px] underline underline-offset-8 decoration-[#A6A9AB] decoration-[1.5px]">
                            END OF SEASON
                        </h4>
                        <h2 className="uppercase font-bold text-[66px] md:text-[76px] mt-3 leading-[76px] tracking-[3.8px]">
                            sale
                        </h2>
                    </div>
                    <div
                        ref={ref}
                        className={`rounded-full transition-opacity ease-in duration-700 ${isIntersecting ? 'opacity-100 animate-jump-in' : 'opacity-0 animate-none'} scale-[0.8] border-[3.5px] border-[#A6A9AB] w-40 h-40 flex flex-col items-center justify-center`}
                    >
                        <h5 className="text-lg font-medium text-center -rotate-[14deg]">
                            AT UP TO <br />{' '}
                            <span className="text-3xl text-color-primary font-bold">
                                50%
                            </span>{' '}
                            OFF
                        </h5>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SmallBanner;
