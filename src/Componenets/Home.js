import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();
  async function fetchData() {
    const res = await fetch("http://localhost:8080/users");
    const data = await res.json();
    setData(data);
  }

  async function handleDelete(e, id) {
    e.preventDefault();
    try {
      await fetch(`http://localhost:8080/users/${id}`, {
        method: "DELETE",
      });
      setData(data.filter((dt) => dt.id !== id));
    } catch (err) {
      console.log(err);
    }
  }

  function handleEdit(e, { id, name, email, age }) {
    e.preventDefault();
    navigate(`/edit/${id}/${name}/${age}/${email}`);
  }
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <div>
      <div className="d-flex justify-content-between m-5">
        <div>Home</div>
        <Link to={"create"}>
          <button className="btn btn-dark">Create</button>
        </Link>
      </div>
      <table className="table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 &&
            data.map((d) => (
              <tr>
                <td>{d.id}</td>
                <td>{d.name}</td>
                <td>{d.email}</td>
                <td>{d.age}</td>
                <td>
                  <button
                    className="btn btn-primary"
                    onClick={(e) => handleEdit(e, d)}
                  >
                    Edit
                  </button>
                </td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={(e) => handleDelete(e, d.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

export default Home;
