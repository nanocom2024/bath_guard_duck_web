"use client"; // クライアントコンポーネントであることを指定

import { useState } from 'react';
import { auth } from '../../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth'; // 認証用
import { useRouter } from 'next/navigation'; // 画面遷移用
import Link from 'next/link'; // Link コンポーネント

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
    <div>
      <h1>Login</h1>
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
      <button onClick={handleLogin}>Login</button>

      <div>
        <p>アカウント登録</p>
        <Link href="/register">
          <button>Register</button>
        </Link>
      </div>
    </div>
  );
}
