import React,{useState} from "react";
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

export default function Modal({onClose})
{
    
    const [isRegister,setShowRegister] = useState(()=>false);
    return (
        
        <div className="modal">
            <div className="modal-bg">
                <div className="modal-1">
                    <h1>{isRegister ? "Login" : "Register"}</h1>
                    <button onClick={onClose} className="closeBtn"><CloseSharpIcon/></button>
                </div>
                <div className="login">
                    <input 
                        type="email" 
                        placeholder="Enter your email"

                    ></input>
                    <input 
                       type="password" 
                        placeholder="Enter your password"

                    ></input>
                    < button placeholder="Login" className="secondary-button" id="loginbtn" >{isRegister ? "Login" : "Register"}</button>
                    <div>
                    {isRegister ? "Not a member? " : "Already a member? " }
                        <span href="" className="register" style={{cursor:'pointer'}} onClick={() => setShowRegister(!isRegister)}>{isRegister ? "Register" : "Login"}</span>
                        
                    
                    </div>
                </div>
            </div>
        </div>
    )
}