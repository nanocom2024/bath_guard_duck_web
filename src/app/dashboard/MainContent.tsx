"use client";
import Image from "next/image";

/**
 * メインコンテンツ
 * */


const MainContent = () => {
  console.log("MainContent");

  return (
    <div>
      <h1> 子供用ダック </h1>
      <Image
        src={"/images/duck.png"}
        alt={"duck"}
        width={300}
        height={200}/>
    </div>
  );
}

export default MainContent;

