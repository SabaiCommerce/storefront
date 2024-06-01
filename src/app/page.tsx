import GeneralSelling from '@/components/general-selling';
import Feature from '@/components/new-arrivals';
import Slider from '@/components/Slider';
import TopCategories from '@/components/top-categories';
import data from '../components/general-selling/mockup-data.json';
import SmallBanner from '@/components/banners/SmallBanner';
import DeliveryInfo from '@/components/delivery-info';

export default function Home() {
    return (
        <div className="flex flex-col mt-2.5">
            <Slider />
            <Feature />
            <GeneralSelling headerTitle="Best Selling" data={data.data} />
            <TopCategories />
            <SmallBanner />
            <GeneralSelling headerTitle="Our Featured" data={data.data} />
            {/* <DeliveryInfo /> */}
        </div>
    );
}
