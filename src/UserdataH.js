import axios from "axios";
import React from "react";
import hiren1 from "./hiren1.jpeg"
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function SignupH() {
    const [values, setvalues] = React.useState({ namee: "", gender: "", email: "", mobileno: "", password: "", errors : {} });
    var navigate = useNavigate();
    const change = (e) => {
        const { name, value } = e.target;
        setvalues({
            ...values, [name]: value
        })
    }
    let formValidation = () => {
        const {namee,gender,email,mobileno,password} = values
        let isValid = true;
        const errors = {};
        if(namee === "") {
            errors.namee = "Enter Name";
            isValid = false;
        } if(gender === "") {
            errors.gender = "Enter your Gender";
            isValid = false;
        } if(email === "") {
            errors.email = "Enter Email Address";
            isValid = false;
        } if(mobileno === "") {
            errors.mobileno = "Enter Mobile Number";
            isValid = false;
        } if (password === ""){
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
        formData.append("st_name", values.namee)
        formData.append("st_gender", values.gender)
        formData.append("st_email", values.email)
        formData.append("st_mobileno", values.mobileno)
        formData.append("st_password", values.password)

        axios.post("https://akashsir.in/myapi/crud/student-add-api.php", formData)
            .then(res => {
                console.log(res)
                if (res.data.flag === "1") {
                    let msg = res.data.message;
                    // alert(msg)
                    toast.success(msg, {
                        position: toast.POSITION.TOP_CENTER,
                        autoClose: 3000,
                        // closeOnClick: true,
                        pauseOnHover: true
                    })
                    setvalues({
                        name: "", gender: "", email: "", mobileno: "", password: ""
                    })
                    navigate("/LoginH")
                } else if (res.data.flag === "0") {
                    var fmsg = res.data.message;
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
                    <div className="row g-0 ">
                        <div className="col-lg-5">
                            <div className="opacity-100">
                                <img src={hiren1} className="img-fluid" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-7 px-5 pt-2">
                            <center>   <h1 className="font-weight-bold py-1"> Signup  Form </h1>   </center>

                            <form onSubmit={submit}>
                                <div className="form-row">
                                    <div className="col-lg-9">
                                        <h3 className="font-weight-bold">  Name </h3><input type="text" name="namee" placeholder="Enter Name" className="form-control my-2 p-2" onChange={change} />
                                        <p style={{color : "red"}}>{values.errors.namee}</p> 
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-9">
                                        <h3 className="font-weight-bold"> Gender </h3><input type="text" name="gender" placeholder="Enter Your Gender" className="form-control my-2 p-2" onChange={change} />
                                        <p style={{color : "red"}}>{values.errors.gender}</p> 
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-9">
                                        <h3 className="font-weight-bold"> Email Address </h3><input type="email" name="email" placeholder="Enter Email Address" className="form-control my-2 p-2" onChange={change} />
                                        <p style={{color : "red"}}>{values.errors.email}</p> 
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-9">
                                        <h3 className="font-weight-bold">Contact Number </h3><input type="number" name="mobileno" placeholder="Enter Contact Number" className="form-control my-2 p-2" onChange={change} />
                                        <p style={{color : "red"}}>{values.errors.mobileno}</p> 
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-9">
                                        <h3 className="font-weight-bold"> Password</h3><input type="password" name="password" placeholder="Enter Password" className="form-control my-2 p-2" onChange={change} />
                                        <p style={{color : "red"}}>{values.errors.password}</p> 
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="col-lg-9">
                                        <input type="submit" value="Sign Up " placeholder="*********" className="btn1 mt-3 mb-4" />
                                    </div>
                                </div>

                                <p className="font-weight-bold"> I  have an account? <Link to="/LoginH"> Login  </Link></p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            <ToastContainer />
        </>
    )
}
export default SignupH;