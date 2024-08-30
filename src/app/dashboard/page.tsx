"use client";
import Image from "next/image";
import styles from "../page.module.css";
import useFCM from "@/utils/hooks/useFCM"; // 通知送信用？
import { getMessaging, onMessage } from "firebase/messaging"; // 通知送信用？
import { NoticeMes } from "@/app/NoticeMes"; // 通知送信用？

import useSaveToken from '@/utils/hooks/useSaveToken'; // Token保存用
import useAuthCheck from '@/utils/hooks/useAuthCheck'; // 認証確認用

/* -----------------------------

ログイン後に表示されるdashboardページです。
認証ができていないとログイン画面へリダイレクトします。

-------------------------------- */ 


export default function Dashboard() {
  const { messages, fcmToken } = useFCM();
  useSaveToken(fcmToken); // tokenを保存
  const user = useAuthCheck(); // 認証情報のcheck

  return (
    <main className={styles.main}>
      <NoticeMes />
      <p>FCM Token: {fcmToken}</p>
      <p>{user?.email}としてログイン中</p>
      <h1> 子供用ダック </h1>
      <Image
        src={"/images/duck.png"}
        alt={"duck"}
        width={300}
        height={200}/>
    </main>
  );
}
