import { useDisclosure } from '@mantine/hooks';
import { Modal, TextInput, NumberInput, Button, Text} from '@mantine/core';
import { useForm } from '@mantine/form';

const EditObjectiveModal = ({objective, getData}) => {

    const form = useForm({
        initialValues: {
          title: objective.title,
          current_points: objective.current_points,
          max_points: objective.max_points
        },
    
        validate: {
          title: (value) => (value.length > 25 || value.length < 1 ? 'Zła długość tutyłu': null),
        },
    });

    const [opened, { open, close }] = useDisclosure(false);

    const editObjective = async (data) => {
        try {
          const response = await fetch(`${import.meta.env.VITE_DBSERVER}/editobjective/${objective.id}`, {
            method: 'PUT',
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
            <Modal opened={opened} onClose={close} title="Edytuj cel" centered>
                <form onSubmit={form.onSubmit((values) => editObjective({...values}))}>
                    <Text size="20px">Tytuł</Text>
                    <TextInput
                        withAsterisk
                        placeholder={objective.title}
                        {...form.getInputProps('title')}
                    />
                    <Text size="20px">Aktualna ilość punktów</Text>
                    <NumberInput
                        withAsterisk
                        placeholder={objective.current_points}
                        min={0}
                        max={99}
                        {...form.getInputProps('current_points')}
                    />
                    <Text size="20px">Maksymalna ilość punktów</Text>
                    <NumberInput
                        withAsterisk
                        placeholder={objective.max_points}
                        min={0}
                        max={99}
                        {...form.getInputProps('max_points')}
                    />
                    <Button bg="#E98074" size='md' onClick={close} type="submit">Wyślij</Button>
                </form>
            </Modal>

            <Button onClick={() => {
                open(),
                form.reset()
            }} bg="#E98074" style={{borderRadius:"50px", fontSize:"15px", fontWeight:"normal"}} ff={"Oswald"}>Edytuj</Button>
        </>
    )
}

export default EditObjectiveModal