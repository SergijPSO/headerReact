import React from 'react'

import ItemMenu from '../ItemMenu/ItemMenu'
import {HeaderMenuItems} from "../values/HeaderMenuItems";

class ItemsList extends React.Component {

  render(){
    let k = 0;
    return(
      HeaderMenuItems.map(el => {
        return <ItemMenu key = {k++} headerItems={HeaderMenuItems} name={el.name} onClick={this.handleClick}/>
      })
    )
  }
}

export default ItemsList