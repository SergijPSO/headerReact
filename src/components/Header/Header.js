import React from 'react';
import ItemList from '../ItemList/ItemList';
import './Header.css';

import headerMenuItems from '../values/headerMenuItems'

class Header extends React.Component {

  render() {
  console.log(headerMenuItems);
    return(
      <nav className="header-menu" >
        <ItemList />
      </nav>
    )
  }
}

export default Header;