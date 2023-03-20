import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../BookingModal/BookingModal';
import SingleBook from './SingleBook';

const Categories = () => {
    const books = useLoaderData()
    console.log(books)
    const [modalId, setModalId] = useState('')
    console.log('This is only one modal ID',modalId)
    return (
        <div>
            <p className='py-12  font-bold text-center text-3xl text-[#149777]'>{books[0].category}</p>
            {
                books.map(book => <SingleBook key={book._id} book={book} setModalId={setModalId}></SingleBook> )
            }
            <BookingModal modalId={modalId}></BookingModal>
        </div>
    );
};

export default Categories;