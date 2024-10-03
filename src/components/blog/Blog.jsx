import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
let URL= import.meta.env.VITE_BASE_URL
const Blog = () => {
  let [blog, setBlogs] = useState(null);
  

  useEffect(() => {

    axios.get(URL+'/api/blog',{headers: {"Access-Control-Allow-Origin": "*"}})
    .then(resp=> {
      if(Array.isArray(resp.data)) {
        setBlogs(resp.data);
      }
    })
    .catch(err=> {
      console.log(err.message)
    })
  }, []);

  return (
    <div>
      <h2>Latest Blogs </h2>
      <div className="flex flex-col gap-4 items-center p-3 justify-center w-[70%] mx-auto my-7 shadow-lg ">
        {blog &&
          blog.sort((a,b)=> b.updatedAt - a.updatedAt).map((each) => (
            <Link
              className="py-3 px-2 shadow-sm odd:bg-gray-200 rounded even:bg-transparent hover:bg-blue-800 hover:text-white text-[1rem]  "
              key={each._id}
              to={"/blog/" + each._id}
            >
              {" "}
              {each.title}{" "}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Blog;
