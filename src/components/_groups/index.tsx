import styles from './styles.module.scss'
import Cookies from 'js-cookie'
import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import { Link } from 'react-router-dom'
import { CreateGroup } from './components/CreateGroup'
import { JoinGroup } from './components/JoinGroup'

async function fetchGroups() {
  const email = Cookies.get('Email')

  try {
    const response = await fetch(`https://projekt-backend.onrender.com/groups/${email}`)
    const groups: Group[] = await response.json()
    return groups
  } catch (error) {
    toast.error(`Wystąpił błąd w pobieraniu grup: ${error}`)
  }
}

export type Group = {
  id: string
  name: string
}

export const Groups = () => {
  const [groups, setGroups] = useState<Group[]>()

  useEffect(() => {
    fetchGroups().then((groups) => {
      if (Array.isArray(groups)) setGroups(groups)
    })
  }, [])

  return (
    <>
      <div>
        <CreateGroup />
        <JoinGroup />
      </div>
      <div className={styles.GroupsList}>
        <h2>Grupy</h2>
        {groups?.map(({ id, name }) => (
          <div key={id} className={styles.Group}>
            <span>{name || 'Brak nazwy'} </span>
            <Link to={id}>Przejdź do grupy</Link>
          </div>
        ))}
      </div>
    </>
  )
}
