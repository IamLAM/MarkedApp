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
/*
*/
///let mark=require("marked");
const ReactMarkdown = require('react-markdown');
const data=`
# Marked Library\n
## Learning preview data\n
### You can find more info in Marked.js web page
[Marked.js](https://marked.js.org)\n
# Technologies\n
-React
-Marked
-HTML
-CSS
\n 
#Bold word
**marked**
`

class PreviewComponent extends React.Component{

    constructor(props){
        super(props);
        this.state={
            markedPreview:data
        }
        this.verifyChanges = this.verifyChanges.bind(this);
    }

  verifyChanges(e) {
    this.setState({
      markedPreview: e.target.value
    });
    console.log(this.state.markedPreview);
    return this.state.markedPreview;
  }

  convertToMark(){
        var dataMarked=ReactMarkdown(this.state.markedPreview);
        console.log(dataMarked);
        return {__html:dataMarked};

  }



    render(){

        return(

            <div id="container">
              <textarea id="editor" name="text-editor" onChange={this.verifyChanges} defaultValue={this.state.markedPreview} cols="30" rows="10"></textarea>
               
          
            <div id="preview" dangerouslySetInnerHTML={this.convertToMark()}></div>
            </div>
        
           
        
        );
    }
}

ReactDOM.render(<PreviewComponent/>,document.getElementById('container'));
//ReactDOM.render(<ReactMarkdown source={data}/>,document.getElementById('preview'))