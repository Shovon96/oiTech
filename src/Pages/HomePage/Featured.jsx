import useAxiosPublic from "../../Hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import ProductsCard from "../../Shared/ProductsCard";
import SectionTitle from "../../Shared/SectionTitle";

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
            <SectionTitle 
            heading={"Featured Products"}
            title={"Elevate your digital experience with our innovative products, merging style and functionality seamlessly.Unleash possibilities with our advanced tech lineup, designed to redefine the way you live and work."}
            ></SectionTitle>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {
                    featured?.map(item =>
                        <ProductsCard key={item._id} item={item}></ProductsCard>
                    )
                }
            </div>
        </>
    );
};

export default Featured;