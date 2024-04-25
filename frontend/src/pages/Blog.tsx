import { Appbar } from "../components/Appbar";
import { BlogSection } from "../components/BlogSection";
import {  useBlog } from "../hooks";
import { useParams } from "react-router-dom";

export default function Blog() { 

  const { id } = useParams<{ id: string }>();
  const { blog , loading }  = useBlog({
    id: id || "cbb01736-d8ce-4224-89f8-bb1b0e1b5748",
  });


   
  if (loading) {
    return (
      <div className="flex items-center justify-center w-full h-screen border  dark:bg-black dark:border-gray-700">
        <div className="px-4 py-4 text-xl font-medium leading-none text-center text-blue-800  rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">
          Getting your Blogs ...
        </div>
      </div>
    );
  }
  return (
    <>
      <Appbar/>
      <div className="text-black">
        
        <BlogSection blog={blog || {
              content : "hello",
              title : "Test",
              author : {
                  name : "Anonymous"
              },
              publishedDate : "25th Nov 2024",
              id : "cbb01736-d8ce-4224-89f8-bb1b0e1b5748"
        }} />
      </div>
      ;
    </>
  );
}
