import React, { useEffect, useRef, useState } from 'react';
import SingleBook from '../../../Categories/Categories/SingleBook';

const AddSearching = () => {

    const [services, setServices] = useState([])
    const [search, setSearch] = useState('')
    const searchRef = useRef()
    useEffect(() => {
        fetch(`http://localhost:5000/services?search=${search}`)
            .then(res => res.json())
            .then(data => setServices(data))
    }, [search])

    const handleSearch = () => {
        setSearch(searchRef.current.value)
        console.log(searchRef.current.value)
    }
    return (
        <div>

            <div className=''>
                <p className='py-12  font-bold text-center text-3xl text-[#149777]'>Search Your Desire Book Here </p>
                <div className="flex justify-center">
                    <input ref={searchRef} className="input input-bordered w-full" type="text" placeholder="Search books here" />
                    <button onClick={handleSearch} className="px-4 py-2 bg-[#149777] text-white rounded-r-md">Search</button>
                </div>
            </div>


            <div className=''>
                {
                    services.map(bk => <div className='py-6'>
                        <div className="card card-side bg-base-100 shadow-xl w-1/2 m-auto">
                            <figure><img src={bk.img} alt="Movie" style={{ width: "300px", height: "auto", padding: "5px" }} /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Book Name: {bk.name}</h2>
                                <h2 className="card-title text-[#149777]">Resale Price: {bk.resale_price}</h2>
                                <p>Location: {bk.location}</p>
                                <p>Original Price: {bk.original_price}</p>
                                <p>Used For: {bk.used}</p>
                                <p>Posting Date: {bk.post_date}</p>
                                <p>Seller Name: {bk.seller_name}</p>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>








    );

};

export default AddSearching;
// return (
{/* <div className=''>
    <p className='py-12  font-bold text-center text-3xl text-[#149777]'>Search Your Desire Book Here </p>
    <div className="flex justify-center">
        <input
            className="input input-bordered w-full"
            type="text"
            placeholder="Search books here"
        />
        <button onClick={handleSearch} className="px-4 py-2 bg-[#149777] text-white rounded-r-md">
            Search
        </button>
    </div>
</div> */}
// );