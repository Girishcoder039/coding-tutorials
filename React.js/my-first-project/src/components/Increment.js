import React ,{Component} from "react";

export class Increment extends Component{
    constructor(props){
        super(props);
        this.state={ count:0 }
        this.increment1 = this.increment1.bind(this);
    }
    increment1(){
        this.setState({
count:this.state.count+1
        });
    }
    render(){
        return(
            <div>
                 {this.state.count}
                 <button onClick={this.increment1}>increment</button>
            </div>
        )
    }
}

export default Increment