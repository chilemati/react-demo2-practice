import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { GrUpdate } from 'react-icons/gr';
import { IoMdArrowRoundBack } from 'react-icons/io';
import { RiDeleteBinFill } from 'react-icons/ri';
import { useNavigate, useParams } from 'react-router-dom'
import AlertDiag from '../dialog/AlertDiag';
// toast step 1
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../atoms/user';

const Axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

const Detail = () => {
    let {id} = useParams();
    let [blog, setBlogs] = useState(null);
    let [open,setOpen] = useState(false);
    let redir = useNavigate();
    let user = useRecoilValue(userAtom);

    // toast step 3
    const notify = (text) => toast.success(text, {
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
      const dismissAll = ()=> toast.dismiss();

  useEffect(() => {
    Axios
      .get("/api/blog/"+id)
      .then((resp) => {
        // runs if true
        // console.log(resp.data)
        setBlogs(resp.data);
      })
      .catch((err) => {
        // runs if false or error
        console.log(err)
      });
  }, []);
  function handleDelete(id) {
    console.log(user.data.email)
    Axios
      .delete("/api/blog",{data: {id:id,email: user.data.email}},{headers: {"Access-Control-Allow-Origin": "*"}})
      .then((resp) => {
        // runs if true
        // console.log(resp.data,id)
        // alert('Blog Deleted Successfully!!')
        console.log(resp)
        if(resp.data.status) {
          notify('Blog Deleted Successfully!!')
        setTimeout(() => {
          redir(-1)
        }, 5000);
        }else{
          notify(resp.data.err);
        }
      })
      .catch((err) => {
        // runs if false or error
        console.log(err)
      });
  }
  return (
    <div className='mt-10 w-[80%] mx-auto border-l-4 border-l-purple-700 rounded-md shadow-lg py-4 px-5  ' >
       {
        blog && <>
           <h2 className=' text-indigo-700 my-4 font-Raleway font-bold text-3xl text-center ' > {blog.title} </h2>
           <p className='text-[1rem] font-normal font-serif  ' > {blog.body} </p>
        </>
       }
       <div className="my-7 flexCenter gap-5  ">
        <button onClick={()=> redir(-1)} className="myBtn text-2xl "><IoMdArrowRoundBack /></button>

        {
          user.data.role === 'Admin' && <>
            <button title='Delete this Blog' onClick={()=> setOpen(true)} className="myBtn text-2xl hover:bg-red-700 hover:text-white "><RiDeleteBinFill /></button>
            <button onClick={()=> redir('/update/'+ id) } title='Update this Blog' className="myBtn text-2xl hover:bg-green-700 hover:text-white "><GrUpdate /></button>
          </>
        }
       </div>
       <AlertDiag open={open} setOpen={setOpen} data={{id:id}} action={handleDelete} />
       {/* toast step 2 */}
       <ToastContainer />
    </div>
  )
}

export default Detail