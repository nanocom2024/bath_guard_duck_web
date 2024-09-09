import { createContext, ReactNode } from "react";
import useFCM from "@/utils/hooks/useFCM";
import useSaveToken from "@/utils/hooks/useSaveToken";
import {MessagePayload} from "firebase/messaging";

interface NoticeContextType {
  messages: MessagePayload[];
  fcmToken: string;
}

export const NoticeContext = createContext<NoticeContextType>(
  {messages: [], fcmToken: ""}
);

export const NoticeProvider = (props: { children: ReactNode; }) => {
  const { children } = props;

  //FCMTokenを取得したり通知を受け取ったりする
  let { messages, fcmToken } = useFCM();
  console.log("messages:")
  console.log(messages);
  useSaveToken(fcmToken); // tokenを保存
  fcmToken = fcmToken ?? "";

  return (
    <NoticeContext.Provider value={{ messages, fcmToken }}>
      {children}
    </NoticeContext.Provider>
  );
};