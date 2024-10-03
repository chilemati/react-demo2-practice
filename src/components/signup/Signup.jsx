import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// toast step 1
import { Bounce, ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Axios = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL
});

const SignupSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string().min(8, "Must Contain 8 Characters").required()
  .matches(
    /^(?=.*[a-z])/,
    " Must Contain One Lowercase Character"
  )
  .matches(
    /^(?=.*[A-Z])/,
    "  Must Contain One Uppercase Character"
  )
  .matches(
    /^(?=.*[0-9])/,
    "  Must Contain One Number Character"
  )
  .matches(
    /^(?=.*[!@#\$%\^&\*])/,
    "  Must Contain  One Special Case Character"
  ),
});

 const Signup = () => {

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
    <h1>Signup</h1>
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        notify("Please wait...")
        let admin = 'amadichile2@gmail.com';
        let role = 'normal';
        if(values.email === admin) {
          role = 'Admin'
        }else{
          role = 'normal';
        }
        
        
        Axios
        .post("/api/user",{...values,id:values.email,role},{headers: {"Access-Control-Allow-Origin": "*"}})
        .then((resp) => {
          // runs if true
          dismissAll();
          notify('Signed up Successfully!!')
          setTimeout(() => {
            redir('/login')
            
          }, 5000);
          
        })
        .catch((err) => {
          // runs if false or error
          console.log(err)
        });
      }}
    >
      {({ errors, touched }) => (
        <Form className="flexCol p-5 rounded shadow-lg  ">
          {/* firstname */}
          <fieldset className="flexColStart gap-4">
            <label htmlFor="firstName">FirstName</label>
            <Field
              placeholder="Your FirstName"
              className="inputStyle"
              id="firstName"
              name="firstName"
            />
          </fieldset>
          {errors.firstName && touched.firstName ? (
            <div className="text-left text-red-700 w-full text-[12px]">{errors.firstName}</div>
          ) : null}
          {/* lastname */}
          <fieldset className="flexColStart gap-4">
            <label htmlFor="lastName">LastName</label>
            <Field
              placeholder="Your LastName"
              className="inputStyle"
              id="lastName"
              name="lastName"
            />
          </fieldset>
          {errors.lastName && touched.lastName ? (
            <div className="text-left text-red-700 w-full text-[12px]">{errors.lastName}</div>
          ) : null}
          {/* email */}
          <fieldset className="flexColStart gap-4">
            <label htmlFor="email">Email</label>
            <Field
              placeholder="Your Email"
              className="inputStyle"
              id="email"
              name="email"
              type="email"
            />
          </fieldset>
          {errors.email && touched.email ? <div className="text-left text-red-700 w-full text-[12px]">{errors.email}</div> : null}
          {/* password */}
          <fieldset className="flexColStart gap-4">
            <label htmlFor="password">Password</label>
            <Field
              placeholder="Your Strong Password"
              className="inputStyle"
              id="password"
              name="password"
              type="password"
            />
          </fieldset>
          {errors.password && touched.password ? (
            <div className="text-left text-red-700 w-full text-[12px]">{errors.password}</div>
          ) : null}
          <button
            className="mt-5 border border-1 py-1 px-3 rounded hover:bg-green-500 hover:text-white "
            type="submit"
          >
            Sigup
          </button>
        </Form>
      )}
    </Formik>
     {/* toast step 2 */}
     <ToastContainer />
  </div>
)};

export default Signup;
