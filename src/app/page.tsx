"use client"; // クライアントコンポーネントとして指定

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const router = useRouter();

  useEffect(() => {
    // ログインページにリダイレクト
    router.push('/login');
  }, [router]);

  return null; // このコンポーネントは何も表示しない
}