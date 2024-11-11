import { LOGO_URL } from "../utils/constants";
const Header = () => {
  return (
    <div className="mb-5">
      <div className="flex flex-wrap">
        <img className="w-44 mt-3 ml-3" src={LOGO_URL} alt="logo" />

        <div className="ml-auto mt-4">
          <button className="border border-white border-solid m-2 px-6 py-1 rounded-3xl text-white bg-transparent font-serif font-bold">
            English
            {/* <img
            src="C:\Users\Amog\OneDrive\Desktop\netflix-gpt\src\utils\pictures\dropDownArrow.jpg"
            alt="dropDownArrow"
          /> */}
          </button>
          <button className="border border-white border-solid m-2 px-2 py-1px rounded-2xl text-black bg-white font-serif font-bold">
            Sign Up
          </button>
        </div>
      </div>
      <div className="">
        <div className="m-auto border border-solid border-black rounded-3xl p-1 bg-[rgba(0,0,0,0.8)] text-white w-[26%] ">
          <button className="mx-4 my-2">Popular Now</button>
          <button className="mx-4 my-2">Plans</button>
          <button className="mx-4 my-2">Reasons to join</button>
          <button className="mx-2 my-2">Faq</button>
        </div>
      </div>
    </div>
  );
};

export default Header;