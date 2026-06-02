import {useState} from 'react'
import type { UserType, PostsType } from './types/types'

export default function User({  user, deleteUser  }: {user:UserType; deleteUser:(id:UserType['id'])=>void}){
    const [show, setShow] = useState(false)
    const [posts, setPosts] = useState<PostsType[]>([])

    function getUserPosts() {
        if (user.id) {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${user.id}`)
            .then(res => res.json())
            .then(data => {
            console.log(data)
                setPosts(data)
            })
    }
    }

    return(
        <ul className="hide user-info">
            {user.name} {user.address.city}
            <button onClick={()=>setShow(b=>!b)} onMouseOver={getUserPosts}>{show ? 'Hide posts' : 'Show posts'}</button><button onClick={()=>deleteUser(user.id)}>Delete</button>
            {show && posts.map(({title, id}) => {
                return <li className='user-title' key={id}>{title}</li>
            })}
        </ul>
    )
}