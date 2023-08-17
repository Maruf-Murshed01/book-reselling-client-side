import React from 'react';
import BookingModal from '../BookingModal/BookingModal';

const SingleBook = ({ book, setModalId }) => {
    const {_id, name, location, resale_price, original_price, used, post_date, seller_name, img, category } = book

    return (
        <div className='py-6'>
            <div className="card card-side bg-base-100 shadow-xl w-full sm:w-full flex flex-col md:w-full flex flex-col lg:w-1/2 m-auto">
                <figure><img src={img} alt="Movie" style={{ width: "300px", height: "auto", padding: "5px" }} /></figure>
                <div className="card-body">
                    <h2 className="card-title">Book Name: {name}</h2>
                    <h2 className="card-title text-[#149777]">Resale Price: {resale_price}</h2>
                    <p>Location: {location}</p>
                    <p>Original Price: {original_price}</p>
                    <p>Used For: {used}</p>
                    <p>Posting Date: {post_date}</p>
                    <p>Seller Name: {seller_name}</p>
                    <div className="card-actions w-full">
                        <label htmlFor="resale-bookig-modal" className="btn"  onClick={() => setModalId(_id)}>Book Now</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleBook;