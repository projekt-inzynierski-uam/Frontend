import React from 'react'
import { useDisclosure, useSetState } from '@mantine/hooks'
import { Modal, Button } from '@mantine/core'
import { useState, useId } from 'react'
import Cookies from 'js-cookie'

type FormValues = {
  group_name: string
}

export const CreateGroup = () => {
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
      const response = await fetch(`https://projekt-backend.onrender.com/group`, {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify({ ...formValues, user_email: Cookies.get('Email') }),
      })

      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)

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
