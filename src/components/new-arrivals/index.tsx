import CardArrival from './CardArrival';

const Feature = () => {
    return (
        <section className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-[20px] animate-fade-up">
            <CardArrival
                img="/assets/images/home/1-1.jpg"
                title="New Arrivals"
                subtitle="Women's Sale"
                text="Shop Now"
            />
            <CardArrival
                img="/assets/images/home/2-1.jpg"
                title="Trending"
                subtitle="New Sneaker"
                text="Shop Now"
            />
        </section>
    );
};

export default Feature;
