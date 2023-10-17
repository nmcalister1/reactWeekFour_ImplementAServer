import { Link } from "react-router-dom"

export function Navbar() {
  return (
    <>
      <h1>Navigation</h1>
      <nav>
        <ul>
          <li>
            <Link to={"/"}><button>Home</button></Link>
          </li>
          <li>
            <Link to={"/about"}><button>About</button></Link>
          </li>
          <li>
            <Link to={"/blog"}><button>Blog</button></Link>
          </li>
        </ul>
      </nav>
    </>
  )
}