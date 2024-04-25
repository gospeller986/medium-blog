import { Appbar_general } from "../components/Appbar_general";
import { Auth } from "../components/Auth";
import { Quote } from "../components/Quote";




export default function Signin() {
  return (
    <div>
      <Appbar_general/>
        <div className="grid grid-cols-1 lg:grid-cols-2" >
            <div>
                 <Auth type = "signin" />
            </div>
            <div className="hidden lg:block" >
            <Quote/>
            </div>
            

        </div>
         
    </div>
  )
}
