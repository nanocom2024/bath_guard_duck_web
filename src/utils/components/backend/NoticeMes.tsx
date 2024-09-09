"use client";
import {useContext, useEffect, useState} from "react";
import {NoticeContext} from "@/utils/providers/NoticeProvider";

const NoticeMes = () => {
  console.log("NoticeMes");
  const [isNotified, setIsNotified] = useState(false);

  const { messages } = useContext(NoticeContext);

  //メッセージが配列に追加されたら更新
  useEffect(() => {
    if (messages.length > 0) {
      setIsNotified(true);
    }
  }, [messages]);

  return isNotified ?
    <p style={{color: "red", fontSize: "40px"}}>通知を検知！</p> :
    <p>通知なし</p>;
}

export default NoticeMes;