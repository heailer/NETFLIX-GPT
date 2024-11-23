import { useState } from "react";
import Content from "./Content";
import Header from "./Header";

const Login = () => {
  //const [signIn, setSignIn] = useState(true);
  const [isAUser, setIsAUser] = useState(true);
  return (
    <div className="bg-gradient-to-b from-black to-[rgba(128,0,0,0.6)]">
      <Header showContent={true} isAUser={isAUser} setIsAUser={setIsAUser} />
      <Content isAUser={isAUser} setIsAUser={setIsAUser} />
    </div>
  );
};

export default Login;
