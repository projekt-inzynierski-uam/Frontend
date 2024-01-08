import { useDisclosure } from '@mantine/hooks';
import { Modal, TextInput, Button, NumberInput, Combobox, useCombobox,InputBase,Input,ScrollArea} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState, useEffect } from 'react';
import { DateInput } from '@mantine/dates';

const CreateTaskGroupModal = ({groupId, userEmail}) => {
    const [dateend, setDateEnd] = useState(null);

    const form = useForm({
        initialValues: {
          title: '',
          points: 0
        },
    
        validate: {
          title: (value) => (value.length > 30 || value.length < 1 ? 'Zła długość tutyłu': null),
        },
    });

    const [opened, { open, close }] = useDisclosure(false);

    const createTaskGroup = async (data) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/createtaskgroup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })
        } catch (err) {
          console.error(err)
        }
      }

    return (
        <>
            <Modal opened={opened} onClose={close} title="Dodaj nowe zadanie" centered>
                <form onSubmit={form.onSubmit((values) => createTaskGroup({...values, email, dateend, userEmail, groupId}))}>
                    <TextInput
                        withAsterisk
                        label="Tytuł"
                        {...form.getInputProps('title')}
                    />
                    <NumberInput
                        withAsterisk
                        label="Ilość punktów za zadanie"
                        min={0}
                        max={99}
                        {...form.getInputProps('points')}
                    />
                    <DateInput
                        withAsterisk
                        value={dateend}
                        onChange={setDateEnd}
                        valueFormat="DD-MM-YYYY"
                        label="Data rozpoczecia"
                    />
                    <Button onClick={close} type="submit">Wyślij</Button>
                </form>
            </Modal>

            <Button onClick={() => {
                open(),
                setDateEnd(null)
                form.reset()
            }} bg="#E98074" style={{borderRadius:"50px", fontSize:"15px", fontWeight:"normal"}} ff={"Oswald"}>Dodaj nowe zadanie</Button>
        </>
    )
}

export default CreateTaskGroupModal