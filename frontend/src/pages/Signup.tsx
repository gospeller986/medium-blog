import { Appbar_general } from "../components/Appbar_general";
import { Onboard } from "../components/Onboard";
import { Quote } from "../components/Quote";


export default function Signup() {
  return (
    <div>
      <Appbar_general/>
        <div className="grid grid-cols-1 lg:grid-cols-2">
            <div>
                 <Onboard />
            </div>
            <div className="hidden lg:block" >
            <Quote/>
            </div>
            

        </div>
         
    </div>
  )
}


