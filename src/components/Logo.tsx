import { Title, Image, Group } from '@mantine/core' 
import crossImage from '../assets/x-mark.png'

export const Logo = () => {
  return (
    <>
      <Group gap="xs">
        <Image
          src={crossImage}
        />
        <Title ff="Oswald" order={2} c='white'>Sortorio</Title>
      </Group>
    </>
  )
}
