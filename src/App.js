import React, { useEffect, useState } from "react";
import "./App.css";
import { EmployeeData } from "./EmployeeData";


function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(EmployeeData);
  }, []);

  const handleEdit = (id) => {
    alert(id);
  }

  const handleDelete = (id) => {
    alert(id);
  }


  return (
    <div className="App">
      <table className="table table-hover">
        <thead>
          <tr>
            <td>Sr.No</td>
            <td>Id</td>
            <td>First Name</td>
            <td>Last Name</td>
            <td>Age</td>
            <td>Action</td>
          </tr>
        </thead>
        <tbody>
          {
            data.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.age}</td>
                  <td>
                    <button className="btn btn-primary" onClick={() => handleEdit(item.id)}>Edit</button>
                    &nbsp; | &nbsp;
                    <button className="btn btn-danger" onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
