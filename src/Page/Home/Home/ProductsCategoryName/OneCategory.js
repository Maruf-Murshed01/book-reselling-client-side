import React from 'react';
import { Link } from 'react-router-dom';

const OneCategory = ({ onepcn }) => {
    // console.log(onepcn)
    const { img, pcn_name, _id } = onepcn
    return (
        <Link to={`/categories/${_id}`}>
            <div className='flex items-center'>
                <div className="category-img">
                    <img src={img} alt="" className='w-20 h-20 rounded' />
                </div>
                <div className='category-text ml-5'>
                    {pcn_name}
                </div>
            </div>
        </Link>
    );
};

export default OneCategory;