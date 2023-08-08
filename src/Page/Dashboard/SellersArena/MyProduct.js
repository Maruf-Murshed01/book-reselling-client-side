import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';

const MyProduct = () => {

    const [availability, setAvailability] = useState(null)

    const { user, loading, refetch } = useContext(AuthContext);
    const { data: products = [] } = useQuery({
        queryKey: ['products'],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/seller/books?email=${user?.email}`)
            const data = await res.json();
            setAvailability(data[0].isAvailable)
            return data;
        }
    })

    const handleProductAvailable = pd => {

        fetch(`http://localhost:5000/books/${pd._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ availability: !pd.isAvailable })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('avaiability updated successfully ')
                    window.location.reload();
                }
            })
    }

    return (
        <div>
            <h2 className="text-3xl py-6 ">My All Books for Sale</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>availability</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            products.map((pd, i) => <tr key={pd._id}>
                                <th>{i + 1}</th>
                                <td>{pd.name}n</td>
                                <td>{pd.location}</td>
                                <td><button onClick={() => { handleProductAvailable(pd); }}>{pd.isAvailable === true ? 'available' : 'unavailable'}</button></td>
                                <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyProduct;