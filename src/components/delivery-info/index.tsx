'use client';

import CardDeliverInfo from './CardDeliverInfo';
import { Swiper, SwiperSlide } from 'swiper/react';

const DeliveryInfo = () => {
    return (
        <section className="mt-[81px] border-t border-b py-8">
            <Swiper
                slidesPerView={1}
                pagination={{
                    clickable: true
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 10
                    }
                }}
                className="mySwiper"
            >
                <SwiperSlide>
                    <CardDeliverInfo
                        title="Free Delivery"
                        paragraph="When You Spend $80 or More"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardDeliverInfo
                        title="Free Delivery"
                        paragraph="When You Spend $80 or More"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardDeliverInfo
                        title="Free Delivery"
                        paragraph="When You Spend $80 or More"
                    />
                </SwiperSlide>
                <SwiperSlide>
                    <CardDeliverInfo
                        title="Free Delivery"
                        paragraph="When You Spend $80 or More"
                    />
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default DeliveryInfo;
