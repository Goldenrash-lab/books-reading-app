import AuthHeader from "../components/AuthHeader/AuthHeader";
import AuthFormWrapper from "../components/AuthFormWrapper/AuthFormWrapper";
import GoogleButton from "../components/GoogleButton/GoogleButton";
import { Link } from "react-router-dom";
import InputForm from "../components/InputForm/InputForm";
import ArrowMarker from "../images/ArrowMarker";

const SignUpPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <AuthHeader />
      <div className="flex flex-col desktop:flex-row ">
        <AuthFormWrapper>
          <div className="tablet:py-[64px] tablet:px-[185px]  desktop:px-20 z-10 flex justify-center items-center">
            <form className="flex flex-col tablet:bg-[white] text-[white] tablet:text-[#898F9F] py-[32px] tablet:p-10 justify-center items-center  ">
              <GoogleButton />
              <InputForm
                label={"Ім'я"}
                type={"text"}
                placeholder={"..."}
                name={"name"}
              />
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
              <InputForm
                label={"Підтвердити пароль"}
                type={"text"}
                placeholder={"Пароль"}
                name={"conf_password"}
              />
              <button
                className="flex items-center w-[280px] tablet:w-80 border border-[transparent] hover:bg-[white] hover:text-[#FF6B08] hover:border-[#FF6B08] transition duration-500 py-5 px-16  h-[60px] mb-5 bg-[#FF6B08] text-[white] font-[Montserrat]"
                type="submit"
              >
                Зареєструватися
              </button>
              <div className="text-[13px] font-[Montserrat]">
                <span className="text-[#898F9F]">Вже з нами? </span>
                <Link to="/login" className="text-[#FF6B08] underline ">
                  Увійти
                </Link>
              </div>
            </form>
          </div>
        </AuthFormWrapper>

        <div className="hidden tablet:flex flex-col justify-center items-center w-full mb-[16px] tablet:mb-[71px] desktop:mb-[0px]">
          <h2 className=" text-[#242A37] font-[Abril-Fatface] text-[34px] font-extrabold mb-12">
            Books Reading
          </h2>
          <ul className="flex flex-col gap-8">
            <li>
              <h3 className="text-xl text-[#242A37] mb-[14px]">Допоможе вам</h3>
              <p className="flex items-center gap-2 mb-3 text-[#898f9f]">
                <ArrowMarker />
                Швидше сформулювати свою ціль і розпочати читати
              </p>
              <p className="flex items-center gap-2 mb-3 text-[#898f9f] ">
                <ArrowMarker />
                Пропорційно розподілити навантаження на кожний день
              </p>
              <p className="flex items-center gap-2 mb-3 text-[#898f9f] ">
                <ArrowMarker />
                Відстежувати особистий успіх
              </p>
            </li>
            <li>
              <h3 className=" text-xl text-[#242A37] mb-[14px]">
                Також ви зможете{" "}
              </h3>
              <p className="flex items-center gap-2 mb-3 text-[#898f9f] ">
                <ArrowMarker />
                Формувати особисту думку незалежну від інших
              </p>
              <p className="flex items-center gap-2 mb-3 text-[#898f9f] ">
                <ArrowMarker />
                Підвищити свої професійні якості опираючись на нові знання
              </p>
              <p className="flex items-center gap-2 mb-3 text-[#898f9f] ">
                <ArrowMarker />
                Стати цікавим співрозмовником
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
