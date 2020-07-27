import React from 'react';
import './ItemMenu.css'

class itemMenu extends React.Component {

    handleClick = () => {
        console.log('wweww')
    }

    render(){

        let k = 0;
        return(
          this.props.headerItems.map(el => {
              return <span className="menu-item" onClick={this.handleClick} key = {k++}>{el.name}</span>
          })

        )
    }
}

export default itemMenu