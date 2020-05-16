import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AuthContext } from './AuthProvider';
import GoogleAuth from './GoogleAuth';
import TwitterAuth from './TwitterAuth';
import FacebookAuth from './FacebookAuth';
// import { useForm } from 'react-hook-form';

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
            <Link to="/signup">Sign up</Link>
            <form onSubmit={ handleSubmit }>
                <input
                    name="email"
                    type="email"
                    placeholder="Email"
                />

                <input
                    name="password"
                    type="password"
                    placeholder="Password"
                />

                <button type="submit">Sign in</button>
            </form>
            <button onClick={ GoogleAuth }>Google認証</button>
            <button onClick={ TwitterAuth }>Twitter認証</button>
            <button onClick={ FacebookAuth }>Facebook認証(検証中)</button>
        </React.Fragment>
    );
}

// react-hook-formは動くが登録時にエラーとなる
// const Signin = ({ history }) => {
//     const { signin } = useContext(AuthContext);
//     const { register, handleSubmit, errors } = useForm();

//     const onSubmit = async (e) => {
//         e.preventDefault();
//         const { email, password } = e.target.elements;
//         signin(email.value, password.value, history);
//     }

//     return (
//         <React.Fragment>
//             <h2>Sign in</h2>
//             <Link to="/signup">Sign up</Link>
//             <form onSubmit={ handleSubmit(onSubmit) }>
//                 <input
//                     name="email"
//                     type="email"
//                     placeholder="Email"
//                     ref={register({
//                         required: "Emailは必須項目です",
//                         pattern: {
//                           value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
//                           message: "invalid email address"
//                         }
//                     })}
//                 />
//                 {errors.email && errors.email.message}

//                 <input
//                     name="password"
//                     type="password"
//                     placeholder="Password"
//                     ref={register({
//                         required: "Passwordは必須項目です",
//                         pattern: {
//                           message: "invalid password"
//                         }
//                     })}
//                 />
//                 {errors.password && errors.password.message}

//                 <button type="submit">Sign in</button>
//             </form>
//             <button onClick={ GoogleAuth }>Google認証</button>
//             <button onClick={ TwitterAuth }>Twitter認証</button>
//             <button onClick={ FacebookAuth }>Facebook認証(検証中)</button>
//         </React.Fragment>
//     );
// }

export default withRouter(Signin);