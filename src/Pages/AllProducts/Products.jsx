
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SectionTitle from "../../Shared/SectionTitle";
import ProductsCard from "../../Shared/ProductsCard";

const Products = () => {

    const axiosPublic = useAxiosPublic();

    const { data: trending = [], isLoading } = useQuery({
        queryKey: ['trendings',],
        queryFn: async () => {
            const res = await axiosPublic.get('/trendings')
            return res.data
        }
    })
    // console.log(trending);

    if (isLoading) {
        return <div className="flex justify-center items-center h-[70vh]"><h1 className="text-xl text-[#eab308]">Loding....</h1></div>
    }

    return (
        <>
            <SectionTitle heading={"All Products Here"} title={""}></SectionTitle>
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

export default Products;