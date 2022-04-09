import React from 'react';

const Register = () => {
    return (
        <div>
            <h2>This is register</h2>
            <form className="register-form">
                <input type="text" />
                <br />
                <input type="email" />
                <br />
                <input type="password" />
                <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;