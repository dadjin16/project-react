import 'bootstrap/dist/css/bootstrap.css';
import '../../css/template.css';
import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <div className="block-header">
                
                <div className="container">
                    
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            
                            <div className="navbar">
                                <a className="navbar-brand" href="#">Logo</a>
                                <ul className="nav navbar-nav">
                                    <li className="active">
                                        <a href="#">Home</a>
                                    </li>
                                    <li>
                                        <a href="#">About</a>
                                    </li>
                                    <li>
                                        <a href="#">Product</a>
                                    </li>
                                    <li>
                                        <a href="#">Contact</a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                    
                </div>
                
            </div>
        )
    }
}

export default Header