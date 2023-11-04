import { useDispatch, useSelector } from "react-redux";
import CourseCard from "../../components/CourseCard";
import HomeLayout from "../../layouts/HomeLayout";
import { getAllCourses } from "../../redux/slices/courseSlice";
import { useEffect } from "react";

function CourseList(){

    const dispatch = useDispatch();

    const { courseList } = useSelector((state) => state.course);

    async function loadCourse(){
        await dispatch(getAllCourses());
    }

    useEffect(() => {
        loadCourse();
    }, []);

    return (
        <HomeLayout>
            <div className="min-h-[90vh] flex flex-col text-white pt-12 pl-20 pr-20 gap-10">
                <h1 className="text-center text-4xl font-semibold mb-5">Explore courses made by { " " }
                    <span className="text-yellow-500 font-bold">Industry experts</span>
                </h1>

                <div className="flex flex-wrap gap-14 mb-10 justify-center">
                    {courseList?.map((element) => {
                        return <CourseCard key={element._id} data={element}/>
                    })}
                </div>
            </div>
        </HomeLayout>
    );
}

export default CourseList;