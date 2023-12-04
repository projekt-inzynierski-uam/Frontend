import { useDisclosure } from '@mantine/hooks';
import { Modal, TextInput, Button} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useState } from 'react';
import { DateInput } from '@mantine/dates';

const CreateTaskModal = ({email}) => {

    const [datestart, setDateStart] = useState(null);
    const [dateend, setDateEnd] = useState(null);

    const form = useForm({
        initialValues: {
          title: '',
          startdate: datestart,
          enddate: dateend
        },
    
        validate: {
          title: (value) => (value.length > 30 || value.length < 1 ? 'Zła długość tutyłu': null),
        },
    });

    const [opened, { open, close }] = useDisclosure(false);

    const createTask= async (data) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/createtask`, {
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
                <form onSubmit={form.onSubmit((values) => createTask({...values, email, datestart, dateend}))}>
                    <TextInput
                        withAsterisk
                        label="Tytuł"
                        {...form.getInputProps('title')}
                    />
                    <DateInput
                        value={datestart}
                        onChange={setDateStart}
                        valueFormat="DD-MM-YYYY"
                        label="Data rozpoczecia"
                    />
                    <DateInput
                        value={dateend}
                        onChange={setDateEnd}
                        valueFormat="DD-MM-YYYY"
                        label="Data zakończenia"
                    />
                    <Button onClick={close} type="submit">Wyślij</Button>
                </form>
            </Modal>

            <Button onClick={() => {
                open(),
                form.reset()
            }} bg="#E98074" style={{borderRadius:"50px", fontSize:"15px", fontWeight:"normal"}} ff={"Oswald"}>Dodaj nowe zadanie</Button>
        </>
    )
}

export default CreateTaskModal