"use client";
import { useState } from 'react';

export default function Page() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [password, setPassword] = useState('');

  // ここでパスワードをチェック（実際はもっと厳密にする必要がありますが、まずはこれで動かします）
  const handleLogin = () => {
    if (password === 'portal_2026_Secure_!key') {
      setIsAdmin(true);
    } else {
      alert('パスワードが違います');
    }
  };

  return (
    <main style={{ padding: '20px' }}>
      {/* 普段の表示 */}
      <h1>私のポータルサイト</h1>
      <p>ここにサイトのコンテンツが入ります。</p>

      <hr />

      {/* 管理モードの切り替えエリア */}
      {!isAdmin ? (
        <div>
          <input 
            type="password" 
            placeholder="管理者パスワード" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
          />
          <button onClick={handleLogin}>ログイン</button>
        </div>
      ) : (
        <div style={{ backgroundColor: '#f0f0f0', padding: '20px', marginTop: '20px' }}>
          <h2>【管理者モード】</h2>
          <p>ここに画像削除ボタンなどを設置します。</p>
          <button onClick={() => setIsAdmin(false)}>ログアウト</button>
        </div>
      )}
    </main>
  );
}
