/** @jsxImportSource @emotion/react */
"use client";
import useGetLastMes from "@/utils/hooks/useGetLastMes";
import useGetDuckState from "@/utils/hooks/useGetDuckState";
import {DuckState} from "@/utils/enum/DuckState";
import {useChangeComponent} from "@/utils/hooks/useChangeComponent";

/**
 * 3つのコンポーネントを切り替えるコンポーネント
 * */

const MainContent = () => {
    //ここから////////////
    console.log("MainContent");

    // Define your styles
    const containerStyle = css({
        textAlign: "center",
        backgroundColor: "#FFFFFF",
        padding: "20px",
    });

    const  headerStyle = css({
        backgroundColor: "#FFFFFF",
        padding: "10px",
    });

    const paragraphStyle = css({
        color: "#636363",
        fontSize: "20px",
    });

    const pStyle = css({
        color: "black",
        fontSize: "30px",
        margin: "0px"
    });

    const pStyle2 = css({
        color: "black",
        fontSize: "30px",
        margin: "0px",
        backgroundColor: "#FFFBDA"
    });

    const headingStyle = css({
        fontFamily: "Arial, sans-serif",
        color: "black",
        fontSize: "50px"
    });

    const hrStyle = css({
        margin: "20px 0",
        borderColor: "gray",
    });

    return (
        <div css={containerStyle}>
            <div css={headerStyle}>
            <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                <p css={paragraphStyle}>おふろみまもりだっく</p>
            </Box>
            </div>
            <h1 css={headingStyle}>子供用ダック</h1>
            <p css={pStyle}>見守り中です！</p>
            {/*<Button variant="contained" sx={{ backgroundColor: "#FFFFFF", color: "black" }}>Contained</Button>*/}
            <Image
                src={"/images/duck.png"}
                alt={"duck"}
                width={400}
                height={300}
            />
            <p css={pStyle2}>お子様が浴槽に入水したことを検知してお知らせします。</p>
        </div>
    );
};
        //ここまで//////////

  console.log("MainContent");
  //最新の通知からタイトルとボディを取得
  const {mesTitle, mesBody} = useGetLastMes();
  //タイトルをDBと照らし合わせてダックの状態を取得
  const {duckState, setDuckState} = useGetDuckState(mesTitle);
  //状態によって表示するコンポーネントを変更
  const nowComponent = useChangeComponent(duckState);

  return (
    <>
      {nowComponent}
      {/*デバッグ用*/}
      <button onClick={() => setDuckState(() => DuckState.CHILD_ENTER)}>CHILD_ENTER</button>
      <button onClick={() => setDuckState(() => DuckState.CHILD_DETECTION)}>CHILD_DETECTION</button>
      <button onClick={() => setDuckState(() => DuckState.SLEEP)}>SLEEP</button>

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
