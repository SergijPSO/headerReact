import React from 'react';
import ItemList from '../ItemList/ItemList';
import './Header.css';

class Header extends React.Component {

  render() {

    return(
      <nav className="header-menu" >
        <ItemList />
      </nav>
    )
  }
}

export default Header;