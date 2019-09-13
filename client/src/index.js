import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import authentication from './services/authentication';

authentication.loadingStatus.then(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
});
