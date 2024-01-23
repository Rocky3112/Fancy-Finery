import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  const backHome = () =>{
    navigate("/")
  }

  return (
    <div className="text-center mt-16">
      <h1 className="text-red-600 font-bold text-4xl mb-2">404</h1>
      <h3 className="text-xl font-bold text-purple-700 mb-3">Not Found</h3>
      <button onClick={backHome} className="bg-green-500 px-3 py-2 rounded-md font-semibold text-lg ">
        Go Back Home
      </button>
    </div>
  );
};

export default NotFound;
