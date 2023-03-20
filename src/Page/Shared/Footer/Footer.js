import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div>
            <img src="https://i.ibb.co/3cG1sPH/Tech-book-1.png" alt="" className=" w-24 h-24" />
                <p>Book Nerds Company Limited<br />Providing reliable Book since 2023</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <Link className="link link-hover">Old books</Link>
                <Link className="link link-hover">New Books</Link>
                <Link className="link link-hover">Low cost Books</Link>
                <Link className="link link-hover">Advertisement</Link>
            </div>
            <div>
                <span className="footer-title">Company</span>
                <Link className="link link-hover">About us</Link>
                <Link className="link link-hover">Contact</Link>
                <Link className="link link-hover">Jobs</Link>
                <Link className="link link-hover">Press kit</Link>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <Link className="link link-hover">Terms of use</Link>
                <Link className="link link-hover">Privacy policy</Link>
                <Link className="link link-hover">Cookie policy</Link>
            </div>
        </footer>
    );
};

export default Footer;