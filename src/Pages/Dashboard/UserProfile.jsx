import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import PaymentModal from "./PaymentModal";
import { useQuery } from "@tanstack/react-query";
import { axiosSecure } from "../../Hooks/useAxiosSecure";

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    let [isOpen, setIsOpen] = useState(false);

    const price = 20
    const closeModal = () => {
        setIsOpen(false);
    };

    const userInfo = {
        name: user?.displayName,
        email: user?.email,
        price,

    }

    const { data, refetch } = useQuery({
        queryKey: ['data'],
        queryFn: async () => {
            const { data: res } = await axiosSecure.get(`/subscribers/${user?.email}`)
            return res
        }
    })

    // const handleSubscribe = () => {
    //     // If not subscribed, open the payment modal
    //     if (!isSubscribed) {
    //         setIsPaymentModalOpen(true);
    //     } else {
    //         // Handle already subscribed scenario
    //         console.log('User is already subscribed');
    //     }
    // };

    // const handlePaymentSuccess = () => {
    //     // Perform actions after successful payment
    //     !setIsSubscribed(); // Update subscription status
    //     setIsPaymentModalOpen(false); // Close the payment modal
    // };

    // const handlePaymentCancel = () => {
    //     // Handle payment cancellation or failure
    //     setIsPaymentModalOpen(false); // Close the payment modal
    // };

    return (
        <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-4">My Profile</h1>
            <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-lg shadow-blue-600">
                <div className="flex justify-center">
                    <img src={user?.photoURL} alt="User" className="w-36 h-36 mb-4 rounded-full" />
                </div>
                <p className="text-lg font-semibold mb-2">Name: {user?.displayName}</p>
                <p className="text-gray-600 mb-4">Email: {user?.email}</p>

                {
                    <button
                        onClick={() => setIsOpen(true)}
                        disabled={data?._id}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        {data?._id ? 'Verified' : `Subscribe for ${price}`}
                    </button>
                }

                <PaymentModal
                    closeModal={closeModal}
                    isOpen={isOpen}
                    userInfo={userInfo}
                    refetch={refetch}
                />
            </div>
        </div>

    );
};
export default UserProfile;