
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SectionTitle from "../../Shared/SectionTitle";
import ProductsCard from "../../Shared/ProductsCard";
import { useState } from "react";

const Products = () => {

    const axiosPublic = useAxiosPublic();
    const [searchQuery, setSearchQuery] = useState('');

    const { data: trending = [], isLoading } = useQuery({
        queryKey: ['trendings',],
        queryFn: async () => {
            const res = await axiosPublic.get('/trendings', { params: { searchQuery } })
            return res.data
        }
    })
    // console.log(trending);

    const filteredTrending = trending.filter((item) =>
        item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (isLoading) {
        return <div className="flex justify-center items-center h-[66vh]">
            <h1 className="text-xl text-[#eab308]">Loding....</h1>
        </div>
    }

    return (
        <>
            <SectionTitle heading={"All Products Here"} title={""}></SectionTitle>
            <div className="mb-4">
                <input
                    type="text"
                    placeholder="Search by tags"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="border p-2 pr-12 rounded-tl-md rounded-bl-md outline-yellow-500"
                />
                <button className="px-4 py-2 bg-blue-500 text-white rounded-tr-md rounded-br-md">
                    Search
                </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {
                    filteredTrending?.map(item =>
                        <ProductsCard key={item._id} item={item}></ProductsCard>
                    )
                }
            </div>
        </>
    );
};

export default Products;