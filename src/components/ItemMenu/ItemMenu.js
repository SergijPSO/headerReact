import React from 'react';
import './ItemMenu.css'

class itemMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isActive: false
        }
    }

    // handleClick = () => {
    //     this.setState( {
    //         isActive: !this.state.isActive
    //     })
    // }

    render(){
        let currentClass = 'menu-item';

      // if (this.state.isActive) {
      //   currentClass += ' active-item';
      // }

        return(
           <span className={currentClass}>{this.props.name}</span>
        )

    }
}

export default itemMenu