import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const LogIn = () => {

    const {signIn} = useContext(AuthContext)
    // console.log(authInfo);

    const handleLogIn =(e)=>{
        e.preventDefault();        
        const email = e.target.email.value;
        const password = e.target.password.value;    
        
        
        signIn(email,password)
 
        console.log(name, email, password);
     }
    return (
        <div className="w-[30%] mx-auto min-w-[500px] border border-r-emerald-700 m-14 p-10 px-20 rounded-xl">
            <h1 className="text-green-400	 text-center text-5xl font-bold">LogIn</h1>
            <form onSubmit={handleLogIn}>                
                <div className="mb-3">
                    <p>Email</p>
                    <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>
                <div className="mb-3">
                    <p>Password</p>
                    <input name="password" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                </div>               
                <button type="submit" className="btn btn-primary mt-5 w-[95%]">LogIn</button>
            </form>
        </div>
    );
};

export default LogIn;