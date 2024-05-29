import Image from 'next/image';
import Link from 'next/link';
import { IoIosArrowRoundForward } from 'react-icons/io';

interface Props {
    img: string;
    title: string;
    subtitle: string;
    text: string;
}

const CardArrival = ({ img, title, subtitle, text }: Props) => {
    return (
        <div className="w-full group/box overflow-hidden h-[200px] sm:h-[270px] md:h-[200px] lg:h-[249px] relative rounded">
            <Image
                src={img}
                alt="side-demo"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority={false}
                className="object-cover object-center size-full rounded transition-all duration-300 group-hover/box:scale-110"
            />
            <div className="absolute top-[45px] w-max sm:top-[85px] md:top-[50px] lg:top-[77px] xl:top-[87px] text-white right-6 lg:right-5 xl:right-10">
                <h4 className="uppercase text-[18px]">{title}</h4>
                <h3 className="font-bold text-[23px] lg:text-[30px] leading-[0.95em]">
                    {subtitle}
                </h3>
                <div className="mt-[18px] w-max">
                    <Link
                        href="/product/1"
                        className="uppercase group relative leading-[2.14em] font-semibold"
                    >
                        <div className="flex items-center space-x-2">
                            <span>{text}</span>
                            <IoIosArrowRoundForward size={32} />
                        </div>
                        <span className="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
                        <span className="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-white group-hover:w-3/6"></span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default CardArrival;
