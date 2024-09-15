import {useEffect, useState} from "react";
import {collection, getDocs, getFirestore, query, where} from "firebase/firestore";

const useGetDuckState = (mesTitle: string) => {
  const [duckState, setDuckState] = useState<string>("");

  console.log(mesTitle);

  //dbから取得したデータをstateにセット
  useEffect(() => {
    if (mesTitle === "") return;
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
        const state: string = doc.data().state ?? "";
        setDuckState(() => state);
      });
    });

  }, [mesTitle]);

  return {duckState};
}

export default useGetDuckState;