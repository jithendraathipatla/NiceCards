import React,{useState, useEffect} from 'react';

import ReactDOM from 'react-dom';
import Card from "./Cards";

const App = () => {
  
    return (
        <div>
         <h1 style={{textAlign:"center"}}>Profile Images</h1>
         <Card/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));

