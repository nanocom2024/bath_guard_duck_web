"use client";
import {useContext} from "react";
import {NoticeContext} from "@/utils/providers/NoticeProvider";

/**
 * FCM Tokenを表示するコンポーネント
 * */

const FCMTokenViewer = () => {
  const { fcmToken } = useContext(NoticeContext);

  return <p>FCM Token: {fcmToken}</p>;
}

export default FCMTokenViewer;