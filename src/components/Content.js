import { useState } from "react";

const Content = () => {
  const [isAUser, setIsAUser] = useState(true);
  const signUpForm = () => {
    setIsAUser(!isAUser);
  };
  return (
    <div className="relative">
      <div>
        <img
          className=""
          src="https://assets.nflxext.com/ffe/siteui/vlv3/81d64f3c-9627-4741-8f74-422bf35f9f1d/web/IN-en-20241104-TRIFECTA-perspective_55263ea2-af7f-40ed-9cf0-7029a9b9baf4_large.jpg"
          alt="netflixImage"
        />
      </div>
      <div className="absolute top-[10%] left-[35%] bg-[rgba(0,0,0,0.8)] h-[60%] w-3/12 text-white rounded-2xl">
        <h1 className="text-bold ml-12 my-7 block text-4xl">
          {isAUser ? "Sign In" : "Sign up"}
        </h1>
        <form>
          <input
            type="email"
            placeholder="email or phone number"
            className="p-2  ml-12 m-4 rounded-md h-12 bg-[rgba(0,0,0,0.7)] border border-white w-8/12"
          />
          <br></br>
          <input
            type="password"
            placeholder="password"
            className="p-2 ml-12 m-2rounded-md h-12 w-8/12 bg-[rgba(0,0,0,0.6)] border border-white"
          />
          <br></br>
          {!isAUser && (
            <input
              type="password"
              placeholder="confirm password"
              className="p-2 ml-12 m-2rounded-md h-12 w-8/12 m-4 bg-[rgba(0,0,0,0.6)] border border-white"
            />
          )}
          <button className="text-white bg-red-800 ml-12 w-8/12 h-10 m-4">
            {isAUser ? "Sign in" : "Sign up"}
          </button>
          <h2 className="ml-12 text-gray-400">
            {isAUser ? "new to netflix?" : "Already a user?"}
            <button
              className="cursor-pointer ml-2 text-white hover:underline"
              onClick={signUpForm}
              type="button"
            >
              {isAUser ? "Sign Up now" : "Login now"}
            </button>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Content;
