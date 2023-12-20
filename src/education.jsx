import "./Education.css";
import { useState } from "react";

function Education() {
  const [collegeeducation, setCollege] = useState("");
  const [collegeQual, setcollegeQual] = useState("");
  const [university, setUniversity] = useState("");
  const [universityeducation, setUni] = useState("");
  const [collstartdate, collsetstartDate] = useState("");
  const [collenddate, collsetendDate] = useState("");
  const [unistartdate, setUnistartDate] = useState("");
  const [unienddate, setUniendate] = useState("");
  const [showForm, setShowForm] = useState(false);

  function handleChangeColl(e) {
    setCollege(e.target.value);
  }
  function collegeQualification(e) {
    setcollegeQual(e.target.value);
  }

  function Unicoll(e) {
    setUni(e.target.value);
  }
  function addUni(e) {
    setUniversity(e.target.value);
  }
  function universitystartdate(e) {
    setUnistartDate(e.target.value);
  }
  function universityEndDate(e) {
    setUniendate(e.target.value);
  }
  function collstartDate(e) {
    collsetstartDate(e.target.value);
  }
  function collendDate(e) {
    collsetendDate(e.target.value);
  }
  function toggleform(e) {
    e.preventDefault();
    setShowForm(!showForm);
  }
  const editForm = () => {
    setShowForm(showForm);
  };

  return (
    <>
      <header>
        <h1>EDUCATIONAL EXPERIENCE</h1>
      </header>
      <form>
        <label>College</label>
        <input name="education" type="text" onChange={handleChangeColl} />
        <label>Qualification</label>
        <input name="education" type="text" onChange={collegeQualification} />

        <input
          id="startdate"
          name="startdate"
          type="date"
          onChange={collstartDate}
        />
        <input id="enddate" name="enddate" type="date" onChange={collendDate} />

        <label>University</label>

        <input name="education" type="text" onChange={addUni} />
        <label>Degree</label>
        <input name="education" type="text" onChange={Unicoll} />
        <input
          id="startdate"
          name="startdate"
          type="date"
          onChange={universitystartdate}
        />
        <input
          id="enddate"
          name="enddate"
          type="date"
          onChange={universityEndDate}
        />

        <button type="submit" onClick={toggleform}>
          SUBMIT
        </button>
        <button type="edit" onClick={editForm}>
          EDIT
        </button>
      </form>
      {!showForm && (
        <div className="updatedEducation">
          <p>{collegeeducation}</p>
          <p>{collegeQual}</p>
          <p>College Start Date: {collstartdate}</p>
          <p>College End Date: {collenddate}</p>
          <p>{university}</p>
          <p>{universityeducation}</p>
          <p>University Start Date: {unistartdate}</p>
          <p>University End Date: {unienddate}</p>
        </div>
      )}
    </>
  );
}

export default Education;
