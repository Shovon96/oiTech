import { axiosSecure } from "../../Hooks/useAxiosSecure";

// create payment intent
export const createPaymentIntent = async (price) => {
    const { data } = await axiosSecure.post("/create-payment-intent", price);
    return data;
  };
  
  // save booking info in database
  export const saveSubscriberInfo = async (paymentInfo) => {
    const { data } = await axiosSecure.post("/subscribers", paymentInfo);
    return data;
  };