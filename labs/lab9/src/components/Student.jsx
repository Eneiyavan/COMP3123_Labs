/**
 * Student will be defined as a class component
 default props 
 */
import { Component } from "react"

class Student extends Component{
    static defaultProps ={
        lastname: "Unknown"
    } 
    state = {
        result: "PASS"
    }
    
    toggleResult = () =>{
        this.setState(this.state.result=== "PASS"  ? "FAIL": "PASS")
    } 
    render(){
        const { firstname, lastname } = this.props
        return(
            <aside classname="card">
                <h3>
                    Student: {firstname} {lastname}
                </h3>

                <p>Result: {this.state.result}</p>
                <button onClick={this.toggleResult}>Toggle result</button>
                
            </aside>

        )
    }
}
export default Student