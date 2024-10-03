import { lazy, Suspense, useState } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
const ItBerries = lazy(()=> import('./components/itberries/ItBerries'));
const Car = lazy(()=> import('./components/car/Car'));
const Hero  = lazy(()=> import('./components/hero/Hero'));
const About = lazy(()=> import('./components/about/About'));
const Nav = lazy(()=> import("./components/nav/Nav"));
const Footer = lazy(()=> import("./components/footer/Footer"));
const Error = lazy(()=> import("./components/error/Error"));
const Detail = lazy(()=> import("./components/detail/Detail"));
const Blog = lazy(()=> import("./components/blog/Blog"));
const Login = lazy(()=> import("./components/login/Login"));
const Signup = lazy(()=> import("./components/signup/Signup"));
const CreateBlog = lazy(()=> import("./components/create/CreateBlog"));
const UpdateBlog = lazy(()=> import("./components/update/UpdateBlog"));


// js
function App() {

  // js

 
  return (
    <>
     <Nav />
    {/* router step 3 */}
      <Suspense fallback={<div className="min-h-[75vh] flexCol text-red-600 font-bold font-graypen text-3xl text-center " >Loading...</div>} >
      <Routes>
        <Route path='/' element={<ItBerries /> } />
        <Route path="/car" element={<Car />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/about" element={<About />} />
        {/* /blog/1 */}
        <Route path="/blog/:id" element={<Detail />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/update/:slug" element={<UpdateBlog />} />

        <Route path="*" element={<Error />} />
      </Routes>
      </Suspense>
      <Footer />
    </>
  );
  // js
}

export default App;
