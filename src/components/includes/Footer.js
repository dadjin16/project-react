import React, { Component } from 'react'

class Footer extends Component {
    render() {
        return (
            <section className="block-footer">
                
                <div className="container">
                    
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                            <div className="text-center">This footer will always be positioned at the bottom of the page, but <strong>not fixed</strong>.</div>
                        </div>
                    </div>
                    
                </div>
                
            </section>
        )
    }
}

export default Footer