import React from 'react';
import './ItemMenu.css'

class itemMenu extends React.Component {

  clickEvent = () => {
    this.props.clickEvent(this.props.id)
  }

  render(){

    return(
      <span
        className={this.props.className}
        onClick={this.clickEvent}
      >
           {this.props.name}
      </span>
    )
  }
}

export default itemMenu