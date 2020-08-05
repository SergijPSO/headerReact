import React from 'react'

import ItemMenu from '../ItemMenu/ItemMenu'
import {headerMenuItems} from "../values/headerMenuItems";

class ItemsList extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      id: '0'
    }
  }

  handleClick = (...id) => {
    this.setState({
        id: Number(id)
    })
  }

  render(){
    return(
      headerMenuItems.map((el, i) => {

        let elementClass = 'menu-item'

        if(el.id === this.state.id ) {
          console.log(el);
          elementClass = elementClass +  ' active-item';
        }

        return(
          <ItemMenu
          className ={elementClass}
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