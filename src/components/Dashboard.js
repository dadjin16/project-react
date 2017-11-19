import React, { Component } from 'react';
import Header from "./includes/Header";
import Main from "./includes/Main";
import Footer from "./includes/Footer";
import 'bootstrap/dist/css/bootstrap.css';
import '../css/template.css';

class Dashboard extends Component {
    render() {
        return (
            <section>
                <Header name="Hình ảnh logo"/>
                <Main/>
                <Footer/>
            </section>
        )
    }
}

export default Dashboard