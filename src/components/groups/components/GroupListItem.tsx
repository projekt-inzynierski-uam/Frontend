import { Link } from 'react-router-dom'
import styles from '../styles.module.scss'

import { Group } from '../index'
import { DeleteGroup } from './DeleteGroup'

type Props = {
  id: string
  name: string
  setGroups: React.Dispatch<React.SetStateAction<Group[] | undefined>>
}

export const GroupListItem = ({ id, name, setGroups }: Props) => {
  return (
    <div className={styles.Group}>
      <span>{name || 'Brak nazwy'} </span>
      <Link to={id}>Przejdź do grupy</Link>
      <DeleteGroup id={id} setGroups={setGroups} />
    </div>
  )
}
