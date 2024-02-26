import { useLocation } from "react-router-dom";

const AuthFormWrapper = ({ children }) => {
  const location = useLocation();
  let isSignUp = "h-full";
  if (location.pathname === "/signup") {
    isSignUp = "min-h-[calc(100vh-60px)]";
  }
  return (
    <div
      className={`flex justify-center mb-[20px] tablet:mb-[64px] desktop:mb-0 bg-no-repeat bg-center bg-cover items-center bg-[url('/img/loginBG.jpg')] relative desktop:h-[calc(100vh-60px)] ${isSignUp}`}
    >
      <div className="z-0 bg-overlayColor opacity-80 absolute left-0 top-0 w-full h-full "></div>
      {children}
    </div>
  );
};

export default AuthFormWrapper;
