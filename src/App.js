import { useState } from 'react';

function App() {
  const kujiList = ['大吉', '中吉', '小吉', '凶'];
  const [result, setResult] = useState(null);

  const handleDraw = () => {
    const randomIndex = Math.floor(Math.random() * kujiList.length);
    setResult(kujiList[randomIndex]);
  };

  const handleReset = () => {
    setResult(null);
  };

  return (
    <div className="App" style={{ textAlign: 'center', paddingTop: '50px' }}>
      <h1>くじ引きアプリ</h1>
      {result ? (
        <>
          <h2>結果: {result} 🎉</h2>
          <button onClick={handleReset}>もう一度引く</button>
        </>
      ) : (
        <button onClick={handleDraw}>くじを引く！</button>
      )}
    </div>
  );
}

export default App;
