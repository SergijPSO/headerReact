import React from 'react';
import './ItemMenu.css'

class itemMenu extends React.Component {

    clickEvent = () => {
      this.setState( {
        id: this.props.id
      })
      // console.log(this.props.id)
    }

    render(){

      let currentClass = 'menu-item';

      if (this.props.status.isActive) {
        currentClass += ' active-item';
      }

      return(
         <span
           className={currentClass}
           onClick={this.clickEvent}
         >
           {this.props.name}
         </span>
      )

    }
}

export default itemMenu