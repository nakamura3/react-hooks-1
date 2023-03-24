import React from 'react';
import ReactDOM from 'react-dom/client';
import Counter1 from './Counter1';
import Counter2 from './Counter2';
import Counter3 from './Counter3';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Counter1 />
    <Counter2 />
    <Counter3 />
  </React.StrictMode>
);

