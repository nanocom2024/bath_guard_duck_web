"use client";
import Image from "next/image";
import styles from "../page.module.css";
import useFCM from "@/utils/hooks/useFCM"; // 通知送信用？
import { getMessaging, onMessage } from "firebase/messaging"; // 通知送信用？
import { NoticeMes } from "@/app/NoticeMes"; // 通知送信用？

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // 画面遷移用
import { auth } from '../../utils/firebase'; // farebaseの情報
import { onAuthStateChanged, User } from 'firebase/auth'; // 認証確認用

import useSaveToken from '@/utils/hooks/useSaveToken';

/* -----------------------------

ログイン後に表示されるdashboardページです。
認証ができていないとログイン画面へリダイレクトします。

-------------------------------- */ 


export default function Dashboard() {
  const { messages, fcmToken } = useFCM();
  const { setToken, isSaving, error } = useSaveToken();
  const [user, setUser] = useState<User | null>(null); // ユーザーの状態
  const router = useRouter(); // ルーターのフック

  useEffect(() => {
    // ユーザーの認証状態を監視
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // 認証済みの場合はユーザー情報を設定
      } else {
        router.push('/login'); // 未認証の場合はログインページにリダイレクト
      }
    });

    // クリーンアップ
    return () => unsubscribe();
  }, [router]);

  const messaging = getMessaging();
  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
  });

  const handleSaveToken = () => {
    const token = 'exampleToken123'; // 保存したいトークン
    setToken(token); // フックにトークンを設定して保存をトリガー
  };

  return (
    <main className={styles.main}>
      <NoticeMes />
      <p>FCM Token: {fcmToken}</p>
      <h1> 子供用ダック </h1>
      <div>
        <button onClick={handleSaveToken} disabled={isSaving}>
          Save Token
        </button>
        {isSaving && <p>Saving...</p>}
        {error && <p>Error: {error.message}</p>}
      </div>
      <Image
        src={"/images/duck.png"}
        alt={"duck"}
        width={300}
        height={200}/>
    </main>
  );
}
