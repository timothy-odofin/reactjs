import { useEffect, useState } from "react";
import { ACCOUNT_LIST } from "../../data/account_data";
import { useParams } from "react-router-dom";

export default function UpdateAccount() {
  const [accountData, setAccountData] = useState(ACCOUNT_LIST);
  const { userAccount } = useParams();
  const [formData, setFormData] = useState({
    accountName: "",
    accountNumber: "",
    balance: 0,
    dateCreated: null,
  });

  useEffect(() => {
    findAccountAndUpdateForm();

  }, []);

   const findAccountAndUpdateForm = () => {
    const accountDetails = accountData.find(
      (rs) => rs.accountNumber == userAccount
    );
    setFormData(accountDetails);
  };
  const handleInput = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const saveAccountDetails = (event) => {
    event.preventDefault();
    console.log(formData);
  };
  return (
    <>
      <h3>Account Update Form</h3>
      <form className="was-validated" onSubmit={saveAccountDetails}>
        <div className="row">
          <div className="mb-3 mt-3 col-6">
            <label htmlFor="accountName" className="form-label">
              Account Name
            </label>
            <input
              onChange={handleInput}
              type="text"
              className="form-control"
              id="accountName"
              name="accountName"
              required
              value={formData.accountName}
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>

          <div className="mb-3 mt-3 col-6">
            <label htmlFor="accountNumber" className="form-label">
              Account Number:
            </label>
            <input
              onChange={handleInput}
              type="number"
              className="form-control"
              id="accountNumber"
              name="accountNumber"
              required
              value={formData.accountNumber}
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>

          <div className="mb-3 mt-3 col-6">
            <label htmlFor="balance" className="form-label">
              Balance
            </label>
            <input
              onChange={handleInput}
              value={formData.balance}
              type="number"
              className="form-control"
              id="balance"
              name="balance"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>

          <div className="mb-3 mt-3 col-6">
            <label htmlFor="dateCreated" className="form-label">
              Date Created
            </label>
            <input
              onChange={handleInput}
              value={formData.dateCreated}
              type="date"
              className="form-control"
              id="dateCreated"
              name="dateCreated"
              required
            />
            <div className="valid-feedback">Valid.</div>
            <div className="invalid-feedback">Please fill out this field.</div>
          </div>

          <button type="submit" className="btn btn-primary">
            Update Account
          </button>
        </div>
      </form>
    </>
  );
}
