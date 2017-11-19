import React, { Component } from 'react'
import Slider from "../Pages/Slider";

class Header extends Component {
    
    render() {
        const get_img={
            name: 'webpack'
        }
        return (
            <section className="block-header">
                
                <div className="container">
                    
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            
                            <div className="navbar">
                                <a className="navbar-brand logo" href="#"><img src={`../../images/${get_img.name}.png`} alt={this.props.name}/></a>
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
                <Slider/>
            </section>
        )
    }
}

export default Header