import React from "react";
import CloseSharpIcon from '@mui/icons-material/CloseSharp';

export default function Register({onClose})
{
    return (
        
        <div className="modal--rg">
            <div className="modal-bg">
                <div className="modal-1">
                    <h1>Register</h1>
                    <button onClick={onClose} className="closeBtn--rg"><CloseSharpIcon/></button>
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
                    < button placeholder="Login" className="secondary-button" id="loginbtn" >Submit</button>
                    <div>
                        Already a member? <span href="" className="register" onClick={onClose} >Login</span>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}