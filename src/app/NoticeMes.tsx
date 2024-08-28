
import { getMessaging, onMessage } from "firebase/messaging";
import {useState} from "react";

export const NoticeMes = () => {
  const messaging = getMessaging();
  const [pTag, setPTag] = useState(<p>通知なし</p>)
  onMessage(messaging, (payload) => {
    console.log('Message received. ', payload);
    setPTag(<p style={{color: "red", fontSize: "40px"}}>通知を検知！</p>);
  });

  return (
    pTag
  );


}