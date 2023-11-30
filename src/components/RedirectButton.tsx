import { Link } from 'react-router-dom'
import { Text, Box } from '@mantine/core'

type Props = {
  path: string
  name: string
}

const anchorStyles = {
  textDecoration: "none",
}

export const RedirectButton = ({ path, name }: Props) => {
  return (
    <Box w="100%" ta="center" style={{border: "1px solid #E85A4F", "border-radius":"20px"}}>
      <Link to={path} style={anchorStyles}>
        <Text c="white" ff="Oswald">{name}</Text>
      </Link>
    </Box>
  )
}
