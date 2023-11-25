import Cookies from 'js-cookie'
import { useDisclosure } from '@mantine/hooks'
import { Modal, Button } from '@mantine/core'
import { useState } from 'react'

type FormValues = {
  group_name: string
}

export const JoinGroup = () => {
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
      const response = await fetch('https://projekt-backend.onrender.com/groupjoin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
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
