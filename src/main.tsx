import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';
import './main.scss';
import { store } from './store/store';
import App from './App';

const container = document.getElementById('root') ?? document.body;

const root = createRoot(container);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
