"use client"; // クライアントコンポーネントとして指定

import { useState } from 'react';
import { auth } from '../../utils/firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth'; // アカウント作成用
import { useRouter } from 'next/navigation'; // 画面遷移用

/* -----------------------------

アカウント登録ページです。
Firebase Authenticationを利用しています。

-------------------------------- */ 

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password); // アカウント作成
      router.push('/login'); // 登録後にログインページへリダイレクト
    } catch (error) {
      console.error("Registration failed:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div>
      <h1>Register</h1>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
}
