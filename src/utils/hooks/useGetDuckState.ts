import {Dispatch, SetStateAction, useEffect, useState} from "react";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";
import {DuckState} from "@/utils/enum/DuckState";

/**
 * 通知のタイトルから遷移したアヒルの状態をDBから取得するhooks
 * */
const useGetDuckState = (mesTitle: string): {duckState: DuckState, setDuckState: Dispatch<SetStateAction<DuckState>>} => {
  const [duckState, setDuckState] = useState<DuckState>(DuckState.SLEEP);

  console.log(mesTitle);

  //dbから取得したデータをstateにセット
  useEffect(() => {
    for (let state in DuckState) {
      if (state === mesTitle) return;
    }

    console.log("!DBにアクセス!")

    //DBからコレクション取得
    const db = getFirestore();
    //クエリ作成
    const q = query(
      collection(db, "messages"),
      where("title", "==", mesTitle)
    );
    //データ取得
    getDocs(q).then((qs) => {
      qs.docs.forEach((doc) => {
        const state: DuckState = doc.data().state ?? DuckState.SLEEP;
        setDuckState(() => state);
      });
    });

  }, [mesTitle]);

  return {duckState, setDuckState};
}

export default useGetDuckState;