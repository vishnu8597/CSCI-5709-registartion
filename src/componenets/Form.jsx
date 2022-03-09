function Form() {
  return (
    <div>
      <h2>BE a helping hand</h2>
      <h5>Welcome to canada's biggest online blood bank system</h5>
      <form post="/home">
        <p>
          <label>First Name</label>
          <br />
          <input type="text" name="first_name" required />
        </p>
        <p>
          <label>Last Name</label>
          <br />
          <input type="text" name="last_name" required />
        </p>
        <p>
          <label>Age</label>
          <br />
          <input type="text" name="Age" required />
        </p>
        <p>
          <label>Address</label>
          <br />
          <textarea name="Address" required />
        </p>
        <label for="gender">Gender:</label>

        <select name="gender" id="mf">
          <option value="1">Male</option>
          <option value="0">Female</option>
        </select>

        <p>
          <label>Email address</label>
          <br />
          <input type="email" name="email" required />
        </p>
        <p>
          <label>Phone</label>
          <br />
          <input type="text" name="phone" required />
        </p>
        <p>
          <label>Password</label>
          <br />
          <input type="password" name="password" requiredc />
        </p>
        <label for="blood">Choose your blood type:</label>

        <select name="Blood_type" id="bt">
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
          <input type="text" name="nbd" required />
        </p>
        <label for="blood">
          If you were asked to donate blood now. will you donate ?:
        </label>

        <select name="yesorno" id="yon">
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
