import { useEffect, useState } from "react"
import "./Friend.css"
import SingleF from "./SingleF";

export default function Friends(){

    const [friends, setFriends] = useState([]);
    useEffect( ()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(data=>setFriends(data))
    } ,[])
    return(
        <div className="ok">
            <h3>Friends:{friends.length}</h3>
            {
                friends.map(friend => <SingleF friend={friend}></SingleF>)
            }
        </div>


    )
}