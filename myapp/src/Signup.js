// import axios from 'axios';
import React from "react";


function Signup(){
    
    // const pressHandler=()=>{
    //      axios.post('https://reqres.in/api/login',{
    //                  "email": "",
    //                  "password": ""
    // })
    // .then(async function(response){
    // if(response.status=='200'){
    // alert("success")
    // }else{
    // alert("failed")
    // }
    // })
    // .catch(function(error){
    // console.log(error);
    // });
    // }
    return(
        <div className="form">
            <h1>Login Here</h1>
            <div className="box">
                <i className="fa fa-envelope-o"></i>
                <input type="Username" placeholder="Username" name="Username"/>	
            </div>
            <div className="box">
                <i className="fa fa-key" aria-hidden="true"></i>
                <input type="password" placeholder="Password" name="password" id="myInput"/>
            <span class="eye" onclick="myfunction()">
				<i id="hide1" class="fa fa-eye"></i>
				<i id="hide2" class="fa fa-eye-slash"></i>
			</span>
            </div>
            <button type="button" className="btn">LOGIN</button>   
        </div>    

    ); 
}
export default Signup;
