import HomeLayout from "../layouts/HomeLayout";
import aboutMainImage from '../assets/Images/aboutMainImage.png';
import apj from '../assets/Images/apj.png';
import billGates from '../assets/Images/billGates.png';
import nelsonMandela from '../assets/Images/nelsonMandela.png';
import steveJobs from '../assets/Images/steveJobs.png';
function Aboutus(){
    return (
        <HomeLayout>
            <div className="flex flex-col items-center justify-center py-20 px-20 gap-10">
                <div className="space-y-10 flex items-center justify-center gap-20">
                    <div className="w-1/2 flex flex-col gap-10 justify-center">
                        <h1 className="text-5xl text-yellow-500 font-semibold">Affordable and quality education</h1>
                        <p className="text-2xl text-gray-200 w-[92%] scale">We believe in the transformative power of education. Our team is dedicated to revolutionizing the learning experience by providing a cutting-edge platform that fosters knowledge sharing, skill development, and personal growth. With a passion for innovation and a commitment to excellence.</p>
                    </div>

                    <div>
                        <img className="scale-125 drop-shadow-2xl" src={aboutMainImage} alt="about page" />
                    </div>
                </div>

                <div className="carousel w-1/2 my-10 mx-auto">
                    <div id="slide1" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={apj} className="w-40 rounded-full border-2 border-gray-400" />
                        <p className="text-xl text-gray-200">The best teachers are those who not only impart knowledge but also kindle a thirst for knowledge within their students.</p>
                        <h3 className="text-2xl font-semibold">APJ Abdul Kalam</h3>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide4" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={billGates} className="w-40 rounded-full border-2 border-gray-400" />
                        <p className="text-xl text-gray-200">Success is a lousy teacher. It seduce smart people to thinking they can't lose</p>
                        <h3 className="text-2xl font-semibold">Bill Gates</h3>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={nelsonMandela} className="w-40 rounded-full border-2 border-gray-400" />
                        <p className="text-xl text-gray-200">Education is the most powerful weapon which you can use to change the world.</p>
                        <h3 className="text-2xl font-semibold">Nelson Mandela</h3>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                        </div>
                    </div> 
                    <div id="slide4" className="carousel-item relative w-full">
                        <div className="flex flex-col items-center justify-center gap-4 px-[15%]">
                        <img src={steveJobs} className="w-40 rounded-full border-2 border-gray-400" /><p className="text-xl text-gray-200">I'm a very big believer in equal opportunity as opposed to equal outcome.</p>
                        <h3 className="text-2xl font-semibold">Steve Jobs</h3>
                        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </HomeLayout>
    );
}

export default Aboutus;