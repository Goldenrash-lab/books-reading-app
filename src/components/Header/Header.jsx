import { useDispatch, useSelector } from 'react-redux'
import BookIcon from '../../images/BookIcon'
import HomeIcon from '../../images/HomeIcon'
import iconUser from '/img/icon-user.jpg'
import { logoutThunk, setTokenToLS } from '../../store/auth/thunk'
import { api } from '../../api/api'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const dispatch = useDispatch()
  const newAccessToken = useSelector(
    (state) => state.authReducer?.user?.newAccessToken
  )
  const accessToken = useSelector(
    (state) => state.authReducer?.user?.accessToken
  )
  const navigate = useNavigate()

  function handleClick() {
    if (accessToken) {
      setTokenToLS(accessToken)
    } else {
      setTokenToLS(newAccessToken)
    }
    dispatch(logoutThunk())
      .unwrap()
      .then(() => {
        console.log('====================================')
        console.log('EXIT DONE')
        console.log('====================================')
        return navigate('/login')
      })
      .catch((err) => console.log(err))
  }

  return (
    <header className="bg-[white] shadow-md">
      <div className="flex items-center justify-between px-4">
        <a
          className="py-4 font-[Arial-Fatface] text-xl font-black text-[#242A37]"
          href="/"
        >
          BR
        </a>
        <div className="flex items-center gap-3">
          <img src={iconUser} alt="iconUser" />
          <p>Martha Stewart</p>
        </div>
        <div className="flex items-center gap-3">
          <BookIcon />
          <HomeIcon />
          <button
            onClick={handleClick}
            className="border-l border-l-[#E0E5EB] py-[6.5px] pl-[14px] text-sm underline underline-offset-2"
            type="button"
          >
            Вихід
          </button>
        </div>
      </div>
    </header>
  )
}

export default Header
