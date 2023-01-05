import React from "react"
import axios from "axios"
import './index.css';
import hiren1 from "./hiren1.jpeg"
import { Link } from "react-router-dom";
// import { useNavigate } from "react-router-dom";

class Userdata extends React.Component{
    constructor(){
        super()
        this.state = {
           name : "", gender : "", email : "", mobileno : "", password : ""
        }
    }
    change = (e) => {
        this.setState ({
            [e.target.name] : [e.target.value]
        })
    }

    submit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        formData.append ("st_name",this.state.name)
        formData.append ("st_gender",this.state.gender)
        formData.append ("st_email",this.state.email)
        formData.append ("st_mobileno",this.state.mobileno)
        formData.append ("st_password",this.state.password)

        axios.post ("https://akashsir.in/myapi/crud/student-add-api.php",formData)
        .then (res => {
            console.log (res)
            // let navigate = useNavigate();
            if (res.data.flag === "1"){
                let msg = res.data.message;
                alert (msg);
                // navigate ("/Login")
                this.setState ({
                    name : "", gender : "", email : "", mobileno : "", password : "" 
                })
                console.log(this.state.name)
            }
            else if (res.data.flag === "0"){
                let msg = res.data.message
                alert (msg);
            }
        })
    }
    
    render(){
        return(
            <>
              <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
            
              <section className = "Form my-4 mx-5">
<div className = "container">
    <div className="row g-0 ">
    <div className="col-lg-5">
    <div className="opacity-100">
        <img src={hiren1} className="setphoto" alt=""/>
        </div>
    </div>
        <div className="col-lg-7 px-5 pt-2">
          <center>   <h1 className="font-weight-bold py-1"> Signup  Form </h1>   </center>
            
            <form onSubmit={this.submit.bind(this)}>
                <div className="form-row">
                    <div className="col-lg-9">
                    <h3 className="font-weight-bold">  Name </h3><input type="text" name = "name" placeholder="Enter Name" className ="form-control my-2 p-2" onChange={this.change.bind(this)} />
                    </div>
                </div> 
                <div className="form-row">
                    <div className="col-lg-9">
                    <h3 className="font-weight-bold"> Gender </h3><input  type="text" name = "gender" placeholder="Enter Your Gender" className ="form-control my-2 p-2" onChange={this.change.bind(this)} /> 
                    </div>
                </div> 
                <div className="form-row">
                    <div className="col-lg-9">
                    <h3 className="font-weight-bold"> Email Address </h3><input  type="email" name = "email" placeholder="Enter Email Address" className ="form-control my-2 p-2" onChange={this.change.bind(this)} /> 
                    </div>
                </div>  
                <div className="form-row">
                    <div className="col-lg-9">
                    <h3 className="font-weight-bold">Contact Number </h3><input  type="number" name = "mobileno" placeholder="Enter Contact Number" className ="form-control my-2 p-2" onChange={this.change.bind(this)} />
                    </div>
                </div> 
                <div className="form-row">
                    <div className="col-lg-9">
                    <h3 className="font-weight-bold"> Password</h3><input  type="password" name = "password" placeholder="Enter Password" className ="form-control my-2 p-2" onChange={this.change.bind(this)} /> 
                    </div>
                </div> 
                <div className="form-row">
                    <div className="col-lg-9">
                        <input type="submit" value="Sign Up " placeholder ="*********" className ="btn1 mt-3 mb-5"/>
                    </div>
                </div> 
                
                <p className="font-weight-bold"> I  have an account? <Link to="/Login"> Login  </Link></p>
            </form>
        </div>
    </div>
</div>
</section>

            </>
        )
    }
}

export default Userdata;