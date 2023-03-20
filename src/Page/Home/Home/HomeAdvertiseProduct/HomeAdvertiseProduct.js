import React from 'react';
import arekFalgun from '../../../../Assets/HomeAdvertise/arekfalgun.jpg'
import shesherKobita from '../../../../Assets/HomeAdvertise/shesherkobita.jpg'
import SingleHomeAdvertiseProduct from './SingleHomeAdvertiseProduct';

const HomeAdvertiseProduct = () => {
    const advertiseProduct = [
        {
            "adp_id": 1,
            "img": arekFalgun,
            "adp_name": "Arek Falgun",
            "adp_location": "Birganj, Dinajpur",
            "adp_price": "300"
        },
        {
            "adp_id": 2,
            "img": shesherKobita,
            "adp_name": "Shesher Kobita",
            "adp_location": "Basherhat, Dinajpur",
            "adp_price": "300"
        }
    ]
    return (
        <div className='py-6'>
            <p className='py-12  font-bold text-center text-3xl text-[#149777]'>Ads</p>
            <div>
                {
                    advertiseProduct.map(prd => <SingleHomeAdvertiseProduct key={prd.adp_id} prd={prd}></SingleHomeAdvertiseProduct>)
                }
            </div>
        </div>
    );
};

export default HomeAdvertiseProduct;