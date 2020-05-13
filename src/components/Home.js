import React from 'react';
import firebase from '../Firebase';

const Home = () => {
    const user = firebase.auth().currentUser;
    let email, uid;

    if (user != null) {
        email = user.email;
        uid = user.uid;
    }

    return (
        <React.Fragment>
            <h2>Home</h2>
            <p>ID: { uid }</p>
            <p>Email: { email }</p>
            <button onClick={() => firebase.auth().signOut()}>Sign out</button>
        </React.Fragment>
    );
}

export default Home;