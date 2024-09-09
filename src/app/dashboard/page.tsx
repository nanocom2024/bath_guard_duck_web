"use client";
import Image from "next/image";
import NoticeMes from "@/utils/components/backend/NoticeMes";
import {NoticeProvider} from "@/utils/providers/NoticeProvider";

/* -----------------------------

ログイン後に表示されるdashboardページです。
認証ができていないとログイン画面へリダイレクトします。

-------------------------------- */ 

export default function Dashboard() {

  return (
    <NoticeProvider>
      <h1> 子供用ダック </h1>
      <Image
        src={"/images/duck.png"}
        alt={"duck"}
        width={300}
        height={200}/>

      {/* バックエンド */}
      <p>/以下デバッグ用(そのうち削除予定)/</p>
      <NoticeMes/>
      {/*<FCMTokenViewer/>*/}
      {/*<EmailViewer/>*/}
    </NoticeProvider>
  );
}
