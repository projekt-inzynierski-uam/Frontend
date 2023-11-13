import { Link } from 'react-router-dom';
import '../styles/RedirectButton.css';

const RedirectButton = ({to, text}) => {
  return (
    <Link to={to} className="redirect-button">
      <p>{text}</p>
    </Link>
  );
};

export default RedirectButton;
