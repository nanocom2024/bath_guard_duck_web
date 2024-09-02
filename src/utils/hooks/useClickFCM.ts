import useFCM from "@/utils/hooks/useFCM";
import useSaveToken from "@/utils/hooks/useSaveToken";


const useClickFCM = () => {
  let { messages, fcmToken } = useFCM();
  useSaveToken(fcmToken); // tokenを保存

  if (fcmToken === null) {
    fcmToken = "取得できませんでした。";
  }

  console.log(fcmToken);
}

export default useClickFCM;