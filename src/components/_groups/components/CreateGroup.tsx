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

export const CreateGroup = ({ setGroups }: Props) => {
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
      const response = await fetch('https://projekt-backend.onrender.com/group', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
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
        title="Stwórz grupę"
        overlayProps={{
          opacity: 0.55,
          blur: 3,
        }}
        centered
      >
        <form onChange={handleOnChange} onSubmit={handleOnSubmit}>
          <input required placeholder="Nazwa grupy" name="group_name" />
          <Button type="submit" variant="light" color="orange">
            Stwórz
          </Button>
        </form>
      </Modal>

      <Button onClick={open}>Stwórz grupę</Button>
    </>
  )
}
