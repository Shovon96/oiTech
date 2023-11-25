
import { Link } from "react-router-dom";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { BiSolidUpArrow } from "react-icons/bi";

const Featured = () => {
    const axiosPublic = useAxiosPublic()

    const { data: featured = [] } = useQuery({
        queryKey: ['featured'],
        queryFn: async () => {
            const res = await axiosPublic.get('/features')
            return res.data
        }
    })
    // console.log(featured);

    return (
        <>
            <div>
                <h1 className="text-4xl font-extrabold text-center mt-10 mb-3">Featured Products</h1>
                <p className="text-gray-400 px-2 md:px-32 lg:px-72 text-center mb-6">Elevate your digital experience with our innovative products, merging style and functionality seamlessly.Unleash possibilities with our advanced tech lineup, designed to redefine the way you live and work.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {
                    featured?.map(item =>
                        <div key={item._id} className="border rounded-md shadow-xl">
                            <img className="h-56 w-full rounded-md" src={item?.image} alt="" />
                            <Link to={`/featured/${item._id}`}>
                                <h1 title="see details" className="text-2xl my-2 font-bold text-center hover:text-blue-600 hover:underline">{item?.name}</h1>
                            </Link>
                            <div className="flex justify-between px-4 items-center py-2">
                                <div>
                                    <div className="text-blue-700 flex gap-1">
                                        {
                                            item?.tags?.map((tag, index) => <p key={index}><small>#{tag}</small></p>)
                                        }
                                    </div>
                                    <p>Post Data: <small className="text-gray-400">{item?.timestamp}</small></p>
                                </div>
                                <button title="vote" className="border px-6 py-1 rounded-md bg-[#ca8a04] text-white font-semibold"><BiSolidUpArrow />{item?.upvotes}</button>
                            </div>
                            
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default Featured;