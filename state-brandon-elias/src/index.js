import reactDom from "react-dom";
import { Component } from "react/cjs/react.production.min";
import App from "./App"
import "./App.css"
class Item extends Component{
  render(){
    return(
      <App/>
    )
  }
}
reactDom.render (<Item/>, document.querySelector("#root"))