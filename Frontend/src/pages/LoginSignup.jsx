import { useContext, useState } from "react"
import "./Css/LoginSignup.css"
import { useNavigate } from "react-router";
import { ShopContext } from "../context/ShopContext";

export const LoginSignup = () => {
  const [state,setState] = useState('Sign Up')
  const [message, setMessage] = useState('')
  const navigate = useNavigate();
  const { loginUser } = useContext(ShopContext);
  const [formdata,setFormData] = useState({
    name:'',
    email:'',
    password:''
  })

  const handleInputChange = (e) => {
    const {name, value} = e.target;
    setFormData({...formdata, [name]:value})
  }

  const handleSubmit = () => {
    if(state === 'Sign Up'){
      const users = JSON.parse(localStorage.getItem("users")) || [];
      const userExist = users.find((user) => user.email === formdata.email);

      if(userExist){
        alert("User already exist! Please Login.")
        setMessage("User already exist! Please Login.")
      } else{
        users.push(formdata);
        localStorage.setItem("users",JSON.stringify(users))
        // alert("Account created Successfully! Please Login.")
        setMessage("Account created Successfully! Please Login.")
        setState('Login')
        setFormData("")
      }
    } else if(state === 'Login'){
      const users = JSON.parse(localStorage.getItem("users"))
      const user = users.find((user) => user.email === formdata.email && user.password === formdata.password)

      if(user){
        // localStorage.setItem("currentUser",JSON.stringify(user));
        loginUser(user)
        // alert('Login Successfully')
        setMessage('Login Successfully')
        navigate('/')
      }
    }
  }

    return (
      <div className='loginsignup'>
        <div className='loginsignup-container'>  
            <h1>{state === "Sign Up" ?"Sign Up":"Login"}</h1>
            <div className='loginsignup-fields'>
              {
                state === "Sign Up" && (
                  <input type="text" placeholder='Your name' name="name" value={formdata.name} onChange={handleInputChange} />
                )
              } 
                <input type="email" placeholder='Email Address' name="email" value={formdata.email} onChange={handleInputChange} />
                <input type="password" placeholder='Password' name="password" value={formdata.password} onChange={handleInputChange} />
            </div>
            <button onClick={handleSubmit}>{state === "Sign Up" ? "Create Account" : "Login"}</button>
            {
              state === "Sign Up" ? (
                <p className='loginsignup-login'> Already have an account? <span onClick={() => setState("Login")}>Login here</span></p>
              ) : (
                <p className='loginsignup-login'> Create an account? <span onClick={() => setState("Sign Up")}>Click here</span></p>
              )
            }
            {
              state === "Sign Up" && (
                <div className='loginsignup-agree'>
                <input type="checkbox" name='' id='' />
                <p>By Continuing, i agree to the terms of use & privacy policy</p>
            </div>
              )
            }
           
        </div>
      </div>
    )
  }
  
  