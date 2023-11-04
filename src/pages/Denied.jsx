import { useNavigate } from "react-router-dom";

function Denied(){

    const navigate = useNavigate();

        return (
            <main className="h-screen flex flex-col items-center justify-center text-white bg-[#1A2253]">
                <h1 className="text-9xl font-semibold tracking-widest">403</h1>
                <div className="bg-black px-3 rounded-md text-sm rotate-12 absolute mt-2">
                    Access denied
                </div>
                <button onClick={() => navigate(-1)} className="mt-4 text-2xl bg-yellow-600 px-6 py-2">
                    Go back
                    </button>
            </main>
        )
}

export default Denied;