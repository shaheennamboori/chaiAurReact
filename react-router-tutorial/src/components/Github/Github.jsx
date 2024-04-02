import { useLoaderData } from "react-router-dom";

const Github = () => {
  // const [data, setData] = useState({});
  // useEffect(() => {
  //   fetch("https://api.github.com/users/shaheennamboori")
  //     .then((respone) => respone.json())
  //     .then((data) => {
  //       setData(data);
  //     });
  // }, []);

  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      Github followers:{data.followers}
      <img src={data.avatar_url} alt="Git DP" width={300} />
    </div>
  );
};

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/shaheennamboori");
  return response.json();
};
