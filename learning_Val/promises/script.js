const ul = document.querySelector("ul");

console.log(ul);

fetch("https://jsonplaceholder.typicode.com/users")
  .then((payload) => payload.json())
  .then((data) => {
    displayUser(data)
  });



function displayUser(arr) {
  for (let i = 0; i < arr.length; i++) {
    let user = document.createElement('ul');
    user.classList.add('hide')
    let button = document.createElement('button')
    button.innerText = 'Show posts'
    user.innerText = arr[i].name + ' ' + arr[i].address.city
    // user.dataset.id = arr[i].id
    user.classList.add('user-info')

    button.addEventListener('mouseover', () => {getUserPosts(arr[i].id, user)})
    button.addEventListener('click', () => {showUserPosts(user)
      if(button.innerText === 'Show posts'){
        button.innerText = 'Hide posts'
      }else{
        button.innerText = 'Show posts'
      }
    })
    user.append(button)
    ul.append(user)
  }
}

function getUserPosts(id, node) {
  console.log([node.children.length])
  console.log(node)
  if (node.children.length === 1) {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`)
        .then(res => res.json())
        .then(data => {
          console.log(data)

          const allTitles = data.map(title => {
            return title.title
          })

          allTitles.forEach(title => {
            let name = document.createElement('li')
            name.innerText = title
            name.className = 'user-title'
            node.append(name)
          })
        })
    }
  }
}

function showUserPosts(node){
  if (node.classList.contains('hide')) {
      node.classList.remove('hide')
    } else {
      node.classList.add('hide')
    }
}
// https://jsonplaceholder.typicode.com/posts?userId=3
