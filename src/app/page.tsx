"use client";
import Image from "next/image";
import styles from "./page.module.css";
import useFCM from "@/utils/hooks/useFCM";
import { getMessaging, onMessage } from "firebase/messaging";
import { NoticeMes } from "@/app/NoticeMes";


export default function Home() {
  const { messages, fcmToken } = useFCM();

  const messaging = getMessaging();
  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
  });

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
