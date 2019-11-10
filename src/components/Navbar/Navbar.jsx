import React, { Component } from 'react';
import './Navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = { name: {} }
    }
    render() {
        return (
            <div className="navbar">
                <div className="navbar-inner clearfix">
                    <div className="container">
                        <a className="brand" href="/">
                            <img src="//static2.cnodejs.org/public/images/cnodejs_light.svg" alt="logo" />
                        </a>
                        <ul>
                            <li><a href="/">首页</a></li>
                            
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar;