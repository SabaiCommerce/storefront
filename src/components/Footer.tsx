import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer>
            <div className="w-full py-6 bg-color-raisin-black text-white">
                <div className="main-container">
                    <div className="flex md:flex-row flex-col space-y-5 md:space-y-0 items-center justify-between">
                        <Link href="/">
                            <Image
                                priority
                                src="/assets/images/footer-logo.png"
                                className="w-[153px] h-[44px]"
                                alt="logo"
                                width={500}
                                height={500}
                            />
                        </Link>
                        <p className="text-color-secondary text-[14px]">
                            Riode eCommerce © 2024. All Rights Reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
