import GroupCreateModal from "./GroupCreateModal"
import GroupJoinModal from "./GroupJoinModal"
import "../styles/Groups.css"
import {useCookies} from 'react-cookie'
import GroupTile from "./GroupTile"
import { useState, useEffect } from "react"

const Groups = () => {
    
    const [cookies] = useCookies(null)
    const [groups, setGroups] = useState(null)
    const userEmail = cookies.Email

    const getGroups = async () => {
        try{
          const response = await fetch(`https://projekt-backend.onrender.com/groups/${userEmail}`)
          const json = await response.json()
          setGroups(json)
        } catch (err) {
          console.error(err)
        }
    }

    useEffect(() => {
        getGroups()
    }, [])

    return(
        <>
            <div className="groupbutton-container">
                <GroupCreateModal/>
                <GroupJoinModal/>
            </div>
            <div>
                <h2>Grupy</h2>
            </div>
            <div className="groups-container">
            {groups?.map((group) => <GroupTile id={group.id} name={group.name}/>)}
            </div>
        </>
        
    )
}

export default Groups