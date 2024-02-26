import AuthFormWrapper from "../components/AuthFormWrapper/AuthFormWrapper";
import AuthHeader from "../components/AuthHeader/AuthHeader";
import LoginForm from "../components/LoginForm/LoginForm";
import QuotesIcon from "../images/QuotesIcon";
const LoginPage = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <AuthHeader />
      <div className="flex flex-col desktop:flex-row">
        <AuthFormWrapper>
          <LoginForm />
        </AuthFormWrapper>
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
