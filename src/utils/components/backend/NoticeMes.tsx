"use client";
import {useContext, useEffect, useState} from "react";
import {NoticeContext} from "@/utils/providers/NoticeProvider";
import {MessagePayload} from "firebase/messaging";

const NoticeMes = () => {
  console.log("NoticeMes");
  const [isNotified, setIsNotified] = useState(false);
  const [mesTitle, setMesTitle] = useState("");
  const [mesBody, setMesBody] = useState("");

  const { messages } = useContext(NoticeContext);

  //メッセージが配列に追加されたら更新
  useEffect(() => {
    //メッセージがない場合は何もしない
    if (messages.length <= 0) return;
    //最新メッセージを取得
    const lastMes = messages[messages.length - 1];
    const mesTitle = lastMes.notification?.title ?? "";
    const mesBody = lastMes.notification?.body ?? "";
    //stateを更新
    setMesTitle(() => mesTitle);
    setMesBody(() => mesBody);

    console.log("mesTitle", mesTitle);
    console.log("mesBody", mesBody);
  }, [messages]);

  return (
    <div>
      <h2>通知メッセージ</h2>
      <h3>タイトル: {mesTitle}</h3>
      <h3>本文: {mesBody}</h3>
      <h3>状態: </h3>
    </div>
  );

  // return isNotified ?
  //   <p style={{color: "red", fontSize: "40px"}}>通知を検知！</p> :
  //   <p>通知なし</p>;
}

export default NoticeMes;