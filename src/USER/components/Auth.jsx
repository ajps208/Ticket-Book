import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logimg from '../../Assets/loginimg.png'
import logo from '../../Assets/logo.png'
import { Form } from 'react-bootstrap'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { loginrAPI, registerAPI } from '../Services/allApi'
import { AuthStatus } from '../Context/AuthContext'
// import { loginrAPI, registerAPI } from '../services/allAPI';

function Auth({ register }) {
  const{logedUser,setLogedUser}=useContext(AuthStatus)
  const navigate=useNavigate()
    const isRegisterForm = register ? true : false
    const [userData,setUserData]=useState({
      username:"",email:"",password:""
    })

    const handleRegister = async (e) => {
      e.preventDefault();
      const { username, email, password } = userData;
    
      if (!username || !email || !password) {
        toast.info("Please fill the form completely !!!");
      } else {
        try {
          const result = await registerAPI(userData);
          console.log("API response:", result);
    
          if (result.status === 200) {
            toast.success(`${result.data.username} has registered successfully!!!`);
          
            setUserData({
              username: "",
              email: "",
              password: "",
            });
            navigate(`/login`);
          } else {
            toast.warning(result.response.data);
          }
        } catch (error) {
          console.error("Error during registration:", error);
        }
      }
    };

    const handleLogin= async(e)=>{
      e.preventDefault()
      const {email, password } = userData;

      if (!email || !password) {
        toast.info("Please fill the form completely !!!");
      } else{
        const result=await loginrAPI(userData)
        if(result.status===200){
          // toast.success(`${result.data.username} has registered successfully!!!`)
          sessionStorage.setItem("existingUser",JSON.stringify(result.data.existingUser))
          sessionStorage.setItem("token",result.data.token)
          setLogedUser(result.data)
          setUserData({
           email:"",password:""
          })
          navigate('/')
        }else{
          toast.warning(result.response.data)
        }
      }
    }
    

  
  return (
    <div style={{ width: "100%", height: "100vh" }} className='d-flex align-items-center justify-content-center'>
      <div className='w-75 container'>
        <Link to={'/'} style={{ textDecoration: "none" }}>
          <i className="fa-solid fa-arrow-left me-1"></i> Back to Home
        </Link>
        <div className="card shadow p-5 bg-info">
          <div className="row align-items-center">
            <div className="col lg-6">
              <img src={logimg} alt="" className='rounded-start w-100' />
            </div>
            <div className="col lg-6">
              <div className='d-flex align-items-center flex-column'>
                <h1 className='fw-bolder text-light mt-2 text-center'>
                 <img className='img-fluid w-50' src={logo} alt="" />
                </h1>
                <h5 className="fw-bolder mt-4 pb-3 text-light">
                  {isRegisterForm ? 'Sign up to your Account' : 'Sign in to your Account'}
                </h5>
                <Form className='text-light w-100'>
                  {isRegisterForm && (
                    <>
                      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                     
                        <Form.Control type="text" placeholder="UserName" value={userData.username} onChange={e=>setUserData({...userData,username:e.target.value})} />
                      </Form.Group>
                    
                    </>
                  )}
                       <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                     
                     <Form.Control type="email" placeholder="Enter Email Id" value={userData.email} onChange={e=>setUserData({...userData,email:e.target.value})}/>
                   </Form.Group>
                   <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                     
                     <Form.Control type="password" placeholder="Enter Password" vvalue={userData.password} onChange={e=>setUserData({...userData,password:e.target.value})} />
                   </Form.Group>
                   {
                    isRegisterForm?
                    <div>
                        <button onClick={handleRegister}  className='btn btn-light mb-2'>Register</button>
                        <p>Already have account?clicked here to <Link to={'/login'}>Login</Link></p>
                    </div>:
                     <div>
                     <button onClick={handleLogin} className='btn btn-light mb-2'>Login</button>
                     <p>New User? Click here to <Link to={'/register'}>Register</Link></p>
                 </div>
                   }
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position='top-right' autoClose={2000} theme='colored' />
    </div>
  )
}

export default Auth
