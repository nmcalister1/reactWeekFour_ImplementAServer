import { Suspense, lazy } from "react"
import { Navigate, Outlet, createBrowserRouter } from "react-router-dom"
import { Home } from "./pages/Home"
import { About } from "./pages/About"
import { Navbar } from "./Navbar"
import { Audio } from "react-loader-spinner"
const Blog = lazy(() => import("./pages/Blog"))

export const router = createBrowserRouter([
  {
    path: "/",
    element: <NavLayout />,
    children: [
      { path: "*", element: <Navigate to="/" /> },
      { index: true, element: <Home /> },
      { path: "/blog", element: <BlogElement /> },
      { path: "/about", element: <About /> },
    ],
  },
])

function NavLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  )
}

function BlogElement() {
  return (
    <Suspense
      fallback={
        <Audio
          height="80"
          width="80"
          radius="9"
          color="green"
          ariaLabel="three-dots-loading"
        />
      }
    >
      <Blog />
    </Suspense>
  )
}
