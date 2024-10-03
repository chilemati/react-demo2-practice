import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// toast step 1
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRecoilValue } from "recoil";
import { userAtom } from "../atoms/user";
const Axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

const SignupSchema = Yup.object().shape({
  title: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  body: Yup.string()
    .min(2, "Too Short!")
    .required("Required"),
  author: Yup.string().required("Required"),
  
});

 const CreateBlog = () => {
  let user = useRecoilValue(userAtom)
  let redir = useNavigate();

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

      const dismissAll = ()=>toast.dismiss();

return (
  <div className="flexCol mt-5 min-h-[70vh] ">
    <h1>Create Blog</h1>
    <Formik
      initialValues={{
        title: "",
        body: "",
        author: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        notify("Please wait...")
        Axios
        .post("/api/blog",{...values,email:user.data.email},{headers: {"Access-Control-Allow-Origin": "*"}})
        .then((resp) => {
          // runs if true
          dismissAll();
          notify('Blog Created Successfully!!')
          setTimeout(() => {
            redir('/blog')
            
          }, 5000);
          
        })
        .catch((err) => {
          // runs if false or error
          notify(err.message)
        });
      }}
    >
      {({ errors, touched }) => (
        <Form className="flexCol p-5 rounded shadow-lg  ">
          {/* title */}
          <fieldset className="flexColStart gap-4">
            <label htmlFor="title">Title</label>
            <Field
              placeholder="Your title"
              className="inputStyle"
              id="title"
              name="title"
            />
            
          </fieldset>
          {errors.title && touched.title ? (
            <div className="text-left text-red-700 w-full text-[12px]">{errors.title}</div>
          ) : null}
          {/* author */}
          <fieldset className="flexColStart gap-4">
            <label htmlFor="author">Author</label>
            <Field
              placeholder="Your author"
              className="inputStyle"
              id="author"
              name="author"
            />
          </fieldset>
          {errors.author && touched.author ? (
            <div className="text-left text-red-700 w-full text-[12px]">{errors.author}</div>
          ) : null}
          {/* body */}
          <fieldset className="flexColStart gap-4">
            <label htmlFor="body">Body</label>
            <Field
              placeholder="Your body"
              className="inputStyle"
              id="body"
              name="body"
              as= "textarea"
            />
          </fieldset>
          {errors.body && touched.body ? <div className="text-left text-red-700 w-full text-[12px]">{errors.body}</div> : null}
          
          <button
            className="mt-5 border border-1 py-1 px-3 rounded hover:bg-green-500 hover:text-white "
            type="submit"
          >
            Create
          </button>
        </Form>
      )}
    </Formik>
     {/* toast step 2 */}
     <ToastContainer />
  </div>
)};


export default CreateBlog;