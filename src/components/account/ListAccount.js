import { useEffect, useState } from "react";
import { ACCOUNT_LIST } from "../../data/account_data";
import { Link } from "react-router-dom";

export default function ListAccount() {
  const [accountData, setAccountData] = useState(ACCOUNT_LIST);
  
  const deleteRecord = (selectedRecordAccountNumber) => {
   const newArray = accountData.filter(record=> record.accountNumber !==selectedRecordAccountNumber);
    setAccountData(newArray)
  };
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">Account Number</th>
          <th scope="col">Account Name</th>
          <th scope="col">Balance</th>
          <th scope="col">Date Created</th>
        </tr>
      </thead>
      <tbody>
        {accountData.map((rs) => (
          <tr>
            <td>{rs.accountNumber}</td>
            <td>{rs.accountName}</td>
            <td>{rs.balance}</td>
            <td>{rs.dateCreated}</td>
            <td>
              <Link className="btn btn-secondary" to={'update/'+rs.accountNumber}>Edit</Link>
            </td>
            <td>
              <button className="btn btn-danger" onClick={()=>deleteRecord(rs.accountNumber)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
