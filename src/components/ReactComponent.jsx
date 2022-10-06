import { useStore } from '@nanostores/react';
import { useState } from 'react';
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
          style={{
            backgroundColor: `${$darkModeEnabled ? '#F0F0F0' : '#BFBFBF'}`,
            transition: 'all .3s linear',
          }}
        >
          Change theme
        </button>
      </div>
      <div
        className='react-component-wrapper component-wrapper'
        style={{
          backgroundColor: `${$darkModeEnabled ? '#111' : '#DDD'}`,
          transition: 'all .3s linear',
          border: '3px solid #ff0',
          boxShadow: `0 0 16px 0 ${
            $darkModeEnabled ? '#FF0' : '#FED000'
          }, inset 0 0 16px 0 ${$darkModeEnabled ? '#FF0' : '#fed000'}`,
        }}
      >
        <h1
          className='react-component'
          style={{
            color: `${$darkModeEnabled ? '#FF0' : '#FEED00'}`,
          }}
        >
          This is a React JavaScript Component
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
