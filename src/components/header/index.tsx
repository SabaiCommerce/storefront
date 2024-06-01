import { MdKeyboardArrowDown } from 'react-icons/md';
import { CiLocationOn, CiUser } from 'react-icons/ci';
import { PiWarningCircleLight } from 'react-icons/pi';
import Dropdown from '../ui/dropdown';
import SubHeader from './SubHeader';

const Header = () => {
    return (
        <header>
            <div className="py-[10px] border-b">
                <div className="main-container flex items-center justify-between">
                    <div className="overflow-x-hidden flex-grow">
                        <div className="animate-marquee2 sm:animate-none whitespace-nowrap">
                            <p className="text-[12px] text-color-secondary">
                                &nbsp;
                            </p>
                        </div>
                    </div>
                    <ul className="flex flex-row items-center md:space-x-4">
                        <li className="header-menu group mr-4 md:mr-0">
                            <button className="header-menu-btn">
                                <span>USD</span>{' '}
                                <MdKeyboardArrowDown size={18} />
                            </button>
                            <Dropdown>
                                <li className="text-left cursor-pointer">
                                    USD
                                </li>
                                <li className="text-left cursor-pointer">KH</li>
                            </Dropdown>
                        </li>
                        <li className="header-menu group">
                            <button className="header-menu-btn">
                                <span>ENG</span>{' '}
                                <MdKeyboardArrowDown size={18} />
                            </button>
                            <Dropdown>
                                <li className="text-left cursor-pointer">
                                    ENG
                                </li>
                                <li className="text-left cursor-pointer">KH</li>
                            </Dropdown>
                        </li>
                        <li className="header-menu">
                            <div className="live-vertical" />
                        </li>
                        <li className="header-menu hidden lg:inline">
                            <button className="header-menu-btn-space">
                                <CiLocationOn size={20} /> <span>Contact</span>
                            </button>
                        </li>
                        <li className="header-menu hidden lg:inline">
                            <button className="header-menu-btn-space">
                                <PiWarningCircleLight size={20} />{' '}
                                <span>Need Help</span>
                            </button>
                        </li>
                        <li className="header-menu hidden md:block">
                            <div className="header-menu-btn-space">
                                <CiUser size={20} />
                                <button>Sign in</button>{' '}
                                <span className="mx-1">/</span>
                                <button>Register</button>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <SubHeader />
        </header>
    );
};

export default Header;
