import React from 'react';

const SingleHomeAdvertiseProduct = ({ prd }) => {
    const { adp_id, img, adp_name, adp_location, adp_price } = prd
    return (
        <div>
            <div className='w-1/2  m-auto py-3'>
                <div className="card card-side bg-base-100 shadow-xl">
                    <figure><img src={img} alt=''/></figure>
                    <div className="card-body">
                        <h2 className="card-title">Book Name: {adp_name}</h2>
                        <p>Location: {adp_location}</p>
                        <p >price: ৳{adp_price}tk</p>
                        <div className="card-actions justify-end">
                            <button className="btn  bg-[#149777] border-none ">Book Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleHomeAdvertiseProduct;