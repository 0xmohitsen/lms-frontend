import { Link } from "react-router-dom";
import HomeLayout from "../layouts/HomeLayout";
import homePageMainImage from '../assets/Images/homePageMainImage.png';

function Home(){
    return (

        <HomeLayout>
            <div className="pt-10 text-white flex items-center justify-center gap-10 mx-16 h-[90vh]">

                <div className="w-1/2 space-y-6">
                        <h1 className="text-5xl font-semibold">Find out best <span className="text-yellow-500 font-bold">Online courses</span></h1>
                        <p className="text-xl text-gray-200">
                            We have a large library of courses taught by highly skilled and qualified faculties at very affordable cost.
                        </p>

                <div className="space-x-6">
                    <Link to={`/courses`} >
                        <button className="bg-yellow-500 font-semibold text-lg px-5 py-3 rounded-md hover:bg-yellow-600 transition-all ease-in-out duration-300 cursor-pointer">Explore courses</button>
                    </Link>
                    <Link to={`/contacts`} >
                        <button className="border border-yellow-500 font-semibold text-lg px-5 py-3 rounded-md hover:bg-yellow-600 transition-all ease-in-out duration-300 cursor-pointer mt-2">Contact Us</button>
                    </Link>
                </div>
                </div>

                <div className="w-1/2 flex items-center justify-center">
                    <img src={homePageMainImage} alt="home page" />
                </div>

            </div>
        </HomeLayout>

    );
}

export default Home;
