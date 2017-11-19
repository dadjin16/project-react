import React, {Component} from 'react';
// const divStyle = {     margin: '40px',     border: '5px solid pink',
// backgroundColor: 'green'   };
import Course from "../Pages/Course";

class Main extends Component {
    render() {
        const items=[
            {
                name:"Reactjs",
                time:"35h",
                free:true,
                desc:"Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui."
            },
            {
                name:"NoteJs",
                time:"55h",
                free:false,
                desc:"Donec id elit non mi porta gravida at eget metus.tortor mauris condimentum nibh"
            },
            {
                name:"Andriod",
                time:"15h",
                free:true,
                desc:" Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui"
            }
        ]
       const elmCouse = items.map((item,index) => <Course name={item.name} time={item.time} free={item.free} key={index}>{item.desc}</Course>)
        return (
            <section className="block-content">
                <div className="container">
                    <div className="row">
                        {elmCouse}
                    </div>
                </div>
            </section>

        )
    }
}

export default Main