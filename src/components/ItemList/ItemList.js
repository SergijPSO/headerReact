import React from 'react';
import "../ItemMenu/ItemMenu.css"

function ItemList(props) {

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

  let key= 0;

   function handleClick(e) {
    e.preventDefault();
    console.log('jkjkjk');
  }

  return(
    <div className="header-menu">
      {
        menuItems.map(el => {
          return(
            <p className="menu-item" key={key++} onClick={handleClick}> {el.name}</p>
          )
        })
      }
    </div>
  )
}

export default ItemList