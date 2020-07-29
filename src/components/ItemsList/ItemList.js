import React from 'react'

import ItemMenu from '../ItemMenu/ItemMenu'
import {headerMenuItems} from "../values/headerMenuItems";

class ItemsList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      isActive: false
    }
  }

  handleClick = () => {
    this.setState( {
      isActive: !this.state.isActive
    })
  }

  render(){

    return(
      headerMenuItems.map((el, i) => {
        return <ItemMenu clickEvent ={this.handleClick} status = {this.state} key={i++} headerItems={headerMenuItems} name={el.name} />
      })
    )
  }
}

export default ItemsList