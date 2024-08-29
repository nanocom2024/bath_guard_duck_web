"use client"; // クライアントコンポーネントであることを指定

import { useState } from 'react';
import { auth } from '../../utils/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useRouter } from 'next/navigation'; // next/navigation から useRouter をインポート
import Link from 'next/link'; // Link コンポーネントをインポート

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard'); // ログイン後にダッシュボードにリダイレクト
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
