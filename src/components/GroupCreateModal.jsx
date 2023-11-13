import { useDisclosure } from '@mantine/hooks';
import { Modal, Button } from '@mantine/core';
import { useState } from "react"
import {useCookies} from 'react-cookie'

const GroupCreateModal = () => {
  const [opened, { open, close }] = useDisclosure(false);

  const [cookies] = useCookies(null)
  const userEmail = cookies.Email
  const [groupData, setGroupData] = useState({group_name:null,user_email:userEmail})


  const handleGroupNameChange = (e) => {
    const {group_name, value} = e.target

    setGroupData(groupData => ({
      ...groupData,
      group_name: value
    }))
  }

  const postGroup = async () => {
    try {
      const response = await fetch(`https://projekt-backend.onrender.com/group`, {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(groupData),
      })

    }catch(err){
      console.error(err)
    }
  }

  return (
    <>
      <Modal opened={opened} onClose={close} title="Stwórz grupę">
        <form>
            <input
                required
                placeholder="Nazwa grupy"
                name="group_name"
                onChange={handleGroupNameChange}

              />
            <Button variant="light" color="orange" onClick={postGroup}>Stwórz</Button>
        </form>
      </Modal>

      <Button variant="light" color="orange" onClick={open}>Stwórz Grupę</Button>
    </>
  );
}

export default GroupCreateModal