import { useState } from "react";
import HomeLayout from "../layouts/HomeLayout";
import toast from "react-hot-toast";
import { isEmail } from "../helpers/regexMatcher";
import axiosInstance from "../config/axiosInstance";

function Contact(){

    const [userInput , setUserInput] = useState({
        name: '',
        email: '',
        message: ''
    });

    function handleInputChange(e){
        const {name , value} = e.target;

        setUserInput({
            ...userInput,
            [name]: value
        });
    }
        async function onFormSubmit(e){
            e.preventDefault();

            if(!userInput.name || !userInput.email || !userInput.message){
                toast.error('All fields are mandatory');
                return;
            }
            if(!isEmail(userInput.email)){
                toast.error('Invalid email provided');
                return;
            }

            try {
                const response = axiosInstance.post("/contact" , userInput);

                toast.promise(response , {
                    loading: "Submitting your query",
                    success: "Form submitted successfully",
                    error: "Failed to submit your form"
                })

                const responseData = await response;
                console.log(responseData);
                if(responseData?.data){
                    setUserInput({
                        name: '',
                        email: '',
                        message: ''
                    })
                }
            } catch (error) {
                toast.error('Operation failed...')
            }
        }
    
    return (
        <HomeLayout>
            <div className="flex flex-col items-center justify-center h-[100vh]">
                <form onSubmit={onFormSubmit} noValidate className="flex flex-col items-center justify-center gap-3 p-4 rounded-lg w-[22rem] text-white">
                    <h1 className="text-3xl font-semibold">Contact form</h1>

                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="name" className="font-semibold text-lg">Name</label>
                        <input 
                                required
                                type="text"
                                id="name"
                                placeholder="Enter your name.."
                                className="bg-white border px-3 py-1 rounded-sm text-black"
                                name="name"
                                onChange={handleInputChange}
                                value={userInput.name}
                        />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="email" className="font-semibold text-lg">Email</label>
                        <input 
                                required
                                type="text"
                                id="email"
                                placeholder="Enter your email.."
                                className="bg-white border px-3 py-1 rounded-sm text-black"
                                name="email"
                                onChange={handleInputChange}
                                value={userInput.email}
                        />
                    </div>
                    <div className="flex flex-col w-full gap-1">
                        <label htmlFor="message" className="font-semibold text-lg">Message</label>
                        <textarea 
                                required
                                type="text"
                                id="message"
                                placeholder="Enter your message.."
                                className="bg-white border px-3 py-1 rounded-sm resize-none h-[22vh] text-black"
                                name="message"
                                onChange={handleInputChange}
                                value={userInput.message}
                        />
                    </div>
                    <button className="w-full text-lg font-semibold py-2 px-4 mt-2 bg-yellow-800 hover:bg-yellow-600 rounded-sm transition-all ease-in-out duration-300">Submit</button>
                </form>
            </div>
        </HomeLayout>
    );
}

export default Contact;