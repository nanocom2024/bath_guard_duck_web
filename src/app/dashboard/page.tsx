"use client";
import Image from "next/image";
import NoticeMes from "@/utils/components/backend/NoticeMes";
import {NoticeProvider} from "@/utils/providers/NoticeProvider";
import MainContent from "@/app/dashboard/MainContent";
import EmailViewer from "@/utils/components/backend/EmailViewer";
import FCMTokenViewer from "@/utils/components/backend/FCMTokenViewer";

/* -----------------------------

ログイン後に表示されるdashboardページです。
認証ができていないとログイン画面へリダイレクトします。

-------------------------------- */ 

export default function Dashboard() {

  return (
    <NoticeProvider>
      {/* フロントエンド */}
      <MainContent />

      {/* バックエンド */}
      <p>/以下デバッグ用(そのうち削除予定)/</p>
      <NoticeMes/>
      {/*<FCMTokenViewer/>*/}
      {/*<EmailViewer/>*/}
    </NoticeProvider>
  );
}
