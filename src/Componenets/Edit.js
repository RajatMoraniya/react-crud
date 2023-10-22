import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit() {
  const para = useParams();
  const [name, setName] = useState(para.name);
  const [email, setemail] = useState(para.email);
  const [age, setage] = useState(+para.age);
  const navigate = useNavigate();

  async function handleUpdate(e) {
    e.preventDefault();
    try {
      await fetch(`http://localhost:8080/users/${para.id}`, {
        method: "PATCH",
        body: JSON.stringify({ name, age, email }),
        headers: {
          "Content-Type": "Application/json",
        },
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  }

  function handleCancel(e) {
    e.preventDefault();
    navigate("/");
  }

  return (
    <div className="d-flex flex-column justify-content-center align-items-center">
      <div className="fw-bold">Update</div>
      <form className="form w-50 justify-content-center align-items-center d-flex flex-column gap-2">
        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </label>
        <label>
          Email
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          ></input>
        </label>
        <label>
          Age
          <input
            type="number"
            value={age}
            onChange={(e) => setage(+e.target.value)}
          ></input>
        </label>

        <button
          type="submit"
          className="btn btn-success"
          onClick={handleUpdate}
        >
          Submit
        </button>
        <button type="button" className="btn btn-dark" onClick={handleCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
}

export default Edit;
