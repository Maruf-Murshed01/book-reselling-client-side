import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';


const MyOrder = () => {
    const { user } = useContext(AuthContext)

    const { data: bookings = [] } = useQuery({
        queryKey: ['bookings', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://book-resale-server-omega.vercel.app/bookings?email=${user?.email}`)
            const data = await res.json()
            return data;
        }
    })

    return (
        <div>
            <h3 className="text-3xl mb-5">My Orders</h3>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Book Name</th>
                            <th>Meeting Location</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            bookings?.map((booking, i) => <tr key={booking._id}>
                                <th>{i + 1}</th>
                                <td>{booking.name}</td>
                                <td>{booking.bookName}</td>
                                <td>{booking.meetingLocation}</td>
                                <td>{booking.price}</td>
                                <td>{
                                    booking.price && !booking.paid && <Link to={`/dashboard/payment/${booking._id}`}>
                                        <button className='btn btn-sm btn-primary bg-[#149777] border-none'>pay</button>
                                    </Link>
                                }

                                    {booking.price && booking.paid && <span>paid</span>}
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrder;