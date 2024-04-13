import { useState } from 'react';
import reactLogo from './assets/react.svg';
import './App.css';
import { Button, FloatButton } from 'antd';

function App(): JSX.Element {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React ahihi</h1>
      <Button type="primary">Primary Button</Button>
      <div className="card">
        <button
          onClick={() => {
            setCount((count) => count + 1);
          }}
        >
          {count}
          <FloatButton tooltip={<div>Documents</div>} />
        </button>
        <p>
          {/* eslint-disable-next-line @stylistic/jsx-one-expression-per-line */}
          <code> src/App.tsx </code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">Click on the Vite and React logos to learn more</p>
    </>
  );
}

export default App;
