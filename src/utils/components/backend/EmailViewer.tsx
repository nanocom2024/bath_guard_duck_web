"use client";
import useAuthCheck from "@/utils/hooks/useAuthCheck";

/**
 * emailを表示するコンポーネント
 * */

const EmailViewer = () => {
  console.log("EmailGetter");
  const user = useAuthCheck(); // 認証情報のcheck

  return <p>{user?.email}としてログイン中</p>;
}

export default EmailViewer;