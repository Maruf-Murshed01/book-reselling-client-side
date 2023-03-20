import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CheckoutForm from './CheckoutForm';

const Payment = () => {
    const booking = useLoaderData()
    console.log('booking data', booking)

    const stripePromise = loadStripe('pk_test_51LQmQZL2UgZIMTKppqwLNBqQYOzOvonYSkujMFyFjeIZ84p1StJfOwCXjEX9ksu6JGDypx5GVS6J5VRgRJlvDwIz00IpULqiBC');
    console.log('stripe promise', stripePromise)
    return (
        <div>
            <p className='py-12  font-bold text-3xl text-[#149777]'>Payment</p>
            <h2> Payment for {booking.bookName} </h2>
            <p>Please pay <strong>{booking.price} taka</strong></p>
            <div className='w-96 my-12'>
                <Elements stripe={stripePromise}>
                    <CheckoutForm
                        booking={booking}
                    />
                </Elements>
            </div>
        </div>
    );
};

export default Payment;