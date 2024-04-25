import { Link } from "react-router-dom";


export const Appbar_general = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4">
      <div className=" text-center flex flex-col  justify-center items-center font-extrabold text-xl md:text-3xl ">
        Second Brain 🧠{" "}
      </div>
      <div className="flex" >
        <Link to={"/signup"} >
        <button
          type="button"
          className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 mr-2.5 md:mr-8 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
        >
           Sign Up
        </button>
        </Link>
        
      </div>
    </div>
  );
};