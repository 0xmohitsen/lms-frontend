import { useDispatch, useSelector } from "react-redux";
import HomeLayout from "../../layouts/HomeLayout";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { getUserData } from "../../redux/slices/authSlice";

function Profile(){

    const dispatch = useDispatch();

    async function getUser(){
        await dispatch(getUserData());
    }

    getUser();
    const userData = useSelector(state => state?.auth?.data);

    console.log(userData);

    return (
        <HomeLayout>
            <div className="min-h-[90vh] flex items-center justify-center">

                    <div className="py-10 flex flex-col rounded-lg gap-4 p-4 text-white w-96  shadow-[0_0_10px_black]">
                            <img 
                                src={userData?.user?.avatar?.secure_url}
                                className="w-40 m-auto rounded-full border border-black"
                                alt="" 
                            />
                            <h3 className="text-xl font-bold text-center capitalize text-purple-300">
                                {userData?.user?.username}
                            </h3>

                            <div className="flex flex-col gap-2 justify-center text-lg font-semibold text-purple-600">
                                <p>Email: {userData?.user?.email}</p>
                                <p>Role: {userData?.user?.role}</p>
                                <p>Subscription: {userData?.user?.subscription?.status === "active" ? "Active" : "Inactive"}</p>
                            </div>

                            <div className="flex items-center justify-between gap-2">
                                <Link 
                                    to={`/user/change-password`}
                                    className="w-1/2 bg-yellow-600  hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold p-2 cursor-pointer text-center"
                                >
                                    <button>
                                        Change password
                                    </button>
                                </Link>
                                <Link 
                                    to={`/user/update`}
                                    className="w-1/2 bg-yellow-600  hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm font-semibold p-2 cursor-pointer text-center"
                                >
                                    <button>
                                        Edit Profile
                                    </button>
                                </Link>

                            </div>
                                {userData?.user?.subscription?.status === "active" && (
                                    <button className="w-full bg-red-600 hover:bg-red-500 transition-all ease-in-out duration-300 rounded-sm font-semibold p-2 cursor-pointer text-center">
                                        Cancel susbcription
                                    </button>
                                )}
                    </div>
            </div>
        </HomeLayout>
    )
}

export default Profile;