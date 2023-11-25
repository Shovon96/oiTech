import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import SectionTitle from "../../Shared/SectionTitle";
import ProductsCard from "../../Shared/ProductsCard";

const Trending = () => {

    const axiosPublic = useAxiosPublic()

    const { data: trending = [] } = useQuery({
        queryKey: ['trendings'],
        queryFn: async () => {
            const res = await axiosPublic.get('/trendings')
            return res.data
        }
    })
    console.log(trending);

    return (
        <>
            <SectionTitle 
            heading={"Trending Products"} 
            title={"Elevate your digital experience with our innovative products, merging style and functionality seamlessly.Unleash possibilities with our advanced tech lineup, designed to redefine the way you live and work."}>
            </SectionTitle>
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