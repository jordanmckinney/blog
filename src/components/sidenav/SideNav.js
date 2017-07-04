import React from 'react';
import './SideNav.scss';
import { Link } from 'react-router-dom'


class SideNav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {'visible': true, 'class': 'sidenav-visible'}
  }

  handleClick() {
    if(this.state.visible){
        this.setState({'visible': false, 'class': 'sidenav-hidden'})
    } else {
        this.setState({'visible': true, 'class': 'sidenav-visible'})
    }
  }

  render() {
    return (
      <div className={this.state.class}>
        <i className="fa fa-bars fa-lg" onclick="handleClick()"></i>
        <li className="series-title">Blockchain Series</li>
          <div className="series-body">
            <li><Link to="/writing/hashing" className="published">Hashing</Link> 
            </li>
            <li className="unpublished">Blockchain</li>
            <li className="unpublished">Bitcoin</li>
            <li className="unpublished">Ethereum</li>
            <li className="unpublished">DAOs</li>
          </div>
      </div>
    );
  }
}

export default SideNav;
