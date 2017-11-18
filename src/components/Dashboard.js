import React, { Component } from 'react';
import Header from "./includes/Header";
import Main from "./includes/Main";
import Footer from "./includes/Footer";

class Dashboard extends Component {
    render() {
        return (
            <section>
                <Header/>
                <Main/>
                <Footer/>
            </section>
        )
    }
}

export default Dashboard