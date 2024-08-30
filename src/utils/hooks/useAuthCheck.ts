import { useState, useEffect } from 'react';
import { auth } from '../../utils/firebase'; // Firebaseの設定ファイルをインポート
import { useRouter } from 'next/navigation'; // 画面遷移用
import { onAuthStateChanged, User } from 'firebase/auth'; // 認証確認用

// トークンを保存するためのカスタムフック
export function useAuthCheck() {
    const router = useRouter(); // ルーターのフック
    const [user, setUser] = useState<User | null>(null); // ユーザーの状態

    useEffect(() => {
        // ユーザーの認証状態を監視
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user); // 認証済みの場合はユーザー情報を設定
            } else {
                router.push('/login'); // 未認証の場合はログインページにリダイレクト
            }
        });

        // クリーンアップ
        return () => unsubscribe();
    });

  return user; // userを返す
}

export default useAuthCheck;