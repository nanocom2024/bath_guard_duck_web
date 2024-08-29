"use client"; // クライアントコンポーネントとして指定

import { useEffect } from 'react';
import { useRouter } from 'next/navigation'; // 画面遷移用


/* -----------------------------

最初に表示するホームページです。
すぐにログインページにリダイレクトしています。
ボタンなどでログインページへ遷移するようにしても良いと思います。

-------------------------------- */ 
export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // すぐにログインページへリダイレクト
    router.push('/login');
  }, [router]);

  return null; // このコンポーネントは何も表示しません
}