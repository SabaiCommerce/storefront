import GeneralSelling from '@/components/general-selling';
import data from '@/components/general-selling/mockup-data.json';
import { Metadata } from 'next';
import DetailProduct from './_components/DetailProduct';

export const metadata: Metadata = {
    title: 'Product'
};

export default function ProductPage({ params }: { params: { id: string } }) {
    return (
        <div className="flex flex-col mt-2.5">
            <DetailProduct />
            <div className="mb-10">
                <GeneralSelling
                    headerTitle="Related Products"
                    data={data.data}
                />
            </div>
        </div>
    );
}
