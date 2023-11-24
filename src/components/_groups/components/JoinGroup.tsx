import { useDisclosure } from '@mantine/hooks'
import { Modal, Button } from '@mantine/core'

export const JoinGroup = () => {
  const [opened, { open, close }] = useDisclosure(false)

  return (
    <>
      <Modal
        opened={opened}
        onClose={close}
        title="Dołącz do grupy"
        overlayProps={{
          opacity: 0.55,
          blur: 3,
        }}
        centered
      >
        {/* Modal content */}
      </Modal>

      <Button onClick={open}>Dołącz do grupy</Button>
    </>
  )
}
