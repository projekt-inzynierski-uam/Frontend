import { Link } from 'react-router-dom'
import styles from '../styles.module.scss'

import { Group } from '../index'

export const GroupListItem = ({ id, name }: Group) => {
  return (
    <div className={styles.Group}>
      <span>{name || 'Brak nazwy'} </span>
      <Link to={id}>Przejdź do grupy</Link>
    </div>
  )
}
