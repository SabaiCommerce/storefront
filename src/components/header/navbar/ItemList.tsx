import Link from 'next/link';
import { IconType } from 'react-icons';

interface Props {
    title: string;
    icon: IconType;
}

const ItemList = ({ title, icon: Icon }: Props) => {
    return (
        <Link href="/" className="group">
            <div className="flex flex-col space-y-1 items-center justify-center">
                <Icon
                    size={32}
                    className="text-color-raisin-black ease-in-out duration-300 transition-all group-hover:font-medium transform-cpu group-hover:-translate-y-1.5"
                />
                <h2 className="uppercase text-xs font-normal ease-in-out duration-300 transition-all text-color-raisin-black group-hover:font-medium">
                    {title}
                </h2>
            </div>
        </Link>
    );
};

export default ItemList;
