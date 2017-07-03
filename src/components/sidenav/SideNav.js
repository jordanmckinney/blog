import React from 'react';
import './SideNav.scss';
import { Link } from 'react-router-dom'


class SideNav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="sidenav">
          </div>
        );
    }
}

export default SideNav;


// const SideNav = () => (
//     <div className="sidenav">
//       <li className="series-title">Blockchain Series</li>
//       <div className="series-body">
//         <li><Link to="/writing/hashing" className="published">Hashing</Link> </li>
//         <li className="unpublished">Blockchain</li>
//         <li className="unpublished">Bitcoin</li>
//         <li className="unpublished">Ethereum</li>
//         <li className="unpublished">DAOs</li>
//       </div>
//     </div>
// )
