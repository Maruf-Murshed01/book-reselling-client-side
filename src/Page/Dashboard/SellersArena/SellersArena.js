import { useQuery } from '@tanstack/react-query';
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SellersArena = () => {

    const { user } = useContext(AuthContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
    const imgHostKey = "7c79cc369b9d4a5b2e89d84b8dae3c99"
    const today = new Date().toLocaleDateString();
    const navigate = useNavigate()
    const [pcn, setPcn] = useState([])
    const [genre, setGenre] = useState('')

    useEffect(() => {
        fetch('https://book-resale-server-omega.vercel.app/categories')
            .then(res => res.json())
            .then(data => setPcn(data))
    }, [])


    const handleAddDoctor = data => {
        const image = data.image[0]


        const formData = new FormData()
        formData.append('image', image)
        const url = `https://api.imgbb.com/1/upload?key=${imgHostKey}`
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url)

                    const bokish = {
                        email: data.email,
                        category_id: data.category,
                        // category: category_name,
                        name: data.name,
                        resale_price: data.resale_price,
                        img: imgData.data.url,
                        location: data.location,
                        original_price: data.original_price,
                        used: data.used,
                        post_date: today,
                        seller_name: data.seller_name,
                        seller_email: user?.email,
                        isAvailable: true
                    }

                    //save doctor to the database
                    fetch('https://book-resale-server-omega.vercel.app/addbooks', {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                        },
                        body: JSON.stringify(bokish)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result)
                            toast.success(`${data.name} is added successfully`)
                            navigate('/dashboard/myproducts')
                        })
                }
            })
    }

    return (
        <div className='w-96 p-7'>
            <h2 className="text-2xl font-bold">Add Book for sale</h2>

            <form onSubmit={handleSubmit(handleAddDoctor)}>
                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Name</span></label>
                    <input type="text" {...register("name", {
                        required: "Name is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select
                        {...register('category')}
                        className="select select-ghost w-full max-w-xs">
                        {
                            pcn.map(ctg => <option
                                key={ctg._id}
                                value={ctg._id}
                            >
                                <button onClick={() => setGenre(ctg.pcn_name)}>{ctg.pcn_name}</button>
                            </option>)
                        }
                    </select>
                </div>

                {/* <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Category</span></label>
                    <select
                        {...register('book_genre')}
                        className="select select-ghost w-full max-w-xs">
                        {
                            pcn.map(ctg => <option
                                key={ctg._id}
                                value={ctg.pcn_name}
                            >
                                {ctg.pcn_name}
                            </option>)
                        }
                    </select>
                </div> */}

                <h2>{genre}</h2>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Resale Price</span></label>
                    <input type="text" {...register("resale_price", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.resale_price.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Original Price</span></label>
                    <input type="text" {...register("original_price", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.original_price.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">How Much Time it Used</span></label>
                    <input type="text" {...register("used", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.used.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Seller Name</span></label>
                    <input type="text" {...register("seller_name", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.seller_name.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Location</span></label>
                    <input type="text" {...register("location", {
                        required: true
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.email && <p className='text-red-500'>{errors.location.message}</p>}
                </div>

                <div className="form-control w-full max-w-xs">
                    <label className="label"> <span className="label-text">Photo of the book</span></label>
                    <input type="file" {...register("image", {
                        required: "Photo is Required"
                    })} className="input input-bordered w-full max-w-xs" />
                    {errors.image && <p className='text-red-500'>{errors.name.image}</p>}
                </div>
                <input className='btn btn-accent w-full mt-4 text-white bg-[#149777]' value="Add Book" type="submit" />
            </form>
        </div>
    );
};

export default SellersArena;