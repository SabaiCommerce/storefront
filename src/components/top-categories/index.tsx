import Image from 'next/image';
import { Button } from '../ui/button';
import { IoIosArrowRoundForward } from 'react-icons/io';

const TopCategories = () => {
    return (
        <section className="mt-[81px]">
            <h2 className="text-center text-[24px] font-bold tracking-[-0.6px]">
                Top Categories
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 min-h-[580px] mt-[30px]">
                <div className="relative animate-pulse animate-once h-[450px] sm:h-[580px] lg:h-full w-full">
                    <Image
                        src="/assets/images/home/top-categories/1-2.jpg"
                        alt="side-demo"
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        priority={false}
                        className="object-cover size-full"
                    />
                    <div className="absolute left-1/2 transform -translate-x-1/2 top-[30px]">
                        <h2 className="text-[24px] font-semibold uppercase leading-[1.5em]">
                            PADDED CLOTHES
                        </h2>
                        <h3 className="text-center text-[#0009] text-[24px] capitalize leading-[1em] tracking-[-.8px]">
                            Collection
                        </h3>
                    </div>
                    <div className="absolute flex items-center space-x-3.5 left-1/2 transform -translate-x-1/2 bottom-[30px]">
                        <Button className="capitalize px-10 py-[1.6rem] text-[14px] font-semibold">
                            Women&apos;s
                        </Button>
                        <Button className="capitalize px-10 py-[1.6rem] text-[14px] font-semibold">
                            Men&apos;s
                        </Button>
                    </div>
                </div>
                <div className="flex transition-all duration-500 ease flex-col space-y-5 sm:space-y-0 sm:flex-row sm:space-x-5 lg:space-x-0 lg:flex-col lg:space-y-5 size-full">
                    <div className="relative animate-pulse animate-once h-[200px] sm:h-[250px] lg:h-full w-full group transition-all duration-500 ease">
                        <Image
                            src="/assets/images/home/top-categories/2-2.jpg"
                            alt="side-demo"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={false}
                            className="object-cover size-full"
                        />
                        <div className="absolute flex items-center space-x-3.5 left-1/2 transform -translate-x-1/2 bottom-[30px]">
                            <Button className="capitalize px-7 py-[1.6rem] text-[14px] font-semibold hover:text-white transition-all duration-500 ease relative overflow-hidden group-hover:pr-14">
                                <span>Women&apos;s T-Shirt</span>{' '}
                                <IoIosArrowRoundForward
                                    className="absolute -right-2 top-1/2 -translate-y-1/2 transform-cpu opacity-0 invisible group-hover:opacity-100 group-hover:visible -translate-x-10 group-hover:-translate-x-7"
                                    size={32}
                                />
                            </Button>
                        </div>
                    </div>
                    <div className="relative animate-pulse animate-once h-[200px] sm:h-[250px] lg:h-full w-full group transition-all duration-500 ease">
                        <Image
                            src="/assets/images/home/top-categories/3.jpg"
                            alt="side-demo"
                            fill
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            priority={false}
                            className="object-cover size-full"
                        />
                        <div className="absolute flex items-center space-x-3.5 left-1/2 transform -translate-x-1/2 bottom-[30px]">
                            <Button className="capitalize px-7 py-[1.6rem] text-[14px] font-semibold hover:text-white transition-all duration-500 ease relative overflow-hidden group-hover:pr-14">
                                <span>Sports & Outdoors</span>{' '}
                                <IoIosArrowRoundForward
                                    className="absolute -right-2 top-1/2 -translate-y-1/2 transform-cpu opacity-0 invisible group-hover:opacity-100 group-hover:visible -translate-x-10 group-hover:-translate-x-7"
                                    size={32}
                                />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TopCategories;
