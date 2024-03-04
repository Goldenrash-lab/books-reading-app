import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import LoginPage from './pages/LoginPage'
import SignUpPage from './pages/SignUpPage'
import LibraryPage from './pages/LibraryPage'
import ProtectRoute from './routes/ProtectRoute'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { refreshThunk } from './store/auth/thunk'
import { api } from './api/api'
import PublicRoute from './routes/PublicRoute'

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    api.defaults.headers.authorization = `Bearer ${localStorage.token}`

    dispatch(refreshThunk({ sid: localStorage.getItem('sid') }))
  }, [dispatch])
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route
            path="/"
            element={
              <ProtectRoute>
                <LibraryPage />
              </ProtectRoute>
            }
          />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRoute>
              <LoginPage />
            </PublicRoute>
          }
        />
        <Route
          path="/signup"
          element={
            <PublicRoute>
              <SignUpPage />
            </PublicRoute>
          }
        />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </>
  )
}

export default App
