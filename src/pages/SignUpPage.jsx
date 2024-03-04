import AuthHeader from '../components/AuthHeader/AuthHeader'
import AuthFormWrapper from '../components/AuthFormWrapper/AuthFormWrapper'
import GoogleButton from '../components/GoogleButton/GoogleButton'
import { Link, useNavigate } from 'react-router-dom'
import InputForm from '../components/InputForm/InputForm'
import ArrowMarker from '../images/ArrowMarker'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { registerThunk } from '../store/auth/thunk'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

const schema = yup
  .object({
    name: yup.string().required('Обязательно'),
    email: yup
      .string()
      .email('Введите верный email')
      .matches(/^(?!.*@[^,]*,)/),
    password: yup
      .string()
      .min(8, 'Не менее 8 символов')
      .required('Обязательно'),
    conf_password: yup
      .string()
      .min(8, 'Не менее 8 символов')
      .oneOf([yup.ref('password')], 'Пароли не совпадают')
      .required('Обязательно'),
  })
  .required('Обязательно')

const SignUpPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function onSubmit({ conf_password, ...data }) {
    if (data) {
      dispatch(registerThunk(data))
        .unwrap()
        .then(() => {
          navigate('/login')
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className="mx-auto max-w-screen-xl">
      <AuthHeader />
      <div className="flex flex-col desktop:flex-row ">
        <AuthFormWrapper>
          <div className="z-10 flex  items-center justify-center tablet:px-[185px] tablet:py-[64px] desktop:px-20">
            <form
              className="flex flex-col items-center justify-center py-[32px] text-[white] tablet:bg-[white] tablet:p-10 tablet:text-[#898F9F]"
              onSubmit={handleSubmit(onSubmit)}
            >
              <GoogleButton />

              <InputForm
                label={"Ім'я"}
                type={'text'}
                placeholder={'...'}
                name={'name'}
                register={register}
                errors={errors.name?.message}
              />
              <InputForm
                label={'Електронна адреса'}
                type={'text'}
                placeholder={'your@email.com'}
                name={'email'}
                register={register}
                errors={errors.email?.message}
              />
              <InputForm
                label={'Пароль'}
                type={'text'}
                placeholder={'Пароль'}
                name={'password'}
                register={register}
                errors={errors.password?.message}
              />
              <InputForm
                label={'Підтвердити пароль'}
                type={'text'}
                placeholder={'Пароль'}
                name={'conf_password'}
                register={register}
                errors={errors.conf_password?.message}
              />
              <button
                className="mb-5 flex h-[60px] w-[280px] items-center border border-[transparent] bg-[#FF6B08] px-16 py-5 font-[Montserrat] text-[white] transition  duration-500 hover:border-[#FF6B08] hover:bg-[white] hover:text-[#FF6B08] tablet:w-80"
                type="submit"
              >
                Зареєструватися
              </button>
              <div className="font-[Montserrat] text-[13px]">
                <span className="text-[#898F9F]">Вже з нами? </span>
                <Link to="/login" className="text-[#FF6B08] underline ">
                  Увійти
                </Link>
              </div>
            </form>
          </div>
        </AuthFormWrapper>

        <div className="mb-[16px] hidden w-full flex-col items-center justify-center tablet:mb-[71px] tablet:flex desktop:mb-[0px]">
          <h2 className=" mb-12 font-[Abril-Fatface] text-[34px] font-extrabold text-[#242A37]">
            Books Reading
          </h2>
          <ul className="flex flex-col gap-8">
            <li>
              <h3 className="mb-[14px] text-xl text-[#242A37]">Допоможе вам</h3>
              <p className="mb-3 flex items-center gap-2 text-[#898f9f]">
                <ArrowMarker />
                Швидше сформулювати свою ціль і розпочати читати
              </p>
              <p className="mb-3 flex items-center gap-2 text-[#898f9f] ">
                <ArrowMarker />
                Пропорційно розподілити навантаження на кожний день
              </p>
              <p className="mb-3 flex items-center gap-2 text-[#898f9f] ">
                <ArrowMarker />
                Відстежувати особистий успіх
              </p>
            </li>
            <li>
              <h3 className=" mb-[14px] text-xl text-[#242A37]">
                Також ви зможете{' '}
              </h3>
              <p className="mb-3 flex items-center gap-2 text-[#898f9f] ">
                <ArrowMarker />
                Формувати особисту думку незалежну від інших
              </p>
              <p className="mb-3 flex items-center gap-2 text-[#898f9f] ">
                <ArrowMarker />
                Підвищити свої професійні якості опираючись на нові знання
              </p>
              <p className="mb-3 flex items-center gap-2 text-[#898f9f] ">
                <ArrowMarker />
                Стати цікавим співрозмовником
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage
