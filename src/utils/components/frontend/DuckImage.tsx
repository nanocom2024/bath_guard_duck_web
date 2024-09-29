/** @jsxImportSource @emotion/react */
"use client";

import Image from "next/image";
import {css} from "@emotion/react";

/**
 * emailを表示するコンポーネント
 * */

const DuckImage = () => {
  console.log("DuckImage");

  const margin = css({
  margin: "20px 0",
});

  //1〜100の乱数を生成
  const rand = Math.floor(Math.random() * 100 + 1);
  console.log("rand: " + rand);

  //デフォルトのダック画像を割り当て
  let duckImagePath = "/images/duck.png";

  //低確率で変更
  if (rand <= 1) {
    duckImagePath = "/images/duckM.png";
  } else if (rand <= 2) {
    duckImagePath = "/images/duckS.png";
  } else if (rand <= 3) {
    duckImagePath = "/images/duckT.png";
  }

  return (
    <div css={margin}>
      <Image
        src={duckImagePath}
        alt={"duck"}
        width={250}
        height={250}
      />
    </div>
  );
}

export default DuckImage;