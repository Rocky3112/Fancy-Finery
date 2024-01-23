import { useParams } from "react-router-dom";

const PaymentSuccess = () => {
  const { tranId } = useParams();
  return (
    <div className="mt-28">
      <div className="mb-1">
        <p className="text-center text-5xl font-bold text-green-700">✔</p>
      </div>
      <h1 className="text-green-600 text-center text-lg mb-2">
        Payment Successful
      </h1>
      <p className="text-center font-semibold">Transaction Id: {tranId}</p>
    </div>
  );
};

export default PaymentSuccess;
