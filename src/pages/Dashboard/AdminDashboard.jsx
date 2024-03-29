import { ArcElement, BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title,Tooltip } from "chart.js";
import { useEffect } from "react";
import { Bar, Pie } from "react-chartjs-2";
import { BsCollectionPlayFill, BsTrash } from "react-icons/bs";
import {FaUsers} from "react-icons/fa";
import { FcSalesPerformance } from "react-icons/fc";
import { GiMoneyStack } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import HomeLayout from "../../layouts/HomeLayout";
import { deleteCourse, getAllCourses } from "../../redux/slices/courseSlice";
import { getPaymentRecord } from "../../redux/slices/razorpaySlice";
ChartJS.register(ArcElement, BarElement, CategoryScale, Legend, LinearScale, Title, Tooltip);

function AdminDashboard() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { allPayments } = useSelector((state) => state.razorpay);

    console.log("All payments : ", allPayments);

    const myCourses = useSelector((state) => state?.course?.courseList);
    console.log("My courses ", myCourses);

    async function onCourseDelete(id) {
        console.log(id);
        if(window.confirm("Are you sure you want to delete the course ? ")) {
            const res = await dispatch(deleteCourse(id));
            console.log(res);
            if(res?.payload?.success) {
                await dispatch(getAllCourses());
            }
        }
    }


    useEffect(() => {
        (
            async () => {
                await dispatch(getAllCourses());
                await dispatch(getPaymentRecord())
            }
        )()
    }, [])

    return (
        <HomeLayout>
            <div className="min-h-[90vh] pt-5 flex flex-col flex-wrap gap-10 text-white">
                <h1 className="text-center text-5xl font-semibold text-yellow-500">
                    Admin Dashboard
                </h1>

                <div className="grid grid-cols gap-5 m-auto mx-10">
                    

                    <div className="flex flex-col items-center gap-10 p-5 shadow-lg rounded-md">
                        

                        <div className="grid grid-row-2 gap-2">
                            <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold">Subscription Count</p>
                                    <h3 className="text-4xl font-bold">{allPayments?.count}</h3>
                                </div>
                                <FcSalesPerformance className="text-yellow-500 text-5xl"/>
                            </div>
                            <div className="flex items-center justify-between p-5 gap-5 rounded-md shadow-md">
                                <div className="flex flex-col items-center">
                                    <p className="font-semibold">Total Revenue</p>
                                    <h3 className="text-4xl font-bold">{allPayments?.count * 499}</h3>
                                </div>
                                <GiMoneyStack className="text-green-500 text-5xl"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-[10%] w-[80%] self-center flex flex-col items-center justify-center gap-10 mb-10">
                    <div className="flex w-full items-center justify-between">
                        <h1 className="text-center text-3xl font-semibold">
                            Courses overview
                        </h1>

                        <button
                            onClick={() => {
                                navigate("/courses/create")
                            }}
                            className="w-fit bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 rounded py-2 px-4 font-semibold text-lg cursor-pointer"
                        >
                            Create new course
                        </button>
                    </div>

                    <table className="table overflow-x-scroll">
                            <thead>
                                <tr>
                                    <th>S No</th>
                                    <th>Course Title</th>
                                    <th>Course Category</th>
                                    <th>Instructor</th>
                                    <th>Total Lectures</th>
                                    <th>Description</th>
                                    <th>Actions</th>

                                </tr>
                            </thead>
                            <tbody>
                                {myCourses?.map((course, idx) => {
                                    return (
                                        <tr key={course._id}>
                                            <td>{idx+1}</td>
                                            <td>
                                                <textarea readOnly value={course?.title} className="w-40 h-auto bg-transparent resize-none"></textarea>
                                            </td>
                                            <td>
                                                {course?.category}
                                            </td>
                                            <td>
                                                {course?.createdBy}
                                            </td>
                                            <td>
                                                {course?.numOfLectures}
                                            </td>
                                            <td className="max-w-28 overflow-hidden text-ellipsis whitespace-nowrap">
                                                <textarea
                                                    value={course?.description}
                                                    readOnly
                                                    className="w-80 h-auto bg-transparent resize-none"
                                                >

                                                </textarea>
                                            </td>
                                            <td className="flex items-center gap-4">
                                                <button
                                                    className="bg-green-500 hover:bg-green-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold"
                                                    onClick={() => navigate("/course/displaylectures", {state: {...course}})}
                                                >
                                                    <BsCollectionPlayFill />
                                                </button>
                                                <button
                                                    className="bg-red-500 hover:bg-red-600 transition-all ease-in-out duration-300 text-xl py-2 px-4 rounded-md font-bold"
                                                    onClick={() => onCourseDelete(course._id)}
                                                >
                                                    <BsTrash />
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                    </table>
                </div>
            </div>
        </HomeLayout>
    );
}

export default AdminDashboard;