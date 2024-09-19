import { useState } from "react";

const LoginForm=()=>{
    const [user,setUser]=useState({
        username:"",
        password:""
});

const handleChange=(event)=>{
    const{name,value}=event.target;
    setUser((prev)=>({...prev,[name]:value}));
};

const handleFormSubmit=(event)=>{
event.preventDefault();
console.log(user); 
}

    return(
       <>
       <form onSubmit={handleFormSubmit}>
        <div>
            <h1>Login Form</h1>

        </div>
        <div>
            <label htmlFor="username">
            <b>User Name</b>
            </label>
            <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            /><br/>

            <label htmlFor="password">
                <b>Password</b>
            </label>
            <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            />

        </div>


        <div>
            <button type="submit">Login</button>
        </div>
    
       </form>
       </>
    )
}

export default LoginForm;