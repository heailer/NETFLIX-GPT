import { signOut } from "firebase/auth";
import { LOGO_URL } from "../utils/constants";
import { auth } from "../utils/fireBase";
import { useNavigate } from "react-router-dom";
const Header = ({ showContent, isAUser, setIsAUser }) => {
  const navigate = useNavigate();
  const handleSignUp = () => {
    setIsAUser(!isAUser);
  };
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  return (
    <div className="mb-5">
      <div className="flex flex-wrap">
        <img className="w-44 mt-3 ml-3" src={LOGO_URL} alt="logo" />

        {showContent && (
          <div className="ml-auto mt-4">
            <button className="border border-white border-solid m-2 px-6 py-1 rounded-3xl text-white bg-transparent font-serif font-bold">
              English
              {/* <img
            src="C:\Users\Amog\OneDrive\Desktop\netflix-gpt\src\utils\pictures\dropDownArrow.jpg"
            alt="dropDownArrow"
          /> */}
            </button>
            <button
              className="border border-white border-solid m-2 px-2 py-1px rounded-2xl text-black bg-white font-serif font-bold"
              onClick={handleSignUp}
            >
              {isAUser ? "Sign Up" : "Sign In"}
            </button>
          </div>
        )}
        {!showContent && (
          <div className="ml-auto flex flex-wrap">
            <img
              src="https://occ-0-4857-2164.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e"
              alt="userIcon"
              className="h-12  m-2"
            ></img>
            <button
              className="m-2 font-sans text-red-800"
              onClick={handleSignOut}
            >
              Sign out
            </button>
          </div>
        )}
      </div>
      {showContent && (
        <div className="">
          <div className="m-auto border border-solid border-black rounded-3xl p-1 bg-[rgba(0,0,0,0.8)] text-white w-[26%] ">
            <button className="mx-4 my-2">Popular Now</button>
            <button className="mx-4 my-2">Plans</button>
            <button className="mx-4 my-2">Reasons to join</button>
            <button className="mx-2 my-2">Faq</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
