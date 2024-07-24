import React, { useState } from "react";
import "./../styles/App.css";
import Axios from "axios";
import "regenerator-runtime/runtime";

const App = () => {
  const [output, setOutput] = useState([]); // Initialize as an empty array
  const api = "https://reqres.in/api/users";

  const dataFetch = async () => {
    try {
      const response = await Axios(api);
      setOutput(response.data.data); // Use response.data.data to access user data
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="main">
      <div className="head">
        <h1>Blue Whales</h1>
        <button className="btn" onClick={dataFetch}>
          Get User List
        </button>
      </div>

      <table>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avatar</th>
          </tr>
        </thead>
        <tbody>
          {output.length > 0 ? (
            output.map((item, index) => (
              <tr key={index}>
                <td>{item.first_name}</td>
                <td>{item.last_name}</td>
                <td>{item.email}</td>
                <td><img src={item.avatar} alt={`${item.first_name} ${item.last_name}`} width="50" /></td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4">No data found to display.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default App;
