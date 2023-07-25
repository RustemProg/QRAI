import { Link } from "react-router-dom"; // Import Link and withRouter from react-router-dom
import "./styles/main.css";

function Signup() {
    return (
        <div className="h-screen w-screen flex justify-center items-center bg-black">
            <div className="bg-white w-2/3 h-2/3 md:w-1/2 md:h-3/6 lg:w-1/4 lg:h-2/3 rounded-lg">
                <h1 className="text-4xl ml-4 mt-4">Sign Up</h1>
                <div className=''>
                    <div className='mt-40 ml-4 mr-6 md:mt-40 lg:mt-52 flex flex-col text-xl'>
                        <input className="pl-2 border-b-2 border-black" placeholder="Username" >
                        </input>
                        <input className="mt-2 pl-2 border-black border-b-2" placeholder="Password" >
                        </input>
                        <input className="mt-2 pl-2 border-black border-b-2" placeholder="Confirm password">
                        </input>
                    </div>
                </div>
                <div className="mt-56 md:mt-20 lg:mt-44 flex justify-center">
                    <button className="bg-black text-white rounded-lg text-xl w-32 h-12" >Sign Up</button>
                </div>
                <div className="mt-3 flex justify-center ">
                    <p>You already have an account?  <Link to="/signin" style={{ borderBottomWidth: "1.5px" }} className="border-black pl-2 pr-2"> Sign in </Link></p>
                </div>
            </div>
        </div>
    );
}

export default Signup;