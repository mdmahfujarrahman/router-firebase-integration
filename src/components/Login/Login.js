import React from 'react';
import useFirebase from '../../hooks/useFirebase';

const Login = () => {
    const {signInWithGoogle} = useFirebase({})
    return (
        <div>
            <h2>This log in page</h2>
            <div style={{ margin: "20px" }}>
                <button onClick={signInWithGoogle}>Google Sign in</button>
            </div>
            <form className="login-form">
                <input type="email" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" value="Log in" />
            </form>
        </div>
    );
};

export default Login;<h2>This log in page</h2>