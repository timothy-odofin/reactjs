import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Account from "./pages/account/Account";
import Customer from "./pages/customer/Customer";
import Transaction from "./pages/Transactions";
import Settings from "./pages/Settings";
import "./Layout.css";
import CreateAccount from "./components/account/CreateAccount";
import UpdateAccount from "./components/account/UpdateAccount";
import SearchAccount from "./components/account/SearchAccount";
import ListAccount from "./components/account/ListAccount";
export default function Layout() {
  return (
    <BrowserRouter>
      <div className="sidebar">
        <Link to="customer" className="active">
          Customer
        </Link>
        <Link to="account">Account</Link>
        <Link to="transaction">Transaction</Link>
        <Link to="settings">Settings</Link>
      </div>
      <div className="content">
        <Routes>
          <Route path="customer" element={<Customer />} />
          <Route path="/" element={<Customer />} />

          <Route path="account" element={<Account />}>
          <Route path="" element={<ListAccount />} />
            <Route path="create" element={<CreateAccount />} />
            <Route path="update/:userAccount" element={<UpdateAccount />} /> 
            <Route path="search" element={<SearchAccount />} />
          </Route>
          <Route path="transaction" element={<Transaction />} >

            </Route>
          <Route path="settings" element={<Settings />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}
