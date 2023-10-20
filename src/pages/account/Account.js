import { Link, Outlet } from "react-router-dom";
import './Account.css'
export default function Account() {
  return (
    <>
        <ul>
        <li>
            <Link className="active" to="">
              List Account
            </Link>
          </li>
          <li>
            <Link to="create">Create Account</Link>
          </li>
          <li>
            <Link to="search">Search Account</Link>
          </li>
        </ul>
        <div className="container">
        <div className="account-content">
         <Outlet/>
        </div>
        </div>
    </>
  );
}
