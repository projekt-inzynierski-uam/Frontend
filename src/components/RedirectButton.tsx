import { Link } from 'react-router-dom'
import '../styles/RedirectButton.css'

type Props = {
  path: string
  name: string
}

export const RedirectButton = ({ path, name }: Props) => {
  return (
    <Link to={path} className="redirect-button">
      <p>{name}</p>
    </Link>
  )
}
