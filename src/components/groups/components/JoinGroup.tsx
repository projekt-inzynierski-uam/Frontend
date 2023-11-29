import { useState } from 'react'
import Cookies from 'js-cookie'
import { useDisclosure } from '@mantine/hooks'
import { Modal, Button } from '@mantine/core'

import { Group } from '../'

type FormValues = {
  group_name: string
}

type Props = {
  setGroups: React.Dispatch<React.SetStateAction<Group[] | undefined>>
}

export const JoinGroup = ({ setGroups }: Props) => {
  const [opened, { open, close }] = useDisclosure(false)

  const [formValues, setFormValues] = useState<FormValues>({
    group_name: '',
  })

  const handleOnChange = (event: React.FormEvent<HTMLFormElement>) => {
    const { name, value } = event.target as HTMLInputElement

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleOnSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    try {
      const response = await fetch(`${import.meta.env.VITE_DBSERVER}/groupjoin`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formValues, user_email: Cookies.get('Email') }),
      })

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

      setGroups((prevState = []) => [
        ...prevState,
        { id: formValues.group_name, name: formValues.group_name },
      ])

      close()
      setFormValues({ group_name: '' })
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Dołącz do grupy"
        overlayProps={{
          opacity: 0.55,
          blur: 3,
        }}
        centered
      >
        <form onChange={handleOnChange} onSubmit={handleOnSubmit}>
          <input required placeholder="Nazwa grupy" name="group_name" />
          <Button type="submit" variant="light" color="orange">
            Dołącz
          </Button>
        </form>
      </Modal>

      <Button onClick={open}>Dołącz do grupy</Button>
    </>
  )
}
