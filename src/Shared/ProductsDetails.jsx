import { useParams } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { BiSolidUpArrow } from "react-icons/bi";
// import VoteButton from "./VoteButton";

const ProductsDetails = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic()
    const { data: [trendingData, featuredData] = [] } = useQuery({
        queryKey: ['trendingAndFeatured', id],
        queryFn: async () => {
            const trendingPromise = axiosPublic.get(`/trending/${id}`);
            const featuredPromise = axiosPublic.get(`/features/${id}`);
            
            const [trendingResponse, featuredResponse] = await Promise.all([trendingPromise, featuredPromise]);
            return [trendingResponse.data, featuredResponse.data];
        }
    });

    const { image, name, description, tags, externalLinks, upvotes, timestamp } = trendingData || featuredData || {};

    return (
        <>
            <div className="container mx-auto mt-8">
                <div className=" mx-auto bg-white p-6 rounded-md flex lg:flex-row flex-col gap-6">
                    <div className="flex-1 border rounded-md shadow-lg">
                        <img src={image} alt={name} className="w-full h-auto lg:mt-12" />
                    </div>
                    <div className="flex-1 border rounded-md p-5">
                        <h1 className="text-3xl font-bold mb-2">{name}</h1>
                        <p className="text-gray-500 mb-4">{description}</p>

                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">Tags:</h2>
                            <ul className="list-inside">
                                {tags?.map((tag, index) => (
                                    <li className="text-sm text-blue-600 ml-4" key={index}>#{tag}</li>
                                ))}
                            </ul>
                        </div>

                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">External Links:</h2>
                            <ul className="list-disc list-inside text-sm lg:text-base">
                                {/* {Object?.entries(externalLinks)?.map(([key, value]) => (
                                    <li key={key}>
                                        <strong>{key}:</strong> {value}
                                    </li>
                                ))} */}
                                <li className="font-bold">Official: <small>{externalLinks?.officialSite}</small></li>
                                <li className="font-bold">Documentation: <small>{externalLinks?.documentation}</small></li>
                                <li className="font-bold">GitHub: <small>{externalLinks?.github}</small></li>
                            </ul>
                        </div>

                        <div className="mb-4 gap-12 flex">
                            <button title="vote"
                                className="border px-6 py-2 rounded-md bg-blue-600 text-white font-semibold flex items-center gap-1">
                                Vote<BiSolidUpArrow />{upvotes}
                            </button>
                            <button title="Report"
                                className="border px-6 py-2 rounded-md text-gray-500">
                                Report
                            </button>

                            {/* <VoteButton upvotes={upvotes}></VoteButton> */}
                        </div>

                        <div className="mb-4">
                            <h2 className="text-xl font-semibold mb-2">Timestamp:</h2>
                            <p>{new Date(timestamp).toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsDetails;