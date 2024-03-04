import { Link, useNavigate } from 'react-router-dom'
import GoogleButton from '../GoogleButton/GoogleButton'
import InputForm from '../InputForm/InputForm'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useDispatch } from 'react-redux'
import { loginThunk } from '../../store/auth/thunk'

const schema = yup
  .object({
    email: yup
      .string()
      .email('Введите верный email')
      .matches(/^(?!.*@[^,]*,)/)
      .required('Обязательно'),
    password: yup
      .string()
      .min(8, 'Не менее 8 символов')
      .required('Обязательно'),
  })
  .required('Обязательно')

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })
  const dispatch = useDispatch()
  const navigate = useNavigate()

  function onSubmit(data) {
    if (data) {
      dispatch(loginThunk(data))
        .unwrap()
        .then(() => {
          console.log('====================================')
          console.log('LOGGED IN')
          console.log('====================================')

          navigate('/')
        })
        .catch((err) => console.log(err))
    }
  }

  return (
    <div className="z-10 flex  items-center justify-center tablet:px-[185px] tablet:py-[64px] desktop:px-20">
      <form
        className="flex flex-col items-center justify-center py-[32px] text-[white] tablet:bg-[white] tablet:p-10 tablet:text-[#898F9F]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <GoogleButton />
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
        <button
          className="mb-5 flex h-[60px] items-center border border-[transparent] bg-[#FF6B08] px-[110px] py-[20px] font-[Montserrat] text-[white] transition duration-500 hover:border-[#FF6B08] hover:bg-[white] hover:text-[#FF6B08] tablet:px-32 tablet:py-5"
          type="submit"
        >
          Увійти
        </button>
        <Link
          to="/signup"
          className="font-[Montserrat] text-[13px] text-[#FF6B08] underline"
        >
          Реєстрація
        </Link>
      </form>
    </div>
  )
}

export default LoginForm
