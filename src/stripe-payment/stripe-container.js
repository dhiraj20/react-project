import React, { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./payment-form";

// Replace with your Stripe **publishable** key
const PUBLIC_KEY =
  "pk_test_51RgTeXBTXEqKA6KQKNow0Mp1uLJUlwn7zeQ9hsA2P7yrcoDy3Afrxb9o5VeVnWHwcszm1JCV2HdzwA2r3nRnfXB00073rplG7a";

const stripePromise = loadStripe(PUBLIC_KEY);

const options = {
  mode: "payment",
  amount: 50,
  currency: "usd",
};

const StripeContainer = () => {
  useEffect(() => {
    // This effect runs once when the component mounts
    // You can perform any setup or initialization here if needed
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("http://localhost:4000/data", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*", // Allow CORS for local development
      },
    });
    const data = await res.json();
    console.log("Data fetched from server:", data);
  };

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm />
    </Elements>
  );
};

export default StripeContainer;
