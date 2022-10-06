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
        <button
          className='change-theme'
          onClick={() => darkModeEnabled.set(!$darkModeEnabled)}
        >
          Change theme
        </button>
      </div>
      <div
        className='react-component-wrapper'
        style={{
          backgroundColor: `${$darkModeEnabled ? 'black' : 'white'}`,
          transition: 'all .3s linear',
        }}
      >
        <h1
          className='react-component'
          style={{ color: `${$darkModeEnabled ? 'white' : 'black'}` }}
        >
          This is a React JavaScript Component
        </h1>
        <div className='buttons-wrapper'>
          <button onClick={() => setCounter((prev) => prev + 1)}>
            Component counter: {counter}
          </button>
          <button onClick={() => globalCounter.set($globalCounter + 1)}>
            Global counter: {$globalCounter}
          </button>
        </div>
      </div>
    </>
  );
}
