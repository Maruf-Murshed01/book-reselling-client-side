import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Can I pay here with bKash?
                </div>
                <div className="collapse-content">
                    <p>No, as a prototype project we dont include bKash here you only can with with stripe</p>
                </div>
            </div>

            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Distance is high what should we do?
                </div>
                <div className="collapse-content">
                    <p>see nearest possible data</p>
                </div>
            </div>

            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Is this provide new books?
                </div>
                <div className="collapse-content">
                    <p>You can buy only used books</p>
                </div>
            </div>

            <div className="collapse">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                    Why you made this?
                </div>
                <div className="collapse-content">
                    <p>To ensure book available for all</p>
                    <p>Thank you for read this</p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;