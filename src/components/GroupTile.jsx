import {Link} from 'react-router-dom'
import "../styles/Groups.css"

const GroupTile = ({id, name}) => {

    return (
      <>
        <div className='group-container'>
            <h2>{name}</h2>
            <Link to={`${id}`} state={{ groupID: id}}><p>Przejdź do grupy</p></Link>
        </div>
      </>
    )
  }
  
  export default GroupTile
  
