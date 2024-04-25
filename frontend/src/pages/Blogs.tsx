import { Link } from "react-router-dom";
import { Appbar } from "../components/Appbar";
import { BlogCard } from "../components/BlogCard";
import { useBlogs } from "../hooks";

export const Blogs = () => {
  const { loading, blogs } = useBlogs();
  
  if (loading)
    return (
      <div className="flex items-center justify-center w-full h-screen border  dark:bg-black dark:border-gray-700">
        <div className="px-4 py-4 text-xl font-medium leading-none text-center text-blue-800  rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
          Getting your Blogs ...
        </div>
      </div>
    );
  return (
    <>
      <Appbar />
      <div className="flex justify-center">
        <div className="">
          {blogs.map(blog  => {
             console.log(blog)
             return  <Link to={`/blog/${blog.id}`} className=" cursor-pointer"  >
             <BlogCard 
             id = {blog.id || "cbb01736-d8ce-4224-89f8-bb1b0e1b5748" }
             authorName={blog.author.name || "Anonymous"}
             title={blog.title}
             content={blog.content}
             publishedDate="26th August , 2024"
           />
           </Link>
          })}
          
        </div>
      </div>
    </>
  );
};
