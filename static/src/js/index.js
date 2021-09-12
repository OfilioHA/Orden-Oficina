import 'bootstrap/dist/css/bootstrap.css';
import '../sass/index.scss';
import { App } from './app.jsx';
import ReactDom from 'react-dom';

ReactDom.render(
    <App />,
    document.getElementById('app')
)

async function peticion(){
    const data = await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log(data); 
} 

peticion();
console.log('Hello World');