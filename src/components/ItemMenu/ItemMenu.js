import React from 'react';
import './ItemMenu.css'

class itemMenu extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         isActive: false
    //     }
    // }

    render(){

          // console.log(this.handleClick)
        // console.log(this.props.status.isActive);

      let currentClass = 'menu-item';

      if (this.props.status.isActive) {
        currentClass += ' active-item';
      }

      return(
         <span className={currentClass} onClick={this.props.clickEvent}>{this.props.name}</span>
      )

    }
}

export default itemMenu