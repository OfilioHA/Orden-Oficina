import '../CSS/index.css';
import React from 'react';
import ReactDom from 'react-dom';

ReactDom.render(
    <h1>Hello JSX</h1>,
    document.getElementById('app')
)

async function peticion(){
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log(data); 
} 

peticion();
console.log('Hello World');