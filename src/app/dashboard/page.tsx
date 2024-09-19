"use client";
import {NoticeProvider} from "@/utils/providers/NoticeProvider";
import MainContent from "@/app/dashboard/MainContent";

/* -----------------------------

ログイン後に表示されるdashboardページです。
認証ができていないとログイン画面へリダイレクトします。

-------------------------------- */ 

export default function Dashboard() {

  return (
    <NoticeProvider>
      <MainContent />
    </NoticeProvider>
  );
}
