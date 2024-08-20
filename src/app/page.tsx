"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { getUserToken } from "@/myFirebase";
import {useEffect} from "react";
import useFCM from "@/utils/hooks/useFCM";

export default function Home() {
  const { messages, fcmToken } = useFCM();

  return (
    <main className={styles.main}>
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
