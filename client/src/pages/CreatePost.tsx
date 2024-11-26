// import { retrieveUsers } from "../api/userAPI";
// import type { UserData } from "../interfaces/UserData";
import auth from '../utils/auth';
import Form from "../components/Form";
import { useLayoutEffect, useState } from 'react';

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
                            Login to view all your friends!
                        </h1>
                    </div>
                ) : (
                    <Form />
                )}
        </>
    );
};

export default CreatePost;
