import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="main-container hidden lg:block">
            <ul className="flex items-center space-x-7">
                <li className="menu">
                    <Link href="/" className="size-full py-3.5">
                        Home
                    </Link>
                </li>
                <li className="menu">
                    <Link href="/" className="size-full py-3.5">
                        Product
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
