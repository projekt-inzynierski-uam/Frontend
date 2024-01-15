import { useDisclosure } from '@mantine/hooks';
import { Modal, TextInput, NumberInput, Button, Text} from '@mantine/core';
import { useForm } from '@mantine/form';

const CreateObjectiveModalGroup = ({getData, groupId}) => {

    const form = useForm({
        initialValues: {
          title: '',
          min_points: 0,
          max_points: 0
        },
    
        validate: {
          title: (value) => (value.length > 25 || value.length < 1 ? 'Zła długość tutyłu': null),
        },
    });

    const [opened, { open, close }] = useDisclosure(false);

    const createObjectiveGroup = async (data) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/createobjectivegroup`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })
          getData()
        } catch (err) {
          console.error(err)
        }
      }

    return (
        <>
            <Modal opened={opened} onClose={close} title="Dodaj nowy cel" centered>
                <form onSubmit={form.onSubmit((values) => createObjectiveGroup({...values, groupId}))}>
                    <Text size="20px">Tytuł</Text>
                    <TextInput
                        withAsterisk
                        {...form.getInputProps('title')}
                    />
                    <Text size="20px">Minimalna ilość punktów</Text>
                    <NumberInput
                        withAsterisk
                        min={0}
                        max={99}
                        {...form.getInputProps('min_points')}
                    />
                    <Text size="20px">Maksymalna ilość punktów</Text>
                    <NumberInput
                        withAsterisk
                        min={1}
                        max={99}
                        {...form.getInputProps('max_points')}
                    />
                    <Button bg="#E98074" size='md' onClick={close} type="submit">Wyślij</Button>
                </form>
            </Modal>

            <Button onClick={() => {
                open(),
                form.reset()
            }} bg="#E98074" style={{borderRadius:"50px", fontSize:"15px", fontWeight:"normal"}} ff={"Oswald"}>Dodaj nowy cel</Button>
        </>
    )
}

export default CreateObjectiveModalGroup