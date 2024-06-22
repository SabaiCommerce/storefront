'use client';

import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectFade, Pagination } from 'swiper/modules';
import { useEffect, useState } from 'react';
import { useTransition } from 'react-transition-state';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';
import { useRouter } from 'next/navigation';

const Slider = () => {
    const router = useRouter();
    const [mounted, setMounted] = useState(false);
    const [{ isMounted }, toggle] = useTransition({
        timeout: 500,
        mountOnEnter: true,
        unmountOnExit: true,
        preEnter: true
    });
    useEffect(() => {
        if (!isMounted) {
            setTimeout(() => {
                setMounted(false);
            }, 500);
        }
        if (isMounted) {
            setTimeout(() => {
                toggle(false);
            }, 500);
        }
    }, [isMounted, toggle]);
    return (
        <section className="min-h-[550px]">
            <Swiper
                spaceBetween={30}
                slidesPerView={1}
                effect="fade"
                grabCursor={true}
                pagination={{
                    clickable: true
                }}
                modules={[EffectFade, Pagination]}
                className="mySwiper"
                onSlideChange={() => {
                    toggle();
                    setMounted(true);
                }}
            >
                <SwiperSlide>
                    <div className="w-full relative h-[530px] md:h-[520px] lg:h-[550px] rounded">
                        <Image
                            src="/assets/images/home/ss.jpg"
                            alt="side-demo"
                            fill
                            priority
                            className="object-cover size-full rounded"
                        />
                        <div className="absolute transform-cpu -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10 text-white">
                            {!isMounted && (
                                <>
                                    <h2 className="uppercase animate-fade-right text-[35px] md:text-[70px] font-semibold leading-[30px] text-white">
                                        Men’s wear
                                    </h2>
                                    <h2 className="uppercase animate-fade-right text-[44px] md:text-[80px] font-bold leading-[48.4px] md:leading-[88px] tracking-normal md:tracking-[16px] text-white">
                                        T-Shirt
                                    </h2>
                                    <h4 className="text-[24px] animate-fade-up text-right md:mr-[16px] md:text-[30px] leading-[30px]">
                                        Start at{' '}
                                        <strong className="text-color-primary">
                                            $10.00
                                        </strong>
                                    </h4>
                                </>
                            )}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full relative h-[530px] md:h-[520px] lg:h-[550px] rounded">
                        <Image
                            src="/assets/images/home/hello.webp"
                            alt="side-demo"
                            fill
                            priority
                            className="object-cover size-full rounded"
                        />
                        <div className="absolute transform-cpu -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 z-10 text-white">
                            {!isMounted && (
                                <>
                                    <h3 className="uppercase animate-fade-right text-[24px] md:text-[30px] font-semibold leading-[30px]">
                                        Men’s wear
                                    </h3>
                                    <h2 className="uppercase animate-fade-right text-[44px] md:text-[80px] font-bold leading-[48.4px] md:leading-[88px] tracking-normal md:tracking-[16px]">
                                        COLLECTION
                                    </h2>
                                    <h4 className="text-[24px] animate-fade-up text-right md:mr-[16px] md:text-[30px] leading-[30px]">
                                        Start at{' '}
                                        <strong className="text-color-primary">
                                            $19.99
                                        </strong>
                                    </h4>
                                </>
                            )}
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="w-full relative h-[530px] md:h-[520px] lg:h-[550px] rounded">
                        <Image
                            src="/assets/images/home/2.jpg"
                            alt="side-demo"
                            fill
                            priority={false}
                            className="object-cover size-full rounded"
                        />
                        <div className="absolute top-32 left-3 md:left-24 z-10 text-white">
                            {!isMounted && (
                                <>
                                    <h3 className="text-[24px] animate-fade-down md:text-[30px] font-normal text-[#FFF9] tracking-[-.75px] leading-[30px]">
                                        Summer collection
                                    </h3>
                                    <h2
                                        className={cn(
                                            'uppercase text-[44px] md:text-[5S0px] font-bold leading-[48.4px] md:leading-[50px] tracking-normal md:tracking-[-2.5px] animate-jump-in animate-delay-300 animate-once',
                                            !isMounted && mounted && 'blur-md'
                                        )}
                                    >
                                        FOR WOMEN
                                    </h2>
                                    <h4 className="text-[24px] md:text-[30px] leading-[30px] mt-[17px] animate-fade-down">
                                        SALE UP TO{' '}
                                        <strong className="text-color-primary">
                                            10% OFF
                                        </strong>
                                    </h4>
                                    <p className="text-[#FFF9] text-[11.2px] md:text-[14px] tracking-[-.14px] animate-fade-up">
                                        Get Free Shipping on all orders over
                                        $15.00
                                    </p>
                                    <Button
                                        onClick={() =>
                                            router.push('/product/1')
                                        }
                                        className="px-[2.8em] py-[1.8rem]"
                                    >
                                        shop now
                                    </Button>
                                </>
                            )}
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Slider;
