import { useQuery } from '@tanstack/react-query';
import React from 'react';

const AllSellers = () => {


    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await fetch('https://book-resale-server-omega.vercel.app/users/sellers')
            const data = await res.json();
            return data;
        }
    })
    
    return (
        <div>
            <h2 className="text-3xl py-6 ">All Seller List</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>User Type</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            users.map((user, i) => <tr key={user._id}>
                                <th>{i + 1}</th>
                                <td>{user.name}n</td>
                                <td>{user.email}</td>
                                <td>{user.userType}</td>
                                <td><button className='btn btn-xs btn-danger'>Delete</button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllSellers;