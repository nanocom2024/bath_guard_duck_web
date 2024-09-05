"use client";
import {useState} from "react";
import {getMessaging, onMessage} from "firebase/messaging";

const NoticeMes = () => {
  const [isNotified, setIsNotified] = useState(false);

  //クライアントサイドレンダリング(CSR)の場合のみ実行
  if (typeof window !== 'undefined') { //windowはブラウザにしか存在しない
    const messaging = getMessaging();
    onMessage(messaging, (payload) => {
      console.log('通知を受け取りました。: ', payload);
      setIsNotified(() => true);
    });
  }

  return isNotified ?
    <p style={{color: "red", fontSize: "40px"}}>通知を検知！</p> :
    <p>通知なし</p>;
}

export default NoticeMes;