import React from 'react';
import ReactDOM from 'react-dom';

const BrowserInfo = () => {
  const browserDetails = navigator.userAgent;
  return <h4>Browser's details: {browserDetails}</h4>;
};

ReactDOM.render(
  <React.StrictMode>
    <BrowserInfo />
  </React.StrictMode>,
  document.getElementById('root')
);
