import {useContext, useEffect, useState} from "react";
import {NoticeContext} from "@/utils/providers/NoticeProvider";


const useGetLastMes = () => {
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

    console.log("mesTitle: ", mesTitle);
    console.log("mesBody: ", mesBody);
  }, [messages]);

  return {mesTitle, mesBody};
}

export default useGetLastMes;