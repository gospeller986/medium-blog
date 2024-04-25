import { useState } from "react"
import { Appbar } from "../components/Appbar"
import axios from "axios"
import { BACKEND_URL } from "../config"
import { useNavigate } from "react-router-dom"


export const Publish = () => { 
    const [title, setTitle] = useState("") 
    const [content, setContent] = useState("") 
    const navigate = useNavigate()
    const BlogSubmit =async () => {
        const response =  await axios.post(`${BACKEND_URL}/api/v1/blog/create`,{
            title : title,
            content : content
        }, {
            headers : {
                Authorization : localStorage.getItem("token")
            }
        })
        navigate( `/blog/${response.data.id}`)
    }
  return (
    <> 
    <Appbar/>
       <div className="flex w-full  justify-center p-20">
        <div className="flex flex-col w-full" >
            <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder=" Enter your title" className="text-slate-500 text-4xl   decoration-current focus:border-0 focus:outline-none lg:px-[35rem] " />
            <textarea onChange={(e) => setContent(e.target.value)} value={content} rows={10}  placeholder=" Enter your content" className="text-slate-400 text-xl   decoration-current focus:border-0 focus:outline-none w-[100%] lg:px-[30rem] mt-20" />
            <div className="flex justify-center">
               <button onClick={BlogSubmit} className="bg-black py-2 px-10 rounded-xl mt-5 max-w-sm  text-white">Publish</button>
            </div>
            
        </div>
           
       </div>

    </>
    
  )
}
