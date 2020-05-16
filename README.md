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