"use client";
import useGetLastMes from "@/utils/hooks/useGetLastMes";
import useGetDuckState from "@/utils/hooks/useGetDuckState";

const NoticeMes = () => {
  console.log("NoticeMes");
  const {mesTitle, mesBody} = useGetLastMes();
  const {duckState} = useGetDuckState(mesTitle);


  return (
    <div>
      <h2>通知メッセージ</h2>
      <h3>タイトル: {mesTitle}</h3>
      <h3>本文: {mesBody}</h3>
      <h3>状態: {duckState}</h3>
    </div>
  );

  // return isNotified ?
  //   <p style={{color: "red", fontSize: "40px"}}>通知を検知！</p> :
  //   <p>通知なし</p>;
}

export default NoticeMes;