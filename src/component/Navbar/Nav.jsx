import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <div className="navbar bg-pink-200">
            <div className="navbar-start">
                <div className="dropdown">                            
                </div>
                <a className="btn btn-ghost text-xl">Basic-Router-SetUp</a>
            </div>
            <div className="navbar-center">
                <ul className="font-bold gap-4 text-xl menu menu-horizontal px-1">
                    <Link to='/'><a>Home</a></Link>
                    <Link to='/register'><a>Register</a></Link>
                    <Link to='/login'><a>LogIn</a></Link>
                   
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Button</a>
            </div>
        </div>
    );
};

export default Nav;