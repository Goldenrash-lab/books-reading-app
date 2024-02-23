import { Link } from "react-router-dom";
import GoogleIcon from "../../images/GoogleIcon";

const LoginForm = () => {
  return (
    <div className="py-44 px-20 z-10 ">
      <form className="flex flex-col bg-[white] p-10 justify-center items-center">
        <button
          className="flex relative justify-center mb-7 items-center text-base shadow-md  w-[150px] h-10 bg-[#F5F7FA] font-[Roboto] font-bold text-[#707375]"
          type="button"
        >
          <GoogleIcon width="18" height="18" />
          Google
        </button>
        <label className="flex flex-col text-sm text-[#898F9F] mb-5">
          <div className="mb-2">
            Електронна адреса <span className="text-[red]">*</span>
          </div>
          <input
            className="w-80 p-3 h-[42px] bg-[#F5F7FA] shadow-inner"
            name="email"
            type="text"
            placeholder="your@email.com"
          />
        </label>
        <label className="flex flex-col text-sm text-[#898F9F] mb-8 ">
          <div className="mb-2">
            Пароль <span className="text-[red]">*</span>
          </div>
          <input
            className="w-80 p-3 h-[42px] bg-[#F5F7FA] shadow-inner"
            name="password"
            type="text"
            placeholder="Пароль"
          />
        </label>
        <button
          className=" py-5 px-32 h-[60px] mb-5 bg-[#FF6B08] text-[white] font-[Montserrat]"
          type="submit"
        >
          Увійти
        </button>
        <Link
          to="/signup"
          className="text-[#FF6B08] underline text-[13px] font-[Montserrat]"
        >
          Реєстрація
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
