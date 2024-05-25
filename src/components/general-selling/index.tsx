import CardProduct from './CardProduct';

interface DataProps {
    img1: string;
    img2: string;
    gender: string;
    title: string;
    price: number;
    dis?: number;
}

interface Props {
    headerTitle: string;
    data: DataProps[];
}

const GeneralSelling = ({ headerTitle, data }: Props) => {
    return (
        <section className="mt-[81px]">
            <h2 className="text-center text-[24px] font-bold tracking-[-0.6px]">
                {headerTitle}
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-[25px]">
                {data.map((item, index) => (
                    <CardProduct
                        key={`product-${index}`}
                        img1={item.img1}
                        img2={item.img2}
                        gender={item.gender}
                        title={item.title}
                        price={item.price}
                        dis={item.dis}
                    />
                ))}
            </div>
        </section>
    );
};

export default GeneralSelling;
