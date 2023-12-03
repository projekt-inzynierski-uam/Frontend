import { Link } from 'react-router-dom'
import { Text, Box, Image, Group } from '@mantine/core'

type Props = {
  path: string
  name: string
  icon: string
}

const anchorStyles = {
  textDecoration: "none",
}

export const RedirectButton = ({ path, name, icon }: Props) => {
  return (
    <Box w="100%" ta="center" style={{border: "1px solid #E85A4F", borderRadius:"20px"}}>
      <Link to={path} style={anchorStyles}>
      <Group justify='center'>
        <Image 
          src={icon}  
          fit="contain"
          height={23}
        />
        <Text c="white" ff="Oswald" fz="xl">{name}</Text>
      </Group>
      </Link>
    </Box>
  )
}
