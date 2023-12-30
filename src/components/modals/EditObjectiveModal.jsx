import { useDisclosure } from '@mantine/hooks';
import { Modal, TextInput, NumberInput, Button} from '@mantine/core';
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
                    <TextInput
                        withAsterisk
                        label="Tytuł"
                        placeholder={objective.title}
                        {...form.getInputProps('title')}
                    />
                    <NumberInput
                        withAsterisk
                        label="Aktualna ilość punktów"
                        placeholder={objective.current_points}
                        min={0}
                        max={99}
                        {...form.getInputProps('current_points')}
                    />
                    <NumberInput
                        withAsterisk
                        label="Maksymalna ilość punktów"
                        placeholder={objective.max_points}
                        min={0}
                        max={99}
                        {...form.getInputProps('max_points')}
                    />
                    <Button onClick={close} type="submit">Wyślij</Button>
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