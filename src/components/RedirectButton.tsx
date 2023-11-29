import { Link } from 'react-router-dom'
import { Text } from '@mantine/core'

type Props = {
  path: string
  name: string
}

export const RedirectButton = ({ path, name }: Props) => {
  return (
    <Link to={path}>
      <Text>{name}</Text>
    </Link>
  )
}
