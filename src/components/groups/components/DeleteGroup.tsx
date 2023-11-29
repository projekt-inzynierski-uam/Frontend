import { Group } from '../'

type Props = {
  id: string
  setGroups: React.Dispatch<React.SetStateAction<Group[] | undefined>>
}

export const DeleteGroup = ({ id, setGroups }: Props) => {
  const handleOnClick = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_DBSERVER}/groups/${id}`, {
        method: 'DELETE',
      })
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

      setGroups((prevState = []) => prevState.filter((item) => item.id !== id))
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <button onClick={handleOnClick}>Usuń</button>
    </>
  )
}
