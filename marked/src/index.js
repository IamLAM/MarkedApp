import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

const ReactMarkdown = require('react-markdown');

class PreviewComponent extends React.Component{

     render(){
        var  prev=document.getElementById('editor').value;
        console.log(prev);
        return <div id="preview" dangerouslySetInnerHTML={{__html:ReactMarkdown(prev)}}></div>
          
        
    
    }
}



function review(){
ReactDOM.render(<PreviewComponent/>,document.getElementById('preview'));
//ReactDOM.render(<ReactMarkdown source={data}/>,document.getElementById('preview'))

}

review();