import React from "react";
import Input from "./Input";

function Login() {
    return (
        <form className="form">
            <Input type = "text" placeholder="Username" />
            <Input type = "password" placeholder="Password" />
            <Input type = "password" placeholder="Confirm Password" />
            <button type="submit">Login</button>
        </form>
        );
    }
    
    export default Login;
    