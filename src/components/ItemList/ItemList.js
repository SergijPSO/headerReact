import React from 'react'

import ItemMenu from '../ItemMenu/ItemMenu'
import {headerMenuItems} from "../values/headerMenuItems";

class itemList extends React.Component {

  render(){
    return(
      <ItemMenu headerItems={headerMenuItems}/>
    )
  }
}

export default itemList