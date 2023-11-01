import { Link, useNavigate } from "react-router-dom";

function NotFound(){

    const navigate = useNavigate();
    return (
        <div className="h-screen w-full flex flex-col justify-center items-center text-white bg-[#0E2954]">
            <h1 className="text-[10rem] font-extrabold">404</h1>
            <p className="absolute bg-black rotate-6 text-xl">Page not found!</p>

            <div className="border border-yellow-500 px-6 py-3 hover:bg-yellow-500 hover:text-black font-semibold transition-all ease-in-out duration-300">
               <Link onClick={() => navigate(-1)}><button >Go back</button></Link> 
            </div>
        </div>
    );
}

export default NotFound;