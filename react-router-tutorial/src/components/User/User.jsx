import { useParams } from "react-router-dom";

const User = () => {
  const { uid } = useParams();
  return <div className="bg-gray-600 text-white pd-4">User: {uid}</div>;
};

export default User;
