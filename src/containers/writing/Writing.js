import React from 'react';
import Article from '../../components/article/Article';
import SideNav from '../../components/sidenav/SideNav';
import Hashing from '../../documents/posts/Hashing.md';
// import { Route, Link } from 'react-router-dom'
import './Writing.scss';


class Writing extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log("TESTESTSETS")
        return (
          <div className="writing-container">
              <SideNav />
              <Article source={Hashing}/>
          </div>
        );
    }
}

export default Writing;


// const Writing = () => (
//   <div className="writing-container">
//       <SideNav />
//       <Article source={this.props.params.post}/>
//   </div>
// )

// export default Writing;
