import Avatar from "./BlogCard"


export const Appbar = () => {
  return (
    <div className="border-b flex justify-between px-10 py-4" >
           <div className=" text-center flex flex-col  justify-center items-center font-extrabold text-3xl" >Second Brain 🧠 </div>
           <div>
               <Avatar name="Satyajit"/>
           </div>
    </div>
  )
}
