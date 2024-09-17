"use client"; // クライアントコンポーネントであることを指定

import { useState } from 'react';
import { auth } from '../../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'; // 認証用
import { useRouter } from 'next/navigation'; // 画面遷移用
import Link from 'next/link'; // Link コンポーネント
import classes from './login.module.css';

/* -----------------------------

ログインページです。
Firebase Authenticationを利用しています。

-------------------------------- */ 

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password); // 認証
      router.push('/dashboard'); // ログイン後にダッシュボードへリダイレクト
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your email and password.");
    }
  };

  return (
    <div className={classes.container}>
      <h1 className={classes.title}>Login</h1>
      <input className={classes.input}
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <br />
      <input className={classes.input}
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <br />
      <button  className={classes.button} onClick={handleLogin}>Login</button>

      <div className={classes.link}>
        <Link href="/register">
          新規登録
        </Link>
      </div>
    </div>
  );
}
