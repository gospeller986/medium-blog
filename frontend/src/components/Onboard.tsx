import { SignupInput } from "@palsatyajit/medium-common";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";
import { Link, useNavigate } from "react-router-dom";

export const Onboard = () => {  
    const navigate = useNavigate()
     const [postInputs , setPostInputs] = useState<SignupInput>({
         name: "",
         email: "",
         password: "", 
     })

     const sendRequest = async() => {

        if (postInputs.name === "" || postInputs.email === "" || postInputs.password === "") {
            alert("Please fill all the inputs");
            return;
        }
        try {
            const response = await axios.post(`${BACKEND_URL}/api/v1/user/signup`, postInputs);
            const jwt = response.data
            if (typeof window !== 'undefined' && window.localStorage) {
              localStorage.setItem("token", jwt);
              alert("Sign up Successfully")
              navigate("/blogs");
            }
          } catch (error) {
            alert("Email already used");
          }
        }

     
  return (
    <div>
        <div className=" h-screen flex justify-center flex-col">
      <div className="flex justify-center  ">
        <div className="px-10" >
          <div className=" text-4xl font-extrabold mt-4"> Create an Account</div>
          <div className="text-center mt-2 text-slate-400" >
               Already Have an Account ??  <Link to={"/signin"} className="underline" >Login</Link>
          </div>

          <div className="pt-8 gap-4 ">   
         <LabeledInput label="Name" placeholder="Enter your Name" onChange={(e) => {
            setPostInputs({
                 ...postInputs,  // existing values 
                 name: e.target.value})
        }} /> 
        <LabeledInput label="Email" placeholder="Enter your Email" onChange={(e) => {
            setPostInputs({
                 ...postInputs,  // existing values 
                 email: e.target.value})
        }} />
        <LabeledInput label="Password" type = "password" placeholder="Enter your Password" onChange={(e) => {
            setPostInputs({
                 ...postInputs,  // existing values 
                 password: e.target.value})
        }} />
        <button onClick={sendRequest} type="button" className=" w-full mt-8 text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Sign Up</button>
        </div>
        </div>
       
      </div>
    </div>
    </div>
  )
}


interface LabeledInputType  {
    label : string,
    placeholder : string,
    onChange : (e : React.ChangeEvent<HTMLInputElement>) => void ,
    type? : string 
}
function LabeledInput ({ label , placeholder , onChange , type } : LabeledInputType ) {
   return <div>
   <label className="block mb-2 text-sm font-bold text-gray-900 pt-4 " >{label}</label>
   <input onChange={onChange} type={type || "text"} id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  " placeholder={placeholder} required />
</div>
}
