import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from 'GlobalStyles';
import { App } from 'components/App/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
