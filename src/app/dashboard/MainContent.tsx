/** @jsxImportSource @emotion/react */
"use client";
import useGetLastMes from "@/utils/hooks/useGetLastMes";
import useGetDuckState from "@/utils/hooks/useGetDuckState";
import ChildEnter from "@/app/dashboard/ChildEnter";
import ChildDetection from "@/app/dashboard/ChildDetection";
import Sleep from "@/app/dashboard/Sleep";
import {DuckState} from "@/utils/enum/DuckState";
import {useChangeComponent} from "@/utils/hooks/useChangeComponent";

/**
 * メインコンテンツ
 * */

const MainContent = () => {
  console.log("MainContent");
  //最新の通知からタイトルとボディを取得
  const {mesTitle, mesBody} = useGetLastMes();
  //タイトルをDBと照らし合わせてダックの状態を取得
  const {duckState} = useGetDuckState(mesTitle);
  //状態によって表示するコンポーネントを変更
  const nowComponent = useChangeComponent(duckState);

  return (
    <>
      {nowComponent}
      {/*デバッグ用*/}
      {/*<div>*/}
      {/*  <h2>通知メッセージ</h2>*/}
      {/*  <h3>タイトル: {mesTitle}</h3>*/}
      {/*  <h3>本文: {mesBody}</h3>*/}
      {/*  <h3>状態: {duckState}</h3>*/}
      {/*</div>*/}
    </>
  );
}

export default MainContent;
