import { useDisclosure } from '@mantine/hooks';
import { Modal, TextInput, Button} from '@mantine/core';
import { useForm } from '@mantine/form';

const CreateGroup = ({email, getData}) => {

    const [opened, { open, close }] = useDisclosure(false);

    const form = useForm({
        initialValues: {
          group_name: '',
        },
    
        validate: {
          group_name: (value) => (value.length > 25 || value.length < 1 ? 'Zła długość nazwy': null),
        },
    });

    const createGroup = async (data) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/group`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })
          getData()
        } catch (err) {
          console.error(err)
        }
      }

    return(
        <>
            <Modal opened={opened} onClose={close} title="Stwórz grupę" centered>
                <form onSubmit={form.onSubmit((values) => createGroup({...values, email}))}>
                    <TextInput
                        withAsterisk
                        label="Nazwa grupy"
                        {...form.getInputProps('group_name')}
                    />
                    <Button onClick={close} type="submit">Wyślij</Button>
                </form>
            </Modal>

            <Button onClick={() => {
                open(),
                form.reset()
                }} bg="#8E8D8A" h={48} style={{borderRadius:"10px", fontSize:"24px", fontWeight:"normal", width:"60%"}} ff={"Oswald"}>
                    Stwórz grupę
            </Button>
        </>
    )
}

export default CreateGroup