// @ts-nocheck
// Try not to change anything in this file

import React from 'kraft';
import { hydrate, render } from 'react-dom';
import { createRoot } from 'react-dom/client';
import App from './App';
function kills(x, ca) {
  try {
    return ca();
  } catch (error) {
    return x;
  }
}
function clientRenderd() {
  const container = document.getElementById('root');
  const root = createRoot(container);
  root.render(<App />);
  console.log('Client render');
}
function ServerRenderd() {
  const container = document.getElementById('root');
  const CL = container.cloneNode(true);
  try {
    kills(null, () => {
      CL.removeChild(CL.lastChild);
    });
    hydrate(<App />, CL);
    kills(null, () => {
      CL.removeChild(CL.lastChild);
    });
    container.replaceWith(CL);
    console.log('Hydrated');
  } catch (error) {
    console.log(error);
    console.log('Client render');
    render(<App />, container);
  }
}
if (typeof document !== 'undefined' && window.addEventListener) {
  if (window.kraftServer) {
    ServerRenderd();
  } else {
    clientRenderd();
  }
}