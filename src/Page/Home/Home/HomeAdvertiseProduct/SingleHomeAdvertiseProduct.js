import React from 'react';

const SingleHomeAdvertiseProduct = ({ prd }) => {
    const {img, name, resale_price, location, original_price, used, post_date, seller_name } = prd
    return (
        <div>
            <div className=' m-auto py-3'>
                <div className="card card-side bg-base-100 shadow-xl w-1/2 m-auto">
                    <figure><img src={img} style={{ width: "300px", height: "auto", padding: "5px" }} alt='' /></figure>
                    <div className="card-body">
                        {/* <h2 className="card-title">Book Name: {adp_name}</h2>
                        <p>Location: {adp_location}</p>
                        <p >price: ৳{adp_price}tk</p> */}

                        <h2 className="card-title">Book Name: {name}</h2>
                        <h2 className="card-title text-[#149777]">Resale Price: {resale_price}</h2>
                        <p>Location: {location}</p>
                        <p>Original Price: {original_price}</p>
                        <p>Used For: {used}</p>
                        <p>Posting Date: {post_date}</p>
                        <p>Seller Name: {seller_name}</p>
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