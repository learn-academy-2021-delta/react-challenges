import React,{Component} from "react"
class Kanye extends Component{
    render(){
        return(
            <>
            <div>Hi I am Kanye</div>
            <div>{this.props.handleChange}</div>
            <p>I am gonna let you finish but {this.props.input}</p>
            </>
        )
    }
}
export default Kanye