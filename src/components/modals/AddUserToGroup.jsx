import { useDisclosure } from '@mantine/hooks';
import { Modal, TextInput, Button} from '@mantine/core';
import { useForm } from '@mantine/form';

const AddUserToGroup = ({groupId}) => {

    const [opened, { open, close }] = useDisclosure(false);
    
    const form = useForm({
        initialValues: {
          email: '',
        },
    });

    const AddMember = async (data) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/groupjoin`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
          })
        } catch (err) {
          console.error(err)
        }
      }

    return(
        <>
            <Modal opened={opened} onClose={close} title="Zaproszenie do grupy" centered>
                <form onSubmit={form.onSubmit((values) => AddMember({...values, groupId}))}>
                    <TextInput
                        withAsterisk
                        label="Email użytkownika"
                        {...form.getInputProps('email')}
                    />
                    <Button onClick={close} type="submit">Wyślij</Button>
                </form>
            </Modal>

            <Button onClick={() => {
                open(),
                form.reset()
                }} bg="#8E8D8A" h={48} style={{borderRadius:"10px", fontSize:"24px", fontWeight:"normal", width:"60%"}} ff={"Oswald"}>
                    Wyślij zaproszenie do grupy
            </Button>
        </>
    )
}

export default AddUserToGroup