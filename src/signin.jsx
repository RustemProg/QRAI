import { Link } from "react-router-dom";
import "./styles/main.css";

const Signin = () => {

    return (
        <div className="h-screen w-screen flex justify-center items-center bg-black">
            <div className="bg-white w-2/3 h-2/3 md:w-1/2 md:h-3/6 lg:w-1/4 lg:h-2/3 rounded-lg">
                <h1 className="text-4xl ml-4 mt-4">Sign In</h1>
                <div className=''>
                    <div className='mt-48 ml-4 mr-6 md:mt-40 lg:mt-60 flex flex-col text-xl'>
                        <input className="pl-2 border-b-2 border-black" placeholder="Username" >
                        </input>
                        <input className="mt-2 pl-2 border-black border-b-2" placeholder="Password" >
                        </input>
                    </div>
                </div>
                <div className="mt-60 md:mt-28 lg:mt-48 flex justify-center">
                    <button className="bg-black text-white rounded-lg text-xl w-32 h-12">Sign Up</button>
                </div>
                <div className="mt-3 flex justify-center ">
                    <p>
                        Don't have an account?  <Link to="/signup" style={{ borderBottomWidth: "1.5px" }} className="border-black pl-2 pr-2"> Sign up</Link>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Signin;