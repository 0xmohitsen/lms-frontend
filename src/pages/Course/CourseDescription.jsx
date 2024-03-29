import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import HomeLayout from "../../layouts/HomeLayout";
import { useEffect } from "react";
import { getUserData } from "../../redux/slices/authSlice";

function CourseDescription(){

    const { state } = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        getUserData();
    });

    const {role , data} = useSelector((state) => state.auth);

    console.log("What data is coming ",data);
    return (
        <HomeLayout>
            <div className="flex flex-col min-h-[90vh] items-center justify-center text-white pt-12 px-20 flex-wrap">
                <div className="grid grid-cols-2 gap-10 py-10 px-20 relative">
                    <div className="space-y-4">
                        <img 
                            src={state?.thumbnail?.secure_url} 
                            alt="course thumbnail" 
                            className="w-full h-64"
                        />
                        <div className="flex flex-col items-center justify-center text-xl">
                            <p className="font-semibold"><span className="text-yellow-500">Total lectures: {" "}</span><span>{state?.numOfLectures}</span></p>
                            <p className="font-semibold"><span className="text-yellow-500">Instructor: {" "}</span><span>{state?.createdBy}</span></p>
                        </div>

                        {role === 'ADMIN' || data?.user?.subscription?.status === 'active' ? ( <button onClick={() => navigate("/course/displaylectures" , {state: {...state}})} className="bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-700 transition-all ease-in-out duration-300">Watch Lectures</button>) : ( <button onClick={() => navigate("/checkout")} className="bg-yellow-600 text-xl rounded-md font-bold px-5 py-3 w-full hover:bg-yellow-700 transition-all ease-in-out duration-300">Subscribe</button>)}
                    </div>

                    {/* right part of the grid */}
                    <div className="space-y-2 text-xl">
                        <h1 className="text-3xl font-bold text-yellow-500 mb-5 text-center">{state?.title}</h1>
                        <p className="text-yellow-500">
                            Course Description: { " " }
                        </p>
                        <p>
                            {state?.description}
                        </p>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default CourseDescription;