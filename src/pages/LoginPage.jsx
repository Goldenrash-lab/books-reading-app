import React from "react";
import LoginBG from "../images/loginBG.jpg";
import LoginBGoverlay from "../images/loginBGoverlay.jpg";
import LoginForm from "../components/LoginForm/LoginForm";
const LoginPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <header className="shadow-md">
        <span
          className="p-4 inline-block  font-extrabold text-blue-950 text-xl font-[Abril-Fatface]"
          href="#"
        >
          BR
        </span>
      </header>
      <div className="flex">
        <div className="flex items-center bg-[url('./src/images/loginBG.jpg')] relative">
          <div className="z-0 bg-overlayColor opacity-80 absolute left-0 top-0 w-full h-full "></div>
          <LoginForm />
        </div>
        <div>RIGHT PART</div>
      </div>
    </div>
  );
};

export default LoginPage;
