import React from 'react'

import ItemMenu from '../ItemMenu/ItemMenu'
import {headerMenuItems} from "../values/headerMenuItems";

class ItemsList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: null
    }
  }

  handleClick = (id) => {
    this.setState({
        id: id
    })
  }

  render(){
    return(
      headerMenuItems.map((el, i) => {
        return(
          <ItemMenu
          className = {`menu-item ${el.id === this.state.id ? ' active-item' : ''} `}
          clickEvent ={this.handleClick}
          status = {this.state}
          key={i++}
          headerItems={headerMenuItems}
          name={el.name}
          id={el.id}
        />)
      })
    )
  }

}

export default ItemsList