import AuthFormWrapper from '../components/AuthFormWrapper/AuthFormWrapper'
import AuthHeader from '../components/AuthHeader/AuthHeader'
import LoginForm from '../components/LoginForm/LoginForm'
import QuotesIcon from '../images/QuotesIcon'
const LoginPage = () => {
  return (
    <div className="mx-auto max-w-screen-xl">
      <AuthHeader />
      <div className="flex flex-col desktop:flex-row">
        <AuthFormWrapper>
          <LoginForm />
        </AuthFormWrapper>
        <div className="mb-[16px] flex w-full flex-col items-center justify-center tablet:mb-[71px] desktop:mb-[0px]">
          <div className="flex max-w-[229px] flex-col items-center justify-center tablet:max-w-[397px]">
            <QuotesIcon />
            <blockquote className="mb-[20px] mt-[20px] text-center text-[13px] font-medium tablet:text-[24px]">
              Книги — это корабли мысли, странствующие по волнам времени и
              бережно несущие свой драгоценный груз от поколения к поколению.{' '}
            </blockquote>
            <div className="mb-[12px] h-[1px] w-[150px] border-b-2 border-[#242A37] opacity-50"></div>
            <p className="text-[14px] font-medium text-[#898F9F] tablet:text-[20px]">
              Бэкон Ф.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
