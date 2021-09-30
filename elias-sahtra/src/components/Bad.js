import React,{Component} from "react"
class Bad extends Component{
    render(){
        return(
            <>
            <div>Hi I am Bad</div>
            <div>{this.props.handleChange}</div>
            <p>{this.props.input.split("").map((value)=>{
            return "BLA"
                    
                }
            )}</p>
            </>
        )
    }
}
export default Bad