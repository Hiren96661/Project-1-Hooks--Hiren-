import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function HomePageH () {
    const [value,setvalue] = React.useState({ Username : "" , userid : "" })
    var navigate = useNavigate();


   React.useEffect (() => {
    let myname = localStorage.getItem("Username");
    setvalue ({
        Username : myname , 
    })
   },[])

   const logout = (e) => {
        e.preventDefault();
        let id = (localStorage.getItem("Userid"))
        let myid = parseInt(JSON.parse(id))
        console.log(myid)
        setvalue ({
            userid : myid
        })
        let formData = new FormData();
        formData.append("st_id",value.userid)
        axios.post ("https://akashsir.in/myapi/crud/student-logout-api.php",formData)
        .then (res => {
            console.log(res)
            if (res.data.flag === "1"){               
                localStorage.removeItem("Userid");
                localStorage.removeItem("Username");
                navigate("/LoginH")         
            }  
        })
    }

    return (
         <>
            
            <input type= "button" value="Logout" onClick={logout}/>
            <br/>
            <br/>
            <marquee>  <h1> Welcome to Hiren Creation</h1>  </marquee>
         </>
    )
}