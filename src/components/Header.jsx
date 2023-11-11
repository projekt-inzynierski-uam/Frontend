import '../styles/Header.css';
import {useCookies} from 'react-cookie';
//import {useState} from 'react';

const Header = () => {

  const [cookies] = useCookies(null)
  const userEmail = cookies.Email

  return (
    <div className="header">
      Hi, {userEmail}
    </div>
  );
};

export default Header;
