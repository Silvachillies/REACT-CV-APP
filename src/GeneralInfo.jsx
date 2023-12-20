import { useState } from "react";
import "./General.css";

function GeneralInfo(props) {
  const [Name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [showForm, setShowForm] = useState(false);

  function addName(e) {
    setName(e.target.value);
  }
  function addEmail(e) {
    setEmail(e.target.value);
  }
  function addPhone(e) {
    setPhone(e.target.value);
  }
  const toggleform = (e) => {
    e.preventDefault();
    setShowForm(!showForm);
  };
  const editForm = () => {
    setShowForm(!showForm);
  };

  return (
    <>
      <header>
        <h1>PERSONAL DETAILS</h1>
      </header>

      <form>
        <label>Name</label>
        <input
          name="name"
          type="text"
          onChange={addName}
          placeholder="Full Name..."
          value={Name}
          required={true}
        />
        <label>E-MAIL</label>
        <input
          name="email"
          type="email"
          onChange={addEmail}
          placeholder="E-mail address"
          value={email}
          required={true}
        />

        <label>PHONE</label>
        <input
          name="tel"
          type="tel"
          onChange={addPhone}
          placeholder="Telephone"
          value={phone}
          required={true}
        />

        <button onClick={editForm}>EDIT</button>
        <button onClick={toggleform}>SUBMIT</button>
      </form>
      {!showForm && (
        <>
          <div className="form">
            <div className="updated">
              <h2>Personal Details</h2>
              <p>{Name}</p>
              <p>{email}</p>
              <p>{phone}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default GeneralInfo;
