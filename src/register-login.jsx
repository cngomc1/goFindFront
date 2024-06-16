import { useState } from "react"
import './index.css'

const SignUpLogin = () =>{

    const [action,setAction]=useState("Sign Up");
    
        return(
            <div className="Container">
            <div className="header">
                <div className="text">{action}</div>
                <div className="underline"></div>
            </div>
            <div className="inputs">
                {action==="Login"? <div></div>: <div className="input">
                    <input type="text" placeholder="Nom d'utilisateur" id="name" />
                </div>}
               
                <div className="input">
                    <input type="email" placeholder="Adresse Email" id="email" />
                </div>
                <div className="input">
                    <input type="password" placeholder="Mot de passe" id="password" />
                </div>
            </div>
            
            <div className="submit-container">
                <div className={action==="Login"?"submit gray":"submit"} onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
                <div className={action==="Sign Up"?"submit gray":"submit"} onClick={()=>{setAction("Login")}}>Login</div>
            </div>
        
        </div> 
        )
    }
    export default SignUpLogin;