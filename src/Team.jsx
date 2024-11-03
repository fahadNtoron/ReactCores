import { useState } from "react"

export default function Team(){

    const [team, setTeam] = useState(11);

    const add = a => {
        setTeam(team+a);
    }
    const rem = a => {
        setTeam(team-a)
    }


    const teamStyle = {
        border: '2px solid purple',
        margin: '15px',
        padding:'15px',
        borderRadius:'15px'
    }

    // work of useEffect start from here
    return(
        <div>
            <h3 style={teamStyle}>Players: {team} </h3>
            <button onClick={()=> add(1)}>Add Player</button><button onClick={()=> rem(2)}>Remove Player</button>
        </div>
    )
}