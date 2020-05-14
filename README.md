# 【初級】 React HooksでFirabase認証機能実装

## 実装した機能

- Firabaseメール認証(検証済)

- Firabase Google認証(検証済)

- Firabase Facebook認証(未検証) => Facebook developerの設定がうまくいっていないっぽい？

※一応コードは入れておきます。ちなみにFacebook認証は「HTTPS」でないと認証できないためローカル上では認証できません。

## プロジェクトダウンロード & 構築

```bash
$ git clone https://github.com/dai-570415/react-hooks-firebase-auth.git

$ cd react-hooks-firebase-auth

$ npm install

# 必要なモジュール react-router-dom, firebase
$ npm install --save react-router-dom firebase

# 以下はお好みで入れる bootstrap,reactstrap, react-loading-overlay, formik, yup
$ npm install --save bootstrap reactstrap react-loading-overlay formik yup

$ npm start
```

### Firebase.jsを編集

```js:Firebase.js
//Firebase.js

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    // 各自のFirebaseキーを入れる
    apiKey: "YOUR_KEY",
    authDomain: "YOUR_KEY",
    databaseURL: "YOUR_KEY",
    projectId: "YOUR_KEY",
    storageBucket: "YOUR_KEY",
    messagingSenderId: "YOUR_KEY",
    appId: "YOUR_KEY",
    measurementId: "YOUR_KEY"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export default firebase;
```

以上でFirebase Authenticationに連携できるかと思います。

### react-hook-form導入してみた

```bash
# 必要なモジュール
$ npm install react-hook-form
```

```jsx
import { useForm } from 'react-hook-form';

const Signin = ({ history }) => {
    // ...省略
    const { register, handleSubmit, errors } = useForm();

    // handleSubmitがかぶる場合は変更する必要がある
    // const handleSubmit = (e) => {...}
    const onSubmit = (e) => {...}
    // ...省略

    return (
        {/* ...省略 */}
        <form onSubmit={ handleSubmit(onSubmit) }>
            {/* ...省略 */}
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
            {/* ...省略 */}
        </form>
    );
}

export default withRouter(Signin);
```