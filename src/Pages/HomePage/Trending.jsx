import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SectionTitle from "../../Shared/SectionTitle";
import ProductsCard from "../../Shared/ProductsCard";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ImNewTab } from "react-icons/im";

const Trending = () => {

    const axiosPublic = useAxiosPublic();
    const [sort, setSort] = useState(false);
    const [visibleCardCount, setVisibleCardCount] = useState(6);

    const { data: trending = [], refetch, isLoading } = useQuery({
        queryKey: ['trendings', sort],
        queryFn: async () => {
            if (sort) {
                const res = await axiosPublic.get('/sort?sort=true')
                return res.data
            } else {
                const res = await axiosPublic.get('/trendings')
                return res.data
            }
        }
    })
    const handleSortUpvote = () => {
        setSort(!sort)
        refetch()
    }

    const handleShowAll = () => {
        setVisibleCardCount(trending.length);
    };

    if (isLoading) {
        return <div className="flex justify-center items-center h-[70vh]"><h1 className="text-xl text-[#eab308]">Loding....</h1></div>
    }

    return (
        <>
            <SectionTitle
                heading={"Trending Products"}
                title={"Elevate your digital experience with our innovative products, merging style and functionality seamlessly.Unleash possibilities with our advanced tech lineup, designed to redefine the way you live and work."}>
            </SectionTitle>
            <div className="flex justify-end mb-4">
                <button onClick={handleSortUpvote} className="px-3 py-2 shadow-md bg-blue-500 rounded-md text-white font-bold border">Sort By UpVote</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {
                    trending.slice(0, visibleCardCount)?.map(item =>
                        <ProductsCard key={item._id} item={item}></ProductsCard>
                    )
                }
            </div>
            <div className="flex justify-center mb-4">
                {visibleCardCount < trending.length && (
                    <Link to={'/products'}>
                        <button onClick={handleShowAll} className="px-6 py-2 bg-blue-500 text-white font-bold shadow-lg rounded-md border flex items-center gap-2">
                            Show All Products <ImNewTab />
                        </button>
                    </Link>
                )}
            </div>
        </>
    );
};

export default Trending;