import { Link, useNavigate } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import { useDispatch } from "react-redux";
import { useState } from "react";
import toast from "react-hot-toast";
import { isEmail } from "../helpers/regexMatcher";
import { login } from "../redux/slices/authSlice";

function Signin(){

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [signInDetail , setSignInDetail] = useState({
        email: '',
        password: ''
    });

    function handleUserInput(e){
        const { name , value } = e.target;

        setSignInDetail({
            ...signInDetail,
            [name]: value
        })
    }

    async function onFormSubmit(e){
        e.preventDefault();
        console.log(signInDetail);
        if(!signInDetail.email || !signInDetail.password){
            toast.error("Please fill all the required fields");
            return;
        }
        
        if(!isEmail(signInDetail.email)){
            toast.error("Invalid email provided");
            return;
        }

        const response = await dispatch(login(signInDetail));

        console.log(response);
        if(response?.payload?.data?.success){
            navigate("/");
        }
        
        setSignInDetail({
            name: '',
            password: ''
        })
        
        
    }

    return (
        <HomeLayout>
            <div className="flex overflow-x-auto flex-col items-center justify-center h-[100vh]">
                    <form onSubmit={onFormSubmit} noValidate className="flex flex-col justify-center gap-4 w-35 text-white rounded-lg">
                        <h1 className="text-center font-bold text-2xl">Login page</h1>
                        <div className="flex flex-col gap-1">
                            <label htmlFor="email" className="font-semibold">Email</label>
                            <input 
                                    onChange={handleUserInput}
                                    value={signInDetail.email}
                                    required
                                    type="text"
                                    name="email"
                                    id="email"
                                    placeholder="Enter your email.."
                                    className="bg-transparent px-2 py-1 border rounded-sm"/>
                        </div>

                        <div className="flex flex-col gap-1">
                            <label htmlFor="password" className="font-semibold">Password</label>
                            <input 
                                    onChange={handleUserInput}
                                    value={signInDetail.password}
                                    required
                                    type="text"
                                    name="password"
                                    id="password"
                                    placeholder="Enter your password.."
                                    className="bg-transparent px-2 py-1 border rounded-sm"/>
                        </div>
                        <button className="text-lg font-semibold bg-yellow-800 hover:bg-yellow-600 transition-all ease-in-out duration-300 py-2 px-4 mt-2 rounded-sm">Sign in</button>
                        <p className="text-center">
                            Don't have an account ? <Link to={`/register`} className="text-accent">Sign up</Link>
                        </p>
                    </form>
            </div>
        </HomeLayout>
    );
}

export default Signin;