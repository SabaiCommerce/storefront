import CardArrival from './CardArrival';

const Feature = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-[20px] animate-fade-up">
            <CardArrival
                img="/assets/images/home/4cc945_4ffabf3e2aa5469e955eaf5a00bd51ff~mv21.jpg"
                title="Shirt"
                subtitle="Women's Sale"
                text="Shop Now"
            />
            <CardArrival
                img="/assets/images/home/jordan-stay-loyal-2-shoes-sDkgDk.jpg"
                title="Trending"
                subtitle="New Sneaker"
                text="Shop Now"
            />
        </section>
    );
};

export default Feature;
