import React, {Component} from 'react'
import Lesson from "./Lesson"
class Course extends Component {
    render() {
        return (
            <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
                <div className="panel panel-info">
                    <div className="panel-heading">
                        <h3 className="panel-title">{this.props.name}</h3>
                    </div>
                    <div className="panel-body">
                    <p>{this.props.children}</p>
                       <p>{this.props.time}</p>
                       <p>{this.props.free}</p>
                       <Lesson/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Course