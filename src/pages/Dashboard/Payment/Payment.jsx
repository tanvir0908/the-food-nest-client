import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// todo: add publishable key
const stripePromise = loadStripe(import.meta.env.VITE_payment_gateway_pk);
export default function Payment() {
  return (
    <div>
      <SectionTitle heading={"Payment"} subHeading={"Please pay to eat"} />
      <div>
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
}
