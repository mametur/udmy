// import react and react dom lib

import React from 'react';
import ReactDom from 'react-dom';
//creat react component 

const App = () => {
    return <div>Hi Mame!</div>
};

// show react component on the screen

ReactDom.render(
    <App />, document.querySelector('#root')
);
