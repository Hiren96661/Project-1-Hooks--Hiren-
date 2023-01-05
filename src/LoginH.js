import axios from "axios";
import React from "react";
import hiren from "./hiren.jpeg"
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function LoginH() {
    const [values, setvalues] = React.useState({ email: "", password: "",errors : "" });
    var navigate = new useNavigate();
    const change = (e) => {
        const { name, value } = e.target;
        setvalues({
            ...values, [name]: value
        })
    }
    let formValidation = () => {
        const {email,password} = values
        let isValid = true;
        const errors = {};
        if(email === "") {
            errors.email = "Enter Email Address";
            isValid = false;
        }   if (password === ""){
            errors.password = "Enter Password";
            isValid = false;
        }
    setvalues({errors})
    console.log(errors)
    return isValid;

    }
    const submit = (e) => {
        e.preventDefault();
        let isValid = formValidation();
        let formData = new FormData();
        formData.append("st_email", values.email)
        formData.append("st_password", values.password)
        axios.post("https://akashsir.in/myapi/crud/student-login-api.php", formData)
            .then(res => {
                if (res.data.flag === "1") {
                    var msg = res.data.message;
                    // alert(msg)
                    toast.success(msg, {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 3000,
                        // closeOnClick: true,
                        pauseOnHover: true
                    })
                    localStorage.setItem("Username", JSON.stringify(res.data.st_name))
                    localStorage.setItem("Userid", JSON.stringify(res.data.st_id))
                    setTimeout(() => {
                        navigate("/HomePageH")
                    }, 5000)


                } else if (res.data.flag === "0") {
                    var fmsg = res.data.message;
                    //    alert (fmsg)
                    toast.error(fmsg, {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 3000,
                        closeOnClick: true,
                        pauseOnHover: true
                    })
                }
            })
    }
    return (
        <>
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65" crossorigin="anonymous"></link>
            

            <section className="Form my-4 mx-5">
                <div className="container">
                    <div className="row g-0">
                        <div className="col-lg-5">
                            <img src={hiren} className="img-fluid" alt="" />
                        </div>
                        <div className="col-lg-7 px-5 pt-5">
                            <h1 className="font-weight-bold py-3"> Welcome to Hiren Creation </h1>
                            <h4> Sign into your account</h4>
                            <form>
                                <div className="form-row">
                                    <div className="col-lg-9">
                                        <input type="text" name="email" value = {values.email} placeholder="Email-address" className="form-control my-4 p-3" onChange={change} />
                                        <p style={{color : "red"}}>{values.errors.email}</p> 
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-9">
                                        <input type="password" name="password" value = {values.password} placeholder="*********" className="form-control my-4 p-3" onChange={change} />
                                        <p style={{color : "red"}}>{values.errors.password}</p> 
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-9">
                                        <input type="button" value="Login" placeholder="*********" className="btn1 mt-3 mb-5" onClick={submit} />
                                    </div>
                                </div>
                                <Link to="ForgotpassH"> Forgot password  </Link>
                                <p> Don't have an account?  <Link to="/UserdataH">  Register here </Link> </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    )
}