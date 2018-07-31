import React from 'react';
import ReactDOM from 'react-dom';
import Test from './app.jsx';

window.testComponentReactRender = function(target, id, dxContext) {
    ReactDOM.render(<Test id={id} dxContext={dxContext}/>, document.getElementById(target));
};