import React from 'react';
import AddSearching from '../AddSearching/AddSearching';
import Banner from '../Banner/Banner';
import HomeAdvertiseProduct from '../HomeAdvertiseProduct/HomeAdvertiseProduct';
import ProductsCategoryName from '../ProductsCategoryName/ProductsCategoryName';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <AddSearching></AddSearching>
            <ProductsCategoryName></ProductsCategoryName>
            <HomeAdvertiseProduct></HomeAdvertiseProduct>
        </div>
    );
};

export default Home;