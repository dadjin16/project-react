import React, {Component} from 'react'
import Lesson from "./Lesson"
class Course extends Component {
   constructor(props) {
       super(props)
       this.handleClick4=this.handleClick4.bind(this);
   }
   
    handleClick(){
      alert("View1");
    }
    handleClick2(content){
        alert(content);
    }
    handleClick3(){
        alert(this.props.name);
    }
    handleClick4(){
        alert(this.props.name);
    }
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
                    <div className="panel-footer">
                       
                       <div className="btn-group">
                           <button onClick={this.handleClick} type="button"className="btn btn-default">View1</button>
                           <button onClick={() => this.handleClick2("view2")} type="button" className="btn btn-success">View2</button>
                           <button  onClick={this.handleClick3.bind(this)} type="button" className="btn btn-danger">View3</button>
                           <button  onClick={this.handleClick4} type="button" className="btn btn-red">View4</button>
                       </div>
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default Course