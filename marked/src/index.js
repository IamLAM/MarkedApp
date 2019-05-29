import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import * as serviceWorker from './serviceWorker';

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();


class PreviewComponent extends React.Component{

    constructor(props){
        super(props);
    }

    render(){

        return(<h1>previewing data</h1>);
    }
}

ReactDOM.render(<PreviewComponent/>,document.getElementById('preview'));