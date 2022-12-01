import axios from "axios";
import React from "react";
import ReactDOM from "react-dom";
import baseUrl from './config'

console.log(baseUrl);

const App = () =>{
    //127.0.0.1:8080/
    axios(`${baseUrl}/api/v1/books`).then(books=>{
        console.log(books);
    })
    return <div>My first component</div>
}

export default App;