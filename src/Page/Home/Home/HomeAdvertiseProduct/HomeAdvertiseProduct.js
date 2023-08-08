import React from 'react';
import arekFalgun from '../../../../Assets/HomeAdvertise/arekfalgun.jpg'
import shesherKobita from '../../../../Assets/HomeAdvertise/shesherkobita.jpg'
import SingleHomeAdvertiseProduct from './SingleHomeAdvertiseProduct';
import { useQuery } from '@tanstack/react-query';

const HomeAdvertiseProduct = () => {


    const { data: advertiseProduct = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/books/available')
            const data = await res.json();
            return data;
        }
    })

    return (
        <>
        {advertiseProduct.length > 0 &&
            <div className='py-6'>
                <p className='py-12  font-bold text-center text-3xl text-[#149777]'>Ads</p>
                <div>
                    {
                        advertiseProduct.map(prd => <SingleHomeAdvertiseProduct key={prd.adp_id} prd={prd}></SingleHomeAdvertiseProduct>)
                    }
                </div>
            </div>}
        </>
    );
};

export default HomeAdvertiseProduct;