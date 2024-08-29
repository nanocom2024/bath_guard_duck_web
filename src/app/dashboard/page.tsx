"use client";
import Image from "next/image";
import styles from "../page.module.css";
import useFCM from "@/utils/hooks/useFCM";
import { getMessaging, onMessage } from "firebase/messaging";
import { NoticeMes } from "@/app/NoticeMes";

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // `next/navigation` を使用
import { auth } from '../../utils/firebase'; // Firebase の設定ファイルのパス
import { onAuthStateChanged, User } from 'firebase/auth';


export default function Home() {
  const { messages, fcmToken } = useFCM();
  const [user, setUser] = useState<User | null>(null); // ユーザーの状態
  const router = useRouter(); // ルーターのフック

  const messaging = getMessaging();
  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
  });

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

  return (
    <main className={styles.main}>
      <NoticeMes />
      <p>FCM Token: {fcmToken}</p>
      <h1> 子供用ダック </h1>
      <Image
        src={"/images/duck.png"}
        alt={"duck"}
        width={300}
        height={200}/>
    </main>
  );
}
