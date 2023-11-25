import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SectionTitle from "../../Shared/SectionTitle";
import ProductsCard from "../../Shared/ProductsCard";
import { useState } from "react";

const Trending = () => {

    const axiosPublic = useAxiosPublic();
    const [sort, setSort] = useState(false)

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
    
    if(isLoading){
        return <div className="flex justify-center items-center h-[70vh]">Loding....</div>
    }

    return (
        <>
            <SectionTitle
                heading={"Trending Products"}
                title={"Elevate your digital experience with our innovative products, merging style and functionality seamlessly.Unleash possibilities with our advanced tech lineup, designed to redefine the way you live and work."}>
            </SectionTitle>
            <div className="flex justify-end mb-4">
                <button onClick={handleSortUpvote} className="px-6 border">Sort By UpVote</button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {
                    trending?.map(item =>
                        <ProductsCard key={item._id} item={item}></ProductsCard>
                    )
                }
            </div>
        </>
    );
};

export default Trending;