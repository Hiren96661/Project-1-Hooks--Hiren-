import React from "react"
import axios from "axios"
import hiren from "./hiren.jpeg"

class Login extends React.Component{
    constructor(){
        super()
        this.state = {
         email : "", password : ""
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
        formData.append ("st_email",this.state.email)
        formData.append ("st_password",this.state.password)
        

        axios.post ("https://akashsir.in/myapi/crud/student-login-api.php",formData)
        .then (res => {
            if (res.data.flag === "1"){
                var msg = res.data.message;
                alert (msg)

                localStorage.setItem("Username",JSON.stringify(res.data.st_name))
                localStorage.setItem("Userid",JSON.stringify(res.data.st_id))
            } else if (res.data.flag === "0") {
                var fmsg = res.data.message;
                alert (fmsg)
            }
        })
    }
    
    render(){
        return(
            <>
                <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
                

                <section className = "Form my-4 mx-5">
                    <div className = "container">
                        <div className="row g-0">
                            <div className="col-lg-5">
                                <img src={hiren} className="img-fluid" alt=""/>
                            </div>
                            <div className="col-lg-7 px-5 pt-5">
                                <h1 className="font-weight-bold py-3"> Welcome to Hiren Creation </h1>
                                <h4> Sign into your account</h4>
                                <form>
                                    <div className="form-row">
                                        <div className="col-lg-9">
                                            <input type="text" name = "email"  placeholder ="Email-address" className ="form-control my-4 p-3"/>
                                        </div>
                                    </div> 
                                    <div className="form-row">
                                        <div className="col-lg-9">
                                            <input type="password" name = "password" placeholder ="*********" className ="form-control my-4 p-3"/>
                                        </div>
                                    </div>  
                                    <div className="form-row">
                                        <div className="col-lg-9">
                                            <input type="button" value="Login" placeholder ="*********" className ="btn1 mt-3 mb-5"/>
                                        </div>
                                    </div> 
                                    <a href="#"> Forgot password </a>
                                    <p> Don't have an account? <a href="/Userdata"> Register here </a></p>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </>
        )
    }
}

export default Login;