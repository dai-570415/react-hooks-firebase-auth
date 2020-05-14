import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AuthContext } from './AuthProvider';
import { useForm } from 'react-hook-form';

const Signup = ({ history }) => {
    const { signup } = useContext(AuthContext);
    const { register, handleSubmit, errors } = useForm();


    const onSubmit = (e) => {
        e.preventDefault();
        const { email, password } = e.target.elements;
        signup(email.value, password.value, history);
    }

    return (
        <React.Fragment>
            <h2>Sign up</h2>
            <Link to="/">Sign in</Link>
            <form onSubmit={ handleSubmit(onSubmit) }>
                
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                    ref={register({
                        required: "Emailは必須項目です",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                          message: "invalid email address"
                        }
                    })}
                />
                {errors.email && errors.email.message}

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                    ref={register({
                        required: "Passwordは必須項目です",
                        pattern: {
                          message: "invalid password"
                        }
                    })}
                />
                {errors.password && errors.password.message}

                <button type="submit">Sign in</button>
            </form>
        </React.Fragment>
    );
}

export default withRouter(Signup);