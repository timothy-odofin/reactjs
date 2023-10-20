import { useState } from 'react'
import './Customer.css'
export default function Customer(){
    const [data, setData] = useState([
        {
          "name": "John Doe",
          "accountNumber": "123456789",
          "balance": 5000,
          "email": "johndoe@email.com"
        },
        {
          "name": "Jane Smith",
          "accountNumber": "987654321",
          "balance": 8000,
          "email": "janesmith@email.com"
        },
      ]
      )
    return (
        <>
       <h1>A Fancy Table</h1>

<table id="customers">
  <thead>
  <tr>
    <th>Name</th>
    <th>Account Number</th>
    <th>Balance</th>
    <th>Email</th>
  </tr>
  </thead>
  <tbody>
  {data.map((result)=><tr>
    <td>{result.name}</td>
    <td>{result.accountNumber}</td>
    <td>{result.balance}</td>
    <td>{result.email}</td>
  </tr>)}
  </tbody>
</table>
        </>
    )
}