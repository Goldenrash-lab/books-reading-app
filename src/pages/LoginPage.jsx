import LoginForm from "../components/LoginForm/LoginForm";
import QuotesIcon from "../images/QuotesIcon";
const LoginPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <header className="shadow-md">
        <div className="px-4 tablet:px-8 desktop:px-4 text-center tablet:text-left">
          <span
            className="py-4 inline-block  font-extrabold text-blue-950 text-xl font-[Abril-Fatface] "
            href="#"
          >
            BR
          </span>
        </div>
      </header>
      <div className="flex flex-col desktop:flex-row">
        <div className="flex justify-center mb-[20px] tablet:mb-[64px] desktop:mb-0 bg-no-repeat bg-center bg-cover items-center bg-[url('./src/images/loginBG.jpg')] relative">
          <div className="z-0 bg-overlayColor opacity-80 absolute left-0 top-0 w-full h-full "></div>
          <LoginForm />
        </div>
        <div className="flex flex-col justify-center items-center w-full mb-[16px] tablet:mb-[71px] desktop:mb-[0px]">
          <div className="flex flex-col justify-center items-center max-w-[229px] tablet:max-w-[397px]">
            <QuotesIcon />
            <blockquote className="font-medium text-[13px] tablet:text-[24px] mt-[20px] mb-[20px] text-center">
              Книги — это корабли мысли, странствующие по волнам времени и
              бережно несущие свой драгоценный груз от поколения к поколению.{" "}
            </blockquote>
            <div className="border-b-2 border-[#242A37] w-[150px] h-[1px] opacity-50 mb-[12px]"></div>
            <p className="text-[14px] tablet:text-[20px] text-[#898F9F] font-medium">
              Бэкон Ф.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
