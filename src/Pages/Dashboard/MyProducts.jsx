import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import SectionTitle from "../../Shared/SectionTitle";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const MyProducts = () => {

    const { user } = useContext(AuthContext)
    const axiosSecure = useAxiosSecure()

    const { data: myProductsData = [], refetch } = useQuery({
        queryKey: ['myProducts'],
        queryFn: async () => {
            refetch()
            const myProducts = await axiosSecure.get(`/trendings/${user?.email}`)
            return myProducts.data
        }
    })
    // console.log(myProductsData);

    // delete user product
    const handleDeleteItem = item => {
        Swal.fire({
            title: "Are you sure?",
            text: `You won't be delete ${item?.name}`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/trendings/${item._id}`);
                // console.log(res.data);
                if (res.data.deletedCount > 0) {
                    refetch()
                    Swal.fire({
                        position: "top-center",
                        icon: "success",
                        title: `${item?.name} has been Delete!`,
                        showConfirmButton: false,
                        timer: 1000
                    });
                }

            }
        });
    }

    return (
        <>
            <div>
                <SectionTitle heading={`I Have Added ${myProductsData.length} Products`} title={""}></SectionTitle>
            </div>
            <div className="grid grid-cols-2 gap-6 max-w-5xl mx-auto">
                {
                    myProductsData?.map(prod =>
                        <div key={prod._id} className="container mx-auto mt-8 mb-4">
                            <div className=" mx-auto bg-white p-6 rounded-md shadow-lg shadow-gray-500">
                                <div className="flex gap-12 items-center">
                                    <img src={prod?.image} alt='' className="w-48 h-44" />
                                    <div>
                                        <h1 className="text-2xl font-bold mb-2">{prod?.name}</h1>
                                        <div className="mb-2 flex">
                                            <h2 className="text-lg font-semibold mb-2">Tags:</h2>
                                            <ul className="list-inside flex mt-2">
                                                {prod?.tags?.map((tag, index) => (
                                                    <li className="text-sm text-blue-600 ml-2" key={index}>#{tag}</li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-lg font-semibold mb-2 mt-4">External Links:</h2>
                                <ul className="list-disc list-inside text-sm lg:text-base">
                                    <li className="font-bold">Official: <small>{prod?.externalLinks?.officialSite}</small></li>
                                    <li className="font-bold">Documentation: <small>{prod?.externalLinks?.documentation}</small></li>
                                    <li className="font-bold">GitHub: <small>{prod?.externalLinks?.github}</small></li>
                                </ul>
                                <div className="mt-2 flex gap-6">
                                    {/* update product */}
                                    <Link to={`/dashboard/updateProduct/${prod._id}`}>
                                        <button className="btn btn-sm btn-warning text-white uppercase">update <FaEdit /></button>
                                    </Link>
                                    {/* delete product */}
                                    <button onClick={() => handleDeleteItem(prod)} className="btn btn-sm btn-error text-white uppercase">delete <MdDelete /></button>
                                </div>
                            </div>
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default MyProducts;