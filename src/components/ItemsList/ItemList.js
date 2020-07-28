import React from 'react'

import ItemMenu from '../ItemMenu/ItemMenu'
import {headerMenuItems} from "../values/headerMenuItems";

class ItemsList extends React.Component {

  render(){

    return(
      headerMenuItems.map((el, i) => {
        return <ItemMenu key={i++} headerItems={headerMenuItems} name={el.name} />
      })
    )
  }
}

export default ItemsList