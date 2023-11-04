import { useNavigate } from "react-router-dom";

function CourseCard({ data }){
    const navigate = useNavigate();

    return (
        <div onClick={() => navigate("/courses/description", { state: {...data}})} className="hover:scale-[1.1] transition-all ease-in-out duration-300 min-h-[430px] w-[22rem] shadow-lg rounded-lg group overflow-hidden cursor-pointer bg-zinc-700 text-white">
            <div className="overflow-hidden">
                <img 
                    src={data?.thumbnail?.secure_url} 
                    alt="Course thumbnail" 
                    className="h-48 w-full rounded-tl-lg rounded-tr-lg group"
                />

                <div className="p-3 space-y-1 text-white">
                    <h2 className="text-xl font-bold text-yellow-500 line-clamp-2">{data?.title}</h2>
                    <p className="">{data?.description}</p>
                    <p className="font-semibold">Category: <span>{data?.category}</span></p>
                    <p className="font-semibold">Instructor: <span>{data?.createdBy}</span></p>
                    <p className="font-semibold">Total no. of lectures: <span>{data?.numOfLectures}</span></p>
                </div>
            </div>
        </div>
    )
}

export default CourseCard;