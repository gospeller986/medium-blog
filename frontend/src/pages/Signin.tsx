import { Appbar_general } from "../components/Appbar_general";
import { Login } from "../components/Login";
import { Quote } from "../components/Quote";




export default function Signin() {
  return (
    <div>
      <Appbar_general/>
        <div className="grid grid-cols-1 lg:grid-cols-2" >
            <div>
                 <Login />
            </div>
            <div className="hidden lg:block" >
            <Quote/>
            </div>
            

        </div>
         
    </div>
  )
}
