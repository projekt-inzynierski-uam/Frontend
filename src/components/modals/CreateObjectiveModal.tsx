import { useDisclosure } from '@mantine/hooks';
import { Modal, TextInput, NumberInput, Button} from '@mantine/core';
import { useForm } from '@mantine/form';

const CreateObjectiveModal = () => {

    const form = useForm({
        initialValues: {
          title: '',
          min_points: 0,
          max_points: 0
        },
    
        validate: {
          title: (value) => (value.length < 25 ? 'Maksymalna długość tytułu to 25 znaków': null)
        },
    });

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Dodaj nowy cel" centered>
                <form onSubmit={form.onSubmit((values) => console.log(values))}>
                    <TextInput
                        withAsterisk
                        label="Tytuł"
                        {...form.getInputProps('title')}
                    />
                    <NumberInput
                        withAsterisk
                        label="Minimalna ilość punktów"
                        min={0}
                        max={99}
                        {...form.getInputProps('min_points')}
                    />
                    <NumberInput
                        withAsterisk
                        label="Maksymalna ilość punktów"
                        min={1}
                        max={99}
                        {...form.getInputProps('max_points')}
                    />
                    <Button type="submit">Wyślij</Button>
                </form>
            </Modal>

            <Button onClick={() => {
                open(),
                form.reset()
            }} bg="#E98074" style={{borderRadius:"50px", fontSize:"15px", fontWeight:"normal"}} ff={"Oswald"}>Dodaj nowy cel</Button>
        </>
    )
}

export default CreateObjectiveModal