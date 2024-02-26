import { Link } from "react-router-dom";
import GoogleButton from "../GoogleButton/GoogleButton";
import InputForm from "../InputForm/InputForm";

const LoginForm = () => {
  return (
    <div className="tablet:py-[64px] tablet:px-[185px]  desktop:px-20 z-10 flex justify-center items-center">
      <form className="flex flex-col tablet:bg-[white] text-[white] tablet:text-[#898F9F] py-[32px] tablet:p-10 justify-center items-center  ">
        <GoogleButton />
        <InputForm
          label={"Електронна адреса"}
          type={"text"}
          placeholder={"your@email.com"}
          name={"email"}
        />
        <InputForm
          label={"Пароль"}
          type={"text"}
          placeholder={"Пароль"}
          name={"password"}
        />
        <button
          className="flex items-center border border-[transparent] hover:bg-[white] hover:text-[#FF6B08] hover:border-[#FF6B08] transition duration-500 py-[20px] px-[110px] tablet:py-5 tablet:px-32 h-[60px] mb-5 bg-[#FF6B08] text-[white] font-[Montserrat]"
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
