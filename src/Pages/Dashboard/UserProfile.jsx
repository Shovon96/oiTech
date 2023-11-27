import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const UserProfile = () => {
    const { user } = useContext(AuthContext);
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const handleSubscribe = () => {
        // If not subscribed, open the payment modal
        if (!isSubscribed) {
            setIsPaymentModalOpen(true);
        } else {
            // Handle already subscribed scenario
            console.log('User is already subscribed');
        }
    };

    const handlePaymentSuccess = () => {
        // Perform actions after successful payment
        !setIsSubscribed(); // Update subscription status
        setIsPaymentModalOpen(false); // Close the payment modal
    };

    const handlePaymentCancel = () => {
        // Handle payment cancellation or failure
        setIsPaymentModalOpen(false); // Close the payment modal
    };

    return (
        <div className="text-center p-8">
            <h1 className="text-3xl font-bold mb-4">My Profile</h1>
            <div className="max-w-md mx-auto bg-white p-6 rounded-md shadow-lg shadow-blue-600">
                <div className="flex justify-center">
                <img src={user?.photoURL} alt="User" className="w-36 h-36 mb-4 rounded-full" />
                </div>
                <p className="text-lg font-semibold mb-2">Name: {user?.displayName}</p>
                <p className="text-gray-600 mb-4">Email: {user?.email}</p>

                {!isSubscribed && (
                    <button
                        onClick={handleSubscribe}
                        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                    >
                        Subscribe for $20
                    </button>
                )}

                {isSubscribed && (
                    <div className="mt-4">
                        <p className="text-green-500 font-semibold">Verified</p>
                        {/* Other subscription details can be added here */}
                    </div>
                )}

                {/* Payment Modal */}
                {isPaymentModalOpen && (
                    <div className="mt-8">
                        {/* Payment form and related components go here */}
                        <h2 className="text-xl font-semibold mb-4">Payment Modal</h2>
                        {/* Add your payment form components */}
                        <button
                            onClick={handlePaymentSuccess}
                            className="bg-green-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-green-700"
                        >
                            Pay Now
                        </button>
                        <button
                            onClick={handlePaymentCancel}
                            className="border px-4 py-2 rounded-md text-gray-600 hover:bg-gray-100"
                        >
                            Cancel
                        </button>
                    </div>
                )}
            </div>
        </div>

    );
};
export default UserProfile;