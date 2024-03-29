import { useEffect } from "react";
import toast from "react-hot-toast";
import {BiRupee} from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import HomeLayout from "../../layouts/HomeLayout";
import { getRazorPayId, purchaseCourseBundle, verifyUserPayment } from "../../redux/slices/razorpaySlice";

function Checkout() {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { isPaymentVerified } = useSelector((state) => state.razorpay);
    
    const razorpayKey = useSelector((state) => state?.razorpay?.key);
    const subscription_id = useSelector((state) => state?.razorpay?.subscription_id);
    

    const paymentDetails = {
        razorpay_payment_id: "",
        razorpay_subscription_id: "",
        razorpay_signature: "",
    }

    async function handleSubscription(e) {
        e.preventDefault();
        console.log(subscription_id,razorpayKey);
        if(!razorpayKey || !subscription_id) {
            toast.error("something went wrong");
            return;
        }
        const options = {
            key: razorpayKey,
            subscription_id: subscription_id,
            name: "Tech with Mohit pvt ltd",
            description: "Subscription",
            theme: {
                color: '#F37254'
            },
            handler: async function (response) {
                paymentDetails.razorpay_payment_id = response.razorpay_payment_id;
                paymentDetails.razorpay_subscription_id = response.razorpay_subscription_id;
                paymentDetails.razorpay_signature = response.razorpay_signature;
                toast.success("payment successful");

                console.log("Payment details after successful payment : ",paymentDetails);

                const res = await dispatch(verifyUserPayment(paymentDetails));
                console.log("res on checkout", res, paymentDetails);
                
                !isPaymentVerified ? navigate("/checkout/success") : navigate("/checkout/fail");
            }
        };

        const paymentOptions = new window.Razorpay(options);
        paymentOptions.open();
    }

    useEffect(() => {
        (async () => {
          await dispatch(getRazorPayId());
          await dispatch(purchaseCourseBundle());
        })();
      }, []);

    return (
        <HomeLayout>
            <form
                onSubmit={handleSubscription}
                className="min-h-[90vh] flex items-center justify-center text-white"
            >
                <div className="w-80 h-[26rem] flex flex-col justify-center shadow-[0_0_10px_black] rounded-lg relative">
                    <h1 className="bg-yellow-500 absolute top-0 w-full text-center py-4 text-2xl font-bold rounded-tl-lg rounded-tr-lg">
                        Subscription bundle
                    </h1>
                    <div className="px-4 space-y-5 text-center">
                        <p className="text-[17px]">
                        This purchase will allow you to access all the available courses on our platform for {" "}

                        <span className="font-bold text-yellow-500">1 yr duration</span>{" "}
                        All the existing and new launched courses will be available
                        </p>

                        <p className="flex items-center justify-center gap-1 text-2xl font-bold text-yellow-500">
                            <BiRupee />
                            <span>1</span> only

                        </p>
                        <div className="text-gray-200">
                            <p>100% refund on cancellation</p>
                            <p>Terms and conditions apply *</p>
                        </div>

                        <button
                            type="submit"
                            className="bg-yellow-500 hover:bg-yellow-600 transition-all ease-in-out duration-300 absolute bottom-0 w-full left-0 text-xl font-bold rounded-bl-lg rounded-br-lg py-2"
                        >
                            buy now
                        </button>

                    </div>
                </div>
            </form>
        </HomeLayout>
    )
}

export default Checkout;