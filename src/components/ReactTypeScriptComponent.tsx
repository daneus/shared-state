import { useStore } from '@nanostores/react';
import { useState } from 'react';
import { globalCounter } from '../store';
import { darkModeEnabled } from '../store';

export default function ReactTypeScriptComponent() {
  const [counter, setCounter] = useState(0);
  const $globalCounter = useStore(globalCounter);
  const $darkModeEnabled = useStore(darkModeEnabled);
  return (
    <>
      <button onClick={() => setCounter((prev) => prev + 1)}>{counter}</button>
      <button onClick={() => globalCounter.set($globalCounter + 1)}>
        Global counter {$globalCounter}
      </button>
      <div
        style={{
          backgroundColor: `${$darkModeEnabled ? 'black' : 'white'}`,
          transition: 'all .5s linear',
        }}
      >
        <h1 style={{ color: `${$darkModeEnabled ? 'white' : 'black'}` }}>
          This is a React TypeScript Component
        </h1>
      </div>
    </>
  );
}
