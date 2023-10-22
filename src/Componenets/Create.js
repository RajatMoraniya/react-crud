import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Create() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [age, setage] = useState(0);

  const navigate = useNavigate();
  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await fetch("http://localhost:8080/users", {
        method: "POST",
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
      <div className="fw-bold">Create</div>
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
            onChange={(e) => setage(e.target.value)}
          ></input>
        </label>

        <button
          type="submit"
          className="btn btn-success"
          onClick={handleSubmit}
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

export default Create;
