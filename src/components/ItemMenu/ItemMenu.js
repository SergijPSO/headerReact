import React from 'react';

import './ItemMenu.css'


class ItemMenu extends React.Component {

  constructor(props){
    super(props)

    this.state = {
      isActive: false
    }

  }

  handleClick = () => {
    this.setState(state=> ({
      isActive: !state.isActive
    }));
  }

  render() {
    let key = 0;

    let className = this.props.className;

    return(

      this.props.itemsArr.map(item => {

        (!this.state.isActive) ? className = this.props.className : className = "active-item";

          return(
          <span className={className} key={key++} onClick={this.handleClick}>{item.name}</span>

        )
      })
    )
  }
}

export default ItemMenu