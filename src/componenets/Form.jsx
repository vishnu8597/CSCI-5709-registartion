import React, { useState } from "react";

function Form() {
  const onsubmit = (event) => {
    event.preventDefault();
  };
  const [formData, updateFormData] = useState({
    fname: "",
    lname: "",
    age: "",
    Address: "",
    gender: "1",
    email: "",
    phone: "",
    password: "",
    blood: "O+",
    td: "0",
    yon: "",
  });
  function updateFname(event) {
    updateFormData({ ...formData, fname: event.target.value });
  }
  function updateLname(event) {
    updateFormData({ ...formData, lname: event.target.value });
  }
  function updateAge(event) {
    updateFormData({ ...formData, age: event.target.value });
  }
  function updateAddress(event) {
    updateFormData({ ...formData, Address: event.target.value });
  }
  function updateGender(event) {
    updateFormData({ ...formData, gender: event.target.value });
  }
  function updateEmail(event) {
    updateFormData({ ...formData, email: event.target.value });
  }
  function updatephone(event) {
    updateFormData({ ...formData, phone: event.target.value });
  }
  function updatePassword(event) {
    updateFormData({ ...formData, password: event.target.value });
  }
  function updateBlood(event) {
    updateFormData({ ...formData, blood: event.target.value });
  }
  function updateTd(event) {
    updateFormData({ ...formData, td: event.target.value });
  }
  function updateYon(event) {
    updateFormData({ ...formData, yon: event.target.value });
  }

  return (
    <div>
      <h2>BE a helping hand</h2>
      <h5>Welcome to canada's biggest online blood bank system</h5>
      <form onSubmit={onsubmit} post="/home">
        <p>
          <label>First Name</label>
          <br />
          <input
            type="text"
            name="first_name"
            onChange={updateFname}
            value={formData.fname}
            required
          />
        </p>
        <p>
          <label>Last Name</label>
          <br />
          <input
            type="text"
            name="last_name"
            onChange={updateLname}
            value={formData.lname}
            required
          />
        </p>
        <p>
          <label>Age</label>
          <br />
          <input
            type="text"
            name="Age"
            onChange={updateAge}
            value={formData.age}
            required
          />
        </p>
        <p>
          <label>Address</label>
          <br />
          <textarea
            name="Address"
            onChange={updateAddress}
            value={formData.Address}
            required
          />
        </p>
        <label for="gender">Gender:</label>

        <select
          name="gender"
          onChange={updateGender}
          value={formData.gender}
          id="mf"
        >
          <option value="1">Male</option>
          <option value="0">Female</option>
        </select>

        <p>
          <label>Email address</label>
          <br />
          <input
            type="email"
            name="email"
            onChange={updateEmail}
            value={formData.email}
            required
          />
        </p>
        <p>
          <label>Phone</label>
          <br />
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={updatephone}
            required
          />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={updatePassword}
            required
          />
        </p>
        <label for="blood">Choose your blood type:</label>

        <select
          name="Blood_type"
          onChange={updateBlood}
          value={formData.blood}
          id="bt"
        >
          <option value="O+">O+</option>
          <option value="O-">O-</option>
          <option value="A+">A+</option>
          <option value="A-">A-</option>
          <option value="B+">B+</option>
          <option value="B-">B-</option>
          <option value="AB+">AB+</option>
          <option value="AB-">AB-</option>
        </select>

        <p>
          <label>Number of time you have doanted blood</label>
          <br />
          <input
            type="text"
            name="nbd"
            onChange={updateTd}
            value={formData.td}
            required
          />
        </p>
        <label for="blood">
          If you were asked to donate blood now. will you donate ?:
        </label>

        <select
          name="yesorno"
          id="yon"
          onChange={updateYon}
          value={formData.yon}
        >
          <option value="1">yes</option>
          <option value="0">no</option>
        </select>

        <p>
          <input type="checkbox" name="checkbox" id="checkbox" required />{" "}
          <span>
            I agree all statements in{" "}
            <a
              href="https://google.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              terms of service
            </a>
          </span>
          .
        </p>
        <p>
          <button id="sub_btn" type="submit">
            Register
          </button>
        </p>
      </form>
      {/* <footer>
        <p>
          <Link to="/">Back to Homepage</Link>.
        </p>
      </footer> */}
    </div>
  );
}

export default Form;
