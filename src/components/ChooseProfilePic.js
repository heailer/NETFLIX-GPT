import { useNavigate } from "react-router-dom";

const ChooseProfilePic = () => {
  const Navigate = useNavigate();
  const buttonFunc = () => {
    Navigate("/browse");
  };
  return (
    <div>
      <h1>Hello</h1>
      <button onClick={buttonFunc}>Click me</button>
    </div>
  );
};

export default ChooseProfilePic;
