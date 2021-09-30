import React,{Component} from "react"
class Good extends Component{
    render(){
        return(
            <>
            <div>Hi I am Good</div>
            <div>{this.props.handleChange}</div>
            <p>I hear you saying {this.props.input}.</p>
            </>

        )
    }
}
export default Good