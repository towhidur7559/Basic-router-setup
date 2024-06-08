import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    // const registerData = useContext(AuthContext)

    // const authInfo =useContext(AuthContext);
    const {registerUser} =useContext(AuthContext);

    // console.log(authInfo);
    // console.log(registerUser);

    const handleRegister =(e)=>{
       e.preventDefault();
       const name = e.target.name.value;
       const photo = e.target.photo.value;
       const email = e.target.email.value;
       const password = e.target.password.value;
       const confirmPassword = e.target.confirmPassword.value;
       registerUser(email, password)
       console.log(name, photo,email, password, confirmPassword);
    }
    return (
        <div className="w-[30%] mx-auto min-w-[500px] border border-r-emerald-700 m-14 p-10 px-20 rounded-xl">
            <h1 className="text-green-400	 text-center text-5xl font-bold">Register</h1>
          <form onSubmit={handleRegister}>
            <div className="mt-2 mb-3">
                <p>Name</p>
                <input name="name" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="mb-3">
                <p>Photo</p>
                <input name="photo" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="mb-3">
                <p>Email</p>
                <input name="email" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="mb-3">
                <p>Password</p>
                <input name="password" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <div className="">
                <p>Confirm Password</p>
                <input name="confirmPassword" type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
            </div>
            <button type="submit" className="btn btn-primary mt-5 w-[95%]">Register</button>
          </form>
          {/* {registerData} */}
        
        </div>
        
    );
};

export default Register;