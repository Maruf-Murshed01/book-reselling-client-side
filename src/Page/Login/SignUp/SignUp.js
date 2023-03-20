import React, { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
// import { setAuthToken } from '../../api/auth';
import img from '../../../Assets/Login/login.svg';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import UserAs from '../UserAs/UserAs';

const SignUp = () => {
    const [userType, setUserType] = useState("user");
    const { createUser, createUserProfile } = useContext(AuthContext)
    const handleSignUp = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
                updateSingleProfile(name)
                saveUser(name, email)
                // setAuthToken(user)
            })
            .catch(err => console.error(err));

        const updateSingleProfile = (name) => {
            const profile = {
                displayName: name
            }
            createUserProfile(profile)
                .then(() => { })
                .catch(err => console.error(err))
        }
    }

    const saveUser = (name, email) => {

        const userSingUpAs = { name, email, userType }

        fetch('http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(userSingUpAs)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
            })
    }

    return (
        <>

            <div className="hero w-full my-20">
                <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                    <div className="text-center lg:text-left">
                        <img className='w-3/4' src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-20">
                        <h1 className="text-5xl text-center font-bold">Sign Up</h1>
                        <form onSubmit={handleSignUp} className="card-body">


                            <div className='signup as'>
                                <label>
                                    <input
                                        type="radio"
                                        value="user"
                                        checked={userType === "user"}
                                        onChange={() => setUserType("user")}
                                    />
                                    User
                                </label>
                                <br />
                                <label>
                                    <input
                                        type="radio"
                                        value="buyer"
                                        checked={userType === "buyer"}
                                        onChange={() => setUserType("buyer")}
                                    />
                                    Buyer
                                </label>
                                <br />
                                <label>
                                    <input
                                        type="radio"
                                        value="seller"
                                        checked={userType === "seller"}
                                        onChange={() => setUserType("seller")}
                                    />
                                    Seller
                                </label>
                                {/* <br />
                                <label>
                                    <input
                                        type="radio"
                                        value="admin"
                                        checked={userType === "admin"}
                                        onChange={() => setUserType("admin")}
                                    />
                                    Admin
                                </label> */}


                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="Your Name" className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Sign Up" />
                            </div>
                        </form>
                        <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
                    </div>

                </div>
            </div>
        </>
    );
};

export default SignUp;