import { useParams } from "react-router-dom";

const User = () => {
  const { userId } = useParams();

  return (
    <div className="bg-gray-700 text-white h-[370px] flex items-center justify-center font-bold text-7xl">
      <h1>User: {userId}</h1>
    </div>
  );
};

export default User;
