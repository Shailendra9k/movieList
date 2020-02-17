import React from 'react';
import ReactDOM from 'react-dom';
import List from "./containers/List"

const App = () => {
    return (
        <>
        <h1>Movies List</h1>
        <List /></>
    )
};

ReactDOM.render(<App />, document.getElementById('root'));

