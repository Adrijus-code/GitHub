const ul = document.querySelector("ul");
console.time('test')
console.log(ul);
let array;
fetch("https://jsonplaceholder.typicode.com/users")
  .then((payload) => payload.json())
  .then((data) => displayUser(data));



function displayUser(arr){
  console.timeLog('test')
  for(let i = 0; i < arr.length; i++){
    let user = document.createElement('li');
    user.innerText = arr[i].name + arr[i].address.city
    ul.append(user)
  }
  console.timeLog('test')
}
console.log('global')
console.timeLog('test')

// https://jsonplaceholder.typicode.com/posts?userId=3