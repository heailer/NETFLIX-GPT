import { useRef, useState } from "react";
import { validateData } from "../utils/validate";
import { auth } from "../utils/fireBase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/storeSlices/userSlice";
import { useDispatch } from "react-redux";

const Content = ({ isAUser, setIsAUser }) => {
  const Navigate = useNavigate();
  const dispatch = useDispatch();

  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const handleButtonClick = () => {
    //validation of the Credentials
    const answer = validateData(email.current.value, password.current.value);
    setErrorMessage(answer);
    if (answer) return;

    if (!isAUser) {
      //Logic for signUp
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value,
        name.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL:
              "https://gratisography.com/wp-content/uploads/2024/10/gratisography-happy-cone-800x525.jpg",
          })
            .then(() => {
              console.log(user);
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              Navigate("/Browse");
            })
            .catch((error) => {
              setErrorMessage(errorMessage);
            });
          Navigate("/Browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //Logic for signIn
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          // Navigate("/ChooseProfilePic");
          Navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
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
        <form onSubmit={(e) => e.preventDefault()}>
          {!isAUser && (
            <input
              ref={name}
              placeholder="Full Name"
              className="p-2  ml-12 m-4 mb-1 rounded-md h-12 bg-[rgba(0,0,0,0.7)] border border-white w-8/12"
            />
          )}
          <input
            ref={email}
            type="email"
            placeholder="email or phone number"
            className="p-2  ml-12 m-4 rounded-md h-12 bg-[rgba(0,0,0,0.7)] border border-white w-8/12"
          />
          <br></br>
          <input
            ref={password}
            type="password"
            placeholder="password"
            className="p-2 ml-12 m-2 rounded-md h-12 w-8/12 bg-[rgba(0,0,0,0.6)] border border-white"
          />
          <br></br>
          {!isAUser && (
            <input
              type="password"
              placeholder="confirm password"
              className="p-2  ml-12 m-4 rounded-md h-12 bg-[rgba(0,0,0,0.7)] border border-white w-8/12"
            />
          )}
          <p className="font-bold text-red-700 py-2 ml-12 text-lg">
            {errorMessage}
          </p>
          <button
            className="text-white bg-red-800 ml-12 w-8/12 h-10 m-4"
            onClick={handleButtonClick}
          >
            {isAUser ? "Sign in" : "Sign up"}
          </button>
          <h2 className="ml-12 text-gray-400">
            {isAUser ? "new to netflix?" : "Already a user?"}
            <button
              className="cursor-pointer ml-2 text-white hover:underline"
              onClick={signUpForm}
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
