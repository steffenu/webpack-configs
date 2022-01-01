import axios from 'axios';
import '../css/styles.css';
import '../css/test.css';

axios.get("https://jsonplaceholder.typicode.com/todos/1")
.then(res => {
  console.log(res)
})
.catch(err => {
  console.error(err); 
})