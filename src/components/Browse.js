import { useSelector } from "react-redux";
import Header from "./Header";

const Browse = () => {
  const data = useSelector((store) => store.user);
  return (
    <div>
      <Header showContent={false} />
      <h1>Welcome</h1>
      <h1>{data?.displayName}</h1>
      <img src={data?.photoURL} alt="" className="w-1/5" />
    </div>
  );
};

export default Browse;
