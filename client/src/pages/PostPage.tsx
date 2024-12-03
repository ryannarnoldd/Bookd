import auth from '../utils/auth';
import { useLayoutEffect, useState } from 'react';
import PostForm from '../components/PostForm';

const CreatePost = () => {

    const [loginCheck, setLoginCheck] = useState(false);
    
    useLayoutEffect(() => {
        checkLogin();
    }, []);

    const checkLogin = () => {
        if (auth.loggedIn()) {
            setLoginCheck(true);
        }
    };


    return (
        <>
            {
                !loginCheck ? (
                    <div className='login-notice'>
                        <h1>
                            Login to view all your posts!
                        </h1>
                    </div>
                ) : (
                    <h1>
                        <PostForm mode={'create'} />
                    </h1>
                )}
        </>
    );
};

export default CreatePost;