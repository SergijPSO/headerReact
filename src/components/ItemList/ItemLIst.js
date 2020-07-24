import React from 'react';

import ItemMenu from '../ItemMenu/ItemMenu'



export default class ItemLIst extends React.Component {

  render() {
    let itemsArr = this.props.items

    return(
      <ItemMenu itemsArr = {itemsArr} className="menu-item"/>
    )
  }

}
