import { useStore } from '@nanostores/react';
import { useState } from 'react';
import { globalCounter } from '../store';
import { darkModeEnabled } from '../store';
import '../styles/styles.css';

export default function ReactTypeScriptComponent() {
  const [counter, setCounter] = useState(0);
  const $globalCounter = useStore(globalCounter);
  const $darkModeEnabled = useStore(darkModeEnabled);
  return (
    <>
      <div
        className='react-ts-component-wrapper component-wrapper'
        style={{
          backgroundColor: `${$darkModeEnabled ? '#111' : '#DDD'}`,
          transition: 'all .3s linear',
          border: '3px solid #007acc',
          boxShadow: '0 0 16px 0px #007acc, inset 0 0 16px 0px #007acc',
        }}
      >
        <h1 className='react-ts-component' style={{ color: '#007acc' }}>
          This is a React TypeScript Component
        </h1>
        <div className='buttons-wrapper'>
          <button
            onClick={() => setCounter((prev) => prev + 1)}
            style={{
              backgroundColor: `${$darkModeEnabled ? '#F0F0F0' : '#BFBFBF'}`,
              transition: 'all .3s linear',
            }}
          >
            Component counter: {counter}
          </button>
          <button
            onClick={() => globalCounter.set($globalCounter + 1)}
            style={{
              backgroundColor: `${$darkModeEnabled ? '#F0F0F0' : '#BFBFBF'}`,
              transition: 'all .3s linear',
            }}
          >
            Global counter: {$globalCounter}
          </button>
        </div>
      </div>
    </>
  );
}
