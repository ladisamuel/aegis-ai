import { createBrowserRouter } from 'react-router-dom'
import DefaultLayout from './layout/DefaultLayout'
// import AuthLayout from './layout/AuthLayout'
import HomePage from '../pages/HomePage'

// Lazy imports for future pages (code splitting)
// const LoginPage = () => import('@/pages/LoginPage').then(m => ({ default: m.default }))
// const RegisterPage = () => import('../pages/RegisterPage').then(m => ({ default: m.default }))

// import { lazy, Suspense } from 'react'
// import RegisterPage from '../pages/RegisterPage'
// import LoginPage from '../pages/LoginPage'

// const Login = lazy(LoginPage)
// const Register = lazy(RegisterPage)

const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-950">
    <div className="flex flex-col items-center gap-4">
      <div className="w-10 h-10 border-2 border-aegis-500/30 border-t-aegis-500 rounded-full animate-spin" />
      <span className="font-mono text-xs text-gray-500">Loading...</span>
    </div>
  </div>
)

export const router = createBrowserRouter([
  {
    element: <DefaultLayout />,
    children: [
      { path: '/', element: <HomePage /> },
    ],
  },
  // {
  //   element: <AuthLayout />,
  //   children: [
  //     {
  //       path: '/login',
  //       element: (
  //         <Suspense fallback={<PageLoader />}>
  //           <LoginPage />
  //         </Suspense>
  //       ),
  //     },
  //     {
  //       path: '/register',
  //       element: (
  //         <Suspense fallback={<PageLoader />}>
  //           <Register />
  //         </Suspense>
  //       ),
  //     },
  //   ],
  // },
])

export default router
