import { useParams } from "react-router-dom";
import useAxiosPublic from "../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
// import { BiSolidUpArrow } from "react-icons/bi";
// import { useContext } from "react";
// import { AuthContext } from "../AuthProvider/AuthProvider";
import UserReview from "./UserReview";
import Rating from "react-rating";
import VoteButton from "./VoteButton";
// import VoteButton from "./VoteButton";

const ProductsDetails = () => {
    const { id } = useParams();
    const axiosPublic = useAxiosPublic()
    // const {user} = useContext(AuthContext)

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

    // get the user review info
    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/reviews`)
            return res.data
        }
    })

    return (
        <>
            {/* Products Details */}
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
                            {/* <button title="vote"
                                className="border px-6 py-2 rounded-md bg-blue-600 text-white font-semibold flex items-center gap-1">
                                Vote<BiSolidUpArrow />{upvotes}
                            </button> */}
                            <VoteButton upvotes={upvotes}></VoteButton>
                            {/* user review modal show */}
                            <UserReview></UserReview>
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

            {/* users review */}
            <div>
                <h1 className="text-4xl font-bold text-center my-6">Customer Review</h1>
                <div className="max-w-3xl my-6 mx-auto grid grid-cols-2 gap-12">
                    {
                        reviews.length === 0 ?
                            <div>
                                <p className="text-lg text-end my-6 text-gray-400">No Review Available</p>
                            </div>
                            :
                            reviews?.map(review =>
                                <div className=" shadow-xl rounded-lg p-4" key={review._id}>
                                    <img className="h-10 w-10 mx-2 rounded-full" src={review?.image} alt="" />
                                    <h2 className="font-bold my-2">{review?.name}</h2>
                                    <Rating
                                        initialRating={review?.rating}
                                        emptySymbol={<span className="text-gray-300 text-xl">☆</span>}
                                        fullSymbol={<span className="text-yellow-500 text-xl">★</span>}
                                        readonly
                                    />
                                    <p>{review?.comment}</p>
                                </div>
                            )
                    }
                </div>
            </div>
        </>
    );
};

export default ProductsDetails;