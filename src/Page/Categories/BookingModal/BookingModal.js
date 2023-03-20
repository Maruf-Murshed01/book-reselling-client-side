import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const BookingModal = ({ modalId }) => {

    const { user } = useContext(AuthContext)

    const [allbookstoSingle, setAllBookstoSingle] = useState('')
    const { category,
        category_id,
        img,
        location,
        name,
        original_price,
        post_date,
        resale_price,
        seller_name,
        used,
        _id } = allbookstoSingle

    useEffect(() => {
        fetch(`http://localhost:5000/allbooks/${modalId}`)
        .then(res => res.json())
        .then(data => setAllBookstoSingle(data))
    }, [modalId])

    const handleBooking = event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value
        const email = form.email.value
        const bookName = form.bookName.value
        const price = form.price.value
        const phone = form.phone.value
        const meetingLocation = form.meetingLocation.value
        console.log(name, email, bookName, price, phone, meetingLocation)

        const order = {
            name,
            email,
            bookName,
            price,
            phone,
            meetingLocation
        }


        fetch('http://localhost:5000/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Booking saved successfully')
                    form.reset();

                }
            })
            .catch(er => console.error(er));

    }
    return (
        <div>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="resale-bookig-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box">
                    <div className="modal-action">
                        <label htmlFor="resale-bookig-modal" className="btn">X</label>
                    </div>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='name' type="text" defaultValue={user?.displayName} disabled className="input w-full input-bordered" />
                        <input name='email' type="text" defaultValue={user?.email} disabled className="input w-full input-bordered" />
                        <input name='bookName' type="text" defaultValue={name} disabled className="input w-full input-bordered" />
                        <input name='price' type="text" defaultValue={resale_price} disabled className="input w-full input-bordered" />
                        <input name='phone' type="text" placeholder="Phone Number" className="input w-full input-bordered" />
                        <input name='meetingLocation' type="text" placeholder="Meeting Location" className="input w-full input-bordered" />


                        <br />
                        <input className='btn btn-accent w-full' type="submit" value="Submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;