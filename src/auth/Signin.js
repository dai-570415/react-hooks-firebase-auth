import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AuthContext } from './AuthProvider';
import GoogleAuth from './GoogleAuth';
import TwitterAuth from './TwitterAuth';
import FacebookAuth from './FacebookAuth';

const Signin = ({ history }) => {
    const { signin } = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        signin(email.value, password.value, history);
    }

    return (
        <React.Fragment>
            <h2>Sign in</h2>
            <form onSubmit={ handleSubmit }>
                <Link to="/signup">Sign up</Link>
                <input name="email" type="email" placeholder="Email" />
                <input name="password" type="password" placeholder="Password" />
                <button type="submit">Sign in</button>
            </form>
            <button onClick={ GoogleAuth }>Google認証</button>
            <button onClick={ TwitterAuth }>Twitter認証</button>
            <button onClick={ FacebookAuth }>Facebook認証(検証中)</button>
        </React.Fragment>
    );
}

export default withRouter(Signin);