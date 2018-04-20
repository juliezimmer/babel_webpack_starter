
import { person, sayHello } from './lib';

console.log(person.name);

console.log(sayHello(person.name));
console.log(sayHello("Brad"));

// labeling a function with async makes it automatically return a promise
async function getPosts(){
   // fetch is a new browser API standard that makes HTTP requests and returns data as a promise
   const response = await fetch ('https://jsonplaceholder.typicode.com/posts');
   const data = await response.json();
   return data;
}

getPosts().then(posts => console.log(posts));
