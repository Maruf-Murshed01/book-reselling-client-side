import React from 'react';
import mainbannerpic from '../../../../Assets/Banner/mainbannerpic.jpg'

const Banner = () => {
    return (
        <header className=''>
            <div className="hero">
                <div className="hero-content flex-col lg:flex-row-reverse p-0">
                    <img src={mainbannerpic} className=" max-w-sm rounded-lg shadow-2xl" alt='bannermainpic.jpg'/>
                    <div>
                        <h1 className="text-5xl font-bold text-[#149777]">Pages which enhance your beauty!</h1>
                        <p className="py-6">Welcome to our new book reselling website! We offer a wide range of quality books at affordable prices, making it easier for you to get your hands on the latest bestsellers or classic favorites. Our simple and user-friendly platform allows you to browse, buy, and sell books with ease. Start exploring our collection now and find your next read!</p>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Banner;