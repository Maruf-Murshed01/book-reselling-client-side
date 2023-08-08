import React, { useEffect, useState } from 'react';
import AandA from '../../../../Assets/Category/simple.png'
import OneCategory from './OneCategory';

const ProductsCategoryName = () => {
   const [pcn, setPcn] = useState([])

   useEffect(()=>{
    fetch('https://book-resale-server-omega.vercel.app/categories')
    .then(res => res.json())
    .then(data => setPcn(data))
   }, [])
    return (

        <>
            <div className='py-6'>
                <p className='py-12  font-bold text-center text-3xl text-[#149777]'>Browse items by category</p>
                <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    {
                        pcn.map(onepcn => <OneCategory key={onepcn.id} onepcn={onepcn}></OneCategory>)
                    }
                </div>
            </div>
        </>
    );
};

export default ProductsCategoryName;