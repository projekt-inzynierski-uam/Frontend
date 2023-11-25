import { useState, useEffect } from 'react'
import { toast } from 'react-toastify'
import Cookies from 'js-cookie'

async function fetchGroups() {
  const email = Cookies.get('Email')

  try {
    const response = await fetch(`https://projekt-backend.onrender.com/groups/${email}`)
    const groups = await response.json()
    return groups
  } catch (error) {
    console.error(`Fetching groups failed: ${error}`)
    toast.error('Wystąpił błąd w pobieraniu grup')
  }
}

export const Groups = () => {
  const [groups, setGroups] = useState([])

  useEffect(() => {
    fetchGroups().then(setGroups)
  }, [])

  console.log({ groups })

  return <div>group</div>
}
