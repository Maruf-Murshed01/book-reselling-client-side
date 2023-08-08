import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(err => console.error(err))
    }


    return (
        <div>
            <p className='text-center'>Social Login</p>
            <p className='text-center'>
                <button onClick={handleGoogleSignIn} className='btn btn-ghost w-full text-white bg-[#149777]'>Google</button>
            </p>
        </div>
    );
};

export default SocialLogin;