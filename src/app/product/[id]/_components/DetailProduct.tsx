'use client';

import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';
import 'react-inner-image-zoom/lib/InnerImageZoom/styles.css';
import Image from 'next/image';
import {
    Tab,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
    Dialog,
    Transition
} from '@headlessui/react';
import { cn } from '@/lib/utils';
import { Fragment, useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import {
    HiOutlinePlusSmall,
    HiOutlineHome,
    HiOutlineMinusSmall
} from 'react-icons/hi2';
import {
    MdFavoriteBorder,
    MdKeyboardArrowRight,
    MdZoomOutMap,
    MdOutlineArrowBackIos,
    MdOutlineArrowForwardIos
} from 'react-icons/md';
import Zoom from './Zoom';
import { FreeMode, Navigation, Thumbs, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Swiper as SwiperType } from 'swiper';
import { IoMdClose } from 'react-icons/io';
import InnerImageZoom from 'react-inner-image-zoom';

const images = [
    '/assets/images/product-detail/p1.jpg',
    '/assets/images/product-detail/p2.jpg',
    '/assets/images/product-detail/p3.jpg',
    '/assets/images/product-detail/p4.jpg'
];

const DetailProduct = () => {
    const [loadSlide, setLoadSlide] = useState(false);
    const [currentSlide, setCurrentSlide] = useState<number>(0);
    const [isOpen, setIsOpen] = useState(false);
    const dis = undefined;
    const [thumbsSwiper, setThumbsSwiper] = useState<
        string | SwiperType | undefined | null
    >(null);
    const [mounted, setMounted] = useState<boolean>(false);
    const [count, setCount] = useState<number>(1);
    const handleIncrement = () => setCount((prev) => prev + 1);
    const handleDecrement = () => {
        if (count === 1) return;
        setCount((prev) => prev - 1);
    };
    const closeModal = () => setIsOpen(false);
    const openModal = () => setIsOpen(true);
    const sliderRef = useRef<any>(null);
    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        setLoadSlide(false);
        sliderRef.current?.swiper.slidePrev();
    }, []);
    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        setLoadSlide(false);
        sliderRef.current?.swiper.slideNext();
    }, []);
    useEffect(() => {
        setMounted(true);
    }, []);
    return (
        <>
            <section className="py-4">
                <div className="container max-w-7xl mx-auto">
                    <div className="md:col-gap-12 md:col-gap-16 grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-5">
                        <div className="md:col-span-2 md:row-end-1">
                            <div className="lg:flex lg:items-start">
                                <div className="lg:order-2 w-full lg:ml-2">
                                    <div className="min-w-full max-w-sm overflow-hidden rounded relative group">
                                        <Swiper
                                            thumbs={{ swiper: thumbsSwiper }}
                                            direction="horizontal"
                                            spaceBetween={10}
                                            navigation={true}
                                            modules={[
                                                FreeMode,
                                                Navigation,
                                                Thumbs
                                            ]}
                                            className="swiper-container2"
                                            autoplay={{
                                                delay: 2500,
                                                disableOnInteraction: false
                                            }}
                                            onSlideChange={(swiper) => {
                                                setCurrentSlide(
                                                    swiper.realIndex
                                                );
                                            }}
                                        >
                                            {images.map((img, index) => (
                                                <SwiperSlide
                                                    key={`thumbs-${index}`}
                                                >
                                                    <Zoom
                                                        height={550}
                                                        width={800}
                                                        zoomScale={3}
                                                        src={img}
                                                        className="h-full w-full aspect-square max-w-full sm:min-h-[700px] md:min-h-[500px]"
                                                    />
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                        <div
                                            className={cn(
                                                'uppercase z-30 absolute top-[20px] left-[20px] text-white font-semibold text-center text-[13px] px-2.5 rounded-[2.5px]',
                                                dis ? 'bg-red-500' : 'bg-black'
                                            )}
                                        >
                                            {dis ? '39% OFF' : 'top'}
                                        </div>
                                        <MdZoomOutMap
                                            size={30}
                                            className="z-30 hidden group-hover:block transition-all duration-200 ease-in-out absolute bottom-4 right-4 text-color-silver-chalice hover:text-color-dark-gunmetal-100 cursor-pointer"
                                            onClick={() => {
                                                openModal();
                                                setLoadSlide(true);
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="w-full lg:order-1 lg:w-28 lg:flex-shrink-0 h-full mt-2 lg:mt-0">
                                    {mounted && (
                                        <Swiper
                                            onSwiper={setThumbsSwiper}
                                            slidesPerView={4}
                                            freeMode={true}
                                            watchSlidesProgress={true}
                                            modules={[
                                                FreeMode,
                                                Navigation,
                                                Thumbs
                                            ]}
                                            onSlideChange={(swiper) => {
                                                setCurrentSlide(
                                                    swiper.realIndex
                                                );
                                            }}
                                            breakpoints={{
                                                320: {
                                                    direction: 'horizontal',
                                                    spaceBetween: 10
                                                },
                                                480: {
                                                    direction: 'horizontal',
                                                    spaceBetween: 10
                                                },
                                                640: {
                                                    direction: 'horizontal',
                                                    spaceBetween: 20
                                                },
                                                768: {
                                                    direction: 'horizontal',
                                                    spaceBetween: 10
                                                },
                                                830: {
                                                    direction: 'horizontal',
                                                    spaceBetween: 10
                                                },
                                                992: {
                                                    direction: 'horizontal',
                                                    spaceBetween: 40
                                                },
                                                1024: {
                                                    direction: 'vertical',
                                                    spaceBetween: 0
                                                },
                                                1200: {
                                                    direction: 'vertical',
                                                    spaceBetween: 0
                                                }
                                            }}
                                            className="c-scrollbar !overflow-x-auto"
                                        >
                                            {images.map((img, index) => (
                                                <SwiperSlide
                                                    key={`small-thumbs-${index}`}
                                                >
                                                    <button
                                                        title="product-01"
                                                        type="button"
                                                        className="flex-0 max-w-full w-full overflow-hidden rounded"
                                                    >
                                                        <Image
                                                            width={500}
                                                            height={500}
                                                            priority
                                                            className="min-h-[132.5px] w-full object-cover rounded"
                                                            src={img}
                                                            alt={img}
                                                        />
                                                    </button>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className="md:col-span-12 md:row-span-2 md:row-end-2">
                            <nav className="flex items-center">
                                <ol role="list" className="flex items-center">
                                    <li className="text-left">
                                        <div className="-m-1">
                                            <Link
                                                href="/"
                                                className="rounded-md  text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                                            >
                                                <HiOutlineHome size={18} />
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="text-left">
                                        <div className="flex items-center">
                                            <span className="mx-2 text-gray-400">
                                                <MdKeyboardArrowRight />
                                            </span>
                                            <div className="-m-1">
                                                <Link
                                                    href="/"
                                                    className="rounded-md text-sm font-medium text-gray-600 focus:text-gray-900 focus:shadow hover:text-gray-800"
                                                >
                                                    Man&apos;s
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ol>
                            </nav>
                            <h1 className="text-2xl font-bold my-5 text-gray-900 sm:text-3xl">
                                Sports Tops
                            </h1>
                            <div className="flex items-end">
                                <h1 className="text-3xl font-bold text-color-primary">
                                    $60.50
                                </h1>
                            </div>
                            <p className="my-5 text-color-secondary text-[14px]">
                                Sed egestas, ante et vulputate volutpat, eros
                                pede semper est, vitae luctus metus libero eu
                                augue. Morbi purus liberpuro ate vol faucibus
                                adipiscing.
                            </p>
                            <div className="flex items-center border-t border-b py-4 flex-row">
                                <button
                                    onClick={handleDecrement}
                                    title="Plus"
                                    className="px-2 rounded-l border h-[3rem]"
                                >
                                    <HiOutlineMinusSmall />
                                </button>
                                <input
                                    type="text"
                                    value={count}
                                    onKeyPress={(event) => {
                                        if (!/[0-9]/.test(event.key)) {
                                            event.preventDefault();
                                        }
                                    }}
                                    onChange={(e) =>
                                        setCount(Number(e.target.value))
                                    }
                                    title="orderNumber"
                                    className="border-t outline-none text-center px-2 h-[3rem] border-b w-14"
                                />
                                <button
                                    onClick={handleIncrement}
                                    title="Plus"
                                    className="px-2 rounded-r border h-[3rem] outline-none"
                                >
                                    <HiOutlinePlusSmall />
                                </button>
                                <button
                                    type="button"
                                    className="inline-flex flex-nowrap ml-2 text-sm max-w-xl lg:text-base items-center justify-center rounded border-2 border-transparent bg-gray-900 bg-none px-5 lg:px-12 h-[3rem] text-center font-bold text-white transition-all duration-200 ease-in-out focus:shadow hover:bg-gray-800"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="shrink-0 mr-3 h-5 w-5"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                                        />
                                    </svg>
                                    Add to cart
                                </button>
                            </div>
                            <ul className="mt-4 ml-5 space-y-2">
                                <li>
                                    <button className="flex items-center space-x-2 text-left text-sm font-medium text-gray-600">
                                        <MdFavoriteBorder size={22} />
                                        Add to wishlist
                                    </button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full">
                        <TabGroup>
                            <div className="border-b border-gray-300">
                                <TabList>
                                    <nav className="flex justify-center gap-4 w-full">
                                        <Tab as={Fragment}>
                                            {({ selected }) => (
                                                <button
                                                    className={cn(
                                                        'border-gray-900 relative group w-max outline-none py-4 text-xl md:text-2xl font-bold text-gray-900 hover:text-gray-800',
                                                        selected && 'border-b-2'
                                                    )}
                                                >
                                                    Description
                                                    <span
                                                        className={cn(
                                                            'absolute bottom-0 left-1/2 w-0 transition-all h-[2px] bg-gray-900 group-hover:w-3/6',
                                                            selected &&
                                                                'group-hover:w-0'
                                                        )}
                                                    ></span>
                                                    <span
                                                        className={cn(
                                                            'absolute bottom-0 right-1/2 w-0 transition-all h-[2px] bg-gray-900 group-hover:w-3/6',
                                                            selected &&
                                                                'group-hover:w-0'
                                                        )}
                                                    ></span>
                                                </button>
                                            )}
                                        </Tab>
                                        <Tab as={Fragment}>
                                            {({ selected }) => (
                                                <button
                                                    className={cn(
                                                        'border-gray-900 relative group w-max outline-none py-4 text-xl md:text-2xl font-bold text-gray-900 hover:text-gray-800',
                                                        selected && 'border-b-2'
                                                    )}
                                                >
                                                    Shipping & Returns
                                                    <span
                                                        className={cn(
                                                            'absolute bottom-0 left-1/2 w-0 transition-all h-[2px] bg-gray-900 group-hover:w-3/6',
                                                            selected &&
                                                                'group-hover:w-0'
                                                        )}
                                                    ></span>
                                                    <span
                                                        className={cn(
                                                            'absolute bottom-0 right-1/2 w-0 transition-all h-[2px] bg-gray-900 group-hover:w-3/6',
                                                            selected &&
                                                                'group-hover:w-0'
                                                        )}
                                                    ></span>
                                                </button>
                                            )}
                                        </Tab>
                                    </nav>
                                </TabList>
                            </div>
                            <TabPanels>
                                <TabPanel>
                                    <div className="mt-8 flow-root sm:mt-12">
                                        <h1 className="text-3xl font-bold">
                                            Delivered To Your Door
                                        </h1>
                                        <p className="mt-4">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Quia
                                            accusantium nesciunt fuga.
                                        </p>
                                        <h1 className="mt-8 text-3xl font-bold">
                                            From the Fine Farms of Brazil
                                        </h1>
                                        <p className="mt-4">
                                            Lorem ipsum dolor sit amet
                                            consectetur adipisicing elit. Optio
                                            numquam enim facere.
                                        </p>
                                        <p className="mt-4">
                                            Amet consectetur adipisicing elit.
                                            Optio numquam enim facere. Lorem
                                            ipsum dolor sit amet consectetur,
                                            adipisicing elit. Dolore rerum
                                            nostrum eius facere, ad neque.
                                        </p>
                                    </div>
                                </TabPanel>
                                <TabPanel>
                                    <div className="mt-8 flow-root sm:mt-12">
                                        <h1 className="text-xl font-bold">
                                            Free Shipping
                                        </h1>
                                        <p>
                                            We deliver to over 100 countries
                                            around the world. For full details
                                            of the delivery options we offer,
                                            please view our Delivery information
                                            We hope you’ll love every purchase,
                                            but if you ever need to return an
                                            item you can do so within a month of
                                            receipt. For full details of how to
                                            make a return, please view our
                                            Returns information
                                        </p>
                                    </div>
                                </TabPanel>
                            </TabPanels>
                        </TabGroup>
                    </div>
                </div>
            </section>
            <Transition appear show={isOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-[9999]"
                    onClose={closeModal}
                >
                    <Transition
                        as="div"
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Transition.Child>
                            <div className="fixed inset-0 overflow-y-auto z-[99999]">
                                <div
                                    onClick={closeModal}
                                    className="fixed inset-0 bg-black/75"
                                />
                                <button
                                    title="arrow-left"
                                    onClick={handlePrev}
                                    className="arrow-left z-[99999] absolute left-12 sm:left-14 lg:left-36 top-1/2 text-color-silver-chalice w-12 h-12 flex items-center justify-center flex-col rounded-full border-2 border-color-silver-chalice hover:text-white hover:border-white transition-all ease-in-out duration-300"
                                >
                                    <MdOutlineArrowBackIos size={24} />
                                </button>
                                <button
                                    title="arrow-right"
                                    onClick={handleNext}
                                    className="arrow-right z-[99999] absolute right-12 sm:right-14 lg:right-36 top-1/2 text-color-silver-chalice w-12 h-12 flex items-center justify-center flex-col rounded-full border-2 border-color-silver-chalice hover:text-white hover:border-white transition-all ease-in-out duration-300"
                                >
                                    <MdOutlineArrowForwardIos size={24} />
                                </button>
                                <Transition
                                    as={Fragment}
                                    enter="ease-out duration-300"
                                    enterFrom="opacity-0 scale-95"
                                    enterTo="opacity-100 scale-100"
                                    leave="ease-in duration-200"
                                    leaveFrom="opacity-100 scale-100"
                                    leaveTo="opacity-0 scale-95"
                                >
                                    <div className="flex flex-col min-h-full text-center">
                                        <div className="bg-black/50 relative w-full flex justify-between items-center py-2.5">
                                            <div className="pl-3 text-color-silver-chalice text-sm">
                                                {loadSlide ? (
                                                    <div className="custom-pagination">
                                                        <span className="current-slide">
                                                            {currentSlide + 1}
                                                        </span>{' '}
                                                        / {images.length}
                                                    </div>
                                                ) : (
                                                    <div className="swiper-custom-pagination" />
                                                )}
                                            </div>
                                            <div className="pr-3">
                                                <IoMdClose
                                                    size={26}
                                                    className="text-color-silver-chalice cursor-pointer"
                                                    onClick={closeModal}
                                                />
                                            </div>
                                        </div>
                                        <div className="max-w-xl sm:mx-auto my-auto sm:my-0 transform overflow-hidden align-middle shadow-xl transition-all">
                                            <Swiper
                                                ref={sliderRef}
                                                direction="horizontal"
                                                modules={[
                                                    Navigation,
                                                    Pagination
                                                ]}
                                                className="swiper-container2"
                                                slidesPerView={1}
                                                spaceBetween={30}
                                                loop={true}
                                                initialSlide={currentSlide}
                                                pagination={{
                                                    clickable: true,
                                                    el: '.swiper-custom-pagination',
                                                    type: 'custom',
                                                    renderCustom: (
                                                        swiper,
                                                        currentSlide
                                                    ) =>
                                                        `
                                                            <div className="swiper-custom-pagination">
                                                                <span className="current-slide">${currentSlide}</span> / ${swiper.slides.length}
                                                            </div>
                                                        `
                                                }}
                                                onSlideChange={(swiper) =>
                                                    setCurrentSlide(
                                                        swiper.activeIndex
                                                    )
                                                }
                                            >
                                                {images.map((img, index) => (
                                                    <SwiperSlide
                                                        key={`thumbs-${index}`}
                                                    >
                                                        <InnerImageZoom
                                                            className="min-h-[500px] max-h-[620px] object-center object-cover"
                                                            src={img}
                                                            zoomSrc={img}
                                                        />
                                                    </SwiperSlide>
                                                ))}
                                            </Swiper>
                                        </div>
                                    </div>
                                </Transition>
                                <div></div>
                            </div>
                        </Transition.Child>
                    </Transition>
                </Dialog>
            </Transition>
        </>
    );
};

export default DetailProduct;
