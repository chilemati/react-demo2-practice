import React, { useRef, useState } from 'react'
import { FaEye, FaRegEyeSlash } from 'react-icons/fa';
import { useRecoilState } from "recoil";
import { userAtom } from "../atoms/user";

// toast step 1
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const Axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

const Login = () => {
    let [email,setEmail] = useState('');
    let [password,setPassword] = useState('')
    let [show,setShow] = useState(false);
    let [user,setUser] = useRecoilState(userAtom);
    let redir = useNavigate();
    let msg = useRef('');

    const dismissAll = ()=> toast.dismiss()

       // toast step 3
       const notify = () => toast.success('Logged in Successfully!!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });
       const notify2 = (text) => toast.info(text, {
        position: "top-right",
        autoClose: false,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        transition: Bounce,
        });

    function handleSubmit(e) {
        e.preventDefault()
        notify2('please wait...')
        Axios
        .post("/api/login",{email,password},{headers: {"Access-Control-Allow-Origin": "*"}})
        .then((resp) => {
          // runs if true
          if(resp.data.status) {
            notify()
            setUser({isLoggedIn:true, data: resp.data.data})
            setTimeout(() => {
              redir('/blog')
              
            }, 5000);

          }else{
            dismissAll();
            notify2('Wrong email or password')
          }
          
        })
        .catch((err) => {
          // runs if false or error
          // console.log(err)
          notify2(err.message)
        });
    }
  return (
    <div className='flexCol mt-5 min-h-[70vh] ' >
         <h1>Login</h1>
        <form autoComplete='true' className='flexCol p-5 rounded shadow-lg  ' onSubmit={(e)=> handleSubmit(e) } >
            <fieldset className='flexColStart gap-4' >
                <label htmlFor="email">Email</label>
                <input onChange={(e)=> setEmail(e.target.value) } required className='inputStyle' placeholder='example@gmail.com' type="email" name="email" id="email" />
            </fieldset>
            <fieldset className='flexColStart gap-4' >
                <label className='flexStart gap-3 ' htmlFor="password">Password {!show?<FaRegEyeSlash onClick={()=> setShow((prev=> !prev))} />:<FaEye className='text-green-600' onClick={()=> setShow((prev=> !prev))} /> } </label>
                <input onChange={(e)=> setPassword(e.target.value) } required className='inputStyle' placeholder='Your password' type={!show?'password':'text'} name="password" id="password" />
            </fieldset>
            <button className='mt-5 border border-1 py-1 px-3 rounded hover:bg-green-500 hover:text-white ' type='submit' >Login</button>
        </form>
        {/* toast step 2 */}
       <ToastContainer />
    </div>
  )
}

export default Login

/* 
  get /blog
  post /blog
  patch /blog
  delete /blog
 */