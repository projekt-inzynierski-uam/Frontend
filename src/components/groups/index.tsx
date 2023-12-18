import { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'

import { JoinGroup } from './components/JoinGroup'
import { GroupListItem } from './components/GroupListItem'
import { CookieName } from '../../lib/constants/cookies'

export type Group = {
  id: string
  name: string
}

async function fetchGroups() {
  const email = Cookies.get(CookieName.EMAIL)

  try {
    const response = await fetch(`${import.meta.env.VITE_DBSERVER}/groups/${email}`)
    const groups: Group[] = await response.json()
    return groups
  } catch (error) {
    toast.error(`Wystąpił błąd w pobieraniu grup: ${error}`)
  }
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
        <JoinGroup setGroups={setGroups} />
      </div>
      <div className={styles.GroupsList}>
        <h2>Grupy</h2>
        {groups?.map(({ id, name }) => (
          <GroupListItem key={id} id={id} name={name} setGroups={setGroups} />
        ))}
      </div>
    </>
  )
}
