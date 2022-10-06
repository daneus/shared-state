import { useStore } from '@nanostores/react';
import React, { useState } from 'react';
import { globalCounter } from '../store';
import { darkModeEnabled } from '../store';
import '../styles/styles.css';

export default function ReactComponent() {
  const [counter, setCounter] = useState(0);
  const $globalCounter = useStore(globalCounter);
  const $darkModeEnabled = useStore(darkModeEnabled);

  return (
    <>
      <div>
        <button onClick={() => darkModeEnabled.set(!$darkModeEnabled)}>
          Change theme
        </button>
      </div>
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
          This is a React JavaScript Component
        </h1>
      </div>
    </>
  );
}
