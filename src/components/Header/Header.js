import React from 'react';
import ItemLIst from '../ItemList/ItemLIst';
import './Header.css';

class Header extends React.Component {

  render() {
    const menuItems = [
      {
        name: "Home",
        id:''
      },
      {
        name: "About Us",
        id:''
      },
      {
        name: "Services",
        id:''
      },
      {
        name: "Contacts",
        id:''
      }

    ];

    return(
      <nav className="header-menu" >
      <ItemLIst items={menuItems}/>
      </nav>
    )
  }
}

export default Header;