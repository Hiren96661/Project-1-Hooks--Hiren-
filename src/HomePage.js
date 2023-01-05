import React from "react";
import welcome from "./welcome.jpg"


class HomePage extends React.Component{
    constructor(){
        super()
        this.state = {
            Username : "", 
            // Userid : ""
        }
    }
    componentDidMount(){
        let myname = localStorage.getItem("Username")
        // let myid = localStorage.getItem("Userid")
        this.setState({
            Username : myname , 
            // Userid : myid
        })
    }
    render(){
        return(
            <>
             <h1> Welcome to {this.state.Username}</h1> 
            <img src={welcome} className="bg-image" alt=""/>
               
            </>
        )
    }
}
export default HomePage;