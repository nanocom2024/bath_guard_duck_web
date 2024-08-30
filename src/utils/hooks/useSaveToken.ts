import { useState, useEffect } from 'react';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../utils/firebase'; // Firebaseの設定ファイルをインポート

// トークンを保存するためのカスタムフック
export function useSaveToken(token: string | null) {
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const saveTokenForUser = async () => {
      if (token) {
        const user = auth.currentUser; // 現在ログインしているユーザーを取得
        if (user) {
          const userId = user.uid; // ユーザーIDを取得
          const email = user.email; // emailを取得
          try {
            setIsSaving(true);
            // FirestoreのusersコレクションにユーザーIDをドキュメントIDとしてトークンを保存
            await setDoc(doc(db, 'users', userId), {
              email: email, token: token,
            });
            console.log('Token saved successfully');
          } catch (error: unknown) {
            console.error('Error saving token:', error);
            // エラーを型キャストしてからセット
            setError(error as Error);
          } finally {
            setIsSaving(false);
          }
        } else {
          console.log('No user is signed in');
        }
      }
    };

    saveTokenForUser();
  });

  return { isSaving, error };
}

export default useSaveToken;