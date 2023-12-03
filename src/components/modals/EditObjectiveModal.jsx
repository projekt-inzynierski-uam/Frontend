import { Modal, Button } from '@mantine/core'
import { useDisclosure } from '@mantine/hooks';

const EditObjectiveModal = () => {

    const [opened, { open, close }] = useDisclosure(false);

    return (
        <>
            <Modal opened={opened} onClose={close} title="Edytuj cel">
                {/* Modal content */}
            </Modal>

            <Button onClick={open} bg="#E98074" style={{borderRadius:"50px", fontSize:"15px", fontWeight:"normal"}} ff={"Oswald"}>Edytuj</Button>
        </>
    )
}

export default EditObjectiveModal