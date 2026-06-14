import { useState } from "react";
import type { UserType, PostsType } from "./types/types";

export default function User({
  user,
  deleteUser,
}: {
  user: UserType;
  deleteUser: (id: UserType["id"]) => void;
}) {
  const [show, setShow] = useState(false);
  const [posts, setPosts] = useState<PostsType[]>([]);
  const [isEditing, setIsEditing] = useState(false);
    const [name, setName] = useState(user.name)
    const [city, setCity] = useState(user.address.city)
    const [error, setError] = useState('Error')
    const [isDeleting, setIsDeleting] = useState(false)

    function handleSave(){
        
        fetch(`https://jsonplaceholder.typicode.com/users/${user.id}`, {
            method: 'PATCH',
            headers:{
                'Content-type': 'application/json'
            },
            body: JSON.stringify({
                ...user,
                name: name,
                address:{
                    ...user.address,
                    city: city
                }
            })
        }).then(res => {
            if(res.ok && res.status === 200){
                setIsEditing(false)
            }else{
                setError('Failed to PATCH')
            }
        })
        
    }

  function getUserPosts() {
    if (user.id) {
      fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          setPosts(data);
        });
    }
  }

  return (
    <ul className="hide user-info">
      {isEditing ? (
        <>
            <div>
                <input value={name} onChange={(event)=>setName(event.target.value)}/>
                <input value={city} onChange={(event)=> setCity(event.target.value)}/>
                <button onClick={handleSave}>Save</button>
          </div>
          <div className="error">{error}</div>
        </>
      ) : (
        <>
          <span>{name} {city}</span>
          {!isDeleting ? 
          <>
            <button onClick={() => setShow((b) => !b)} onMouseOver={getUserPosts}>
            {show ? "Hide posts" : "Show posts"}
            </button>
            <button onClick={() => setIsDeleting(true)}>Delete</button>
            <button onClick={() => setIsEditing(true)}>Edit</button>
          </>
          : null}
        </>
      )}
      {show &&
        posts.map(({ title, id }) => {
          return (
            <li className="user-title" key={id}>
              {title}
            </li>
          );
        })}

        {isDeleting ? (
        <>
          <div className="deletion-modal">
            <p>Are you sure you want to delete <strong>{name}</strong>?</p>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
            <button onClick={() => setIsDeleting(false)}>Cancel</button>
          </div>
        </>
      )
         : null}
    </ul>
  );
}
