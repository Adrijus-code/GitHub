const ul = document.querySelector("ul");

console.log(ul);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((payload) => payload.json())
  .then((data) => {
    displayUser(data)
    const allUsers = document.querySelectorAll('.user-info')
    allUsers.forEach(user=>{
      user.addEventListener('click', getUserPosts)
    })
  });



function displayUser(arr){
  for(let i = 0; i < arr.length; i++){
    let user = document.createElement('ul');
    user.innerText = arr[i].name + ' ' + arr[i].address.city
    user.dataset.id = arr[i].id
    user.className = 'user-info'
    ul.append(user)
  }
}

function getUserPosts(e){
  if(e.target.dataset.id){
    const userId = e.target.dataset.id
    console.log(e.target)
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)

        const allTitles = data.map(title=>{
          return title.title
        })

        allTitles.forEach(title=>{
          let name = document.createElement('li')
          name.innerText = title
          name.className = 'user-title'
          e.target.append(name)
        })
      })
  }
}

// https://jsonplaceholder.typicode.com/posts?userId=3
