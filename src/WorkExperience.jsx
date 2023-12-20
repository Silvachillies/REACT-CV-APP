import { useState } from "react";
import "./Work.css";

function WorkExperience() {
  const [experience1, setExperience1] = useState("");
  const [experience1startdate, setExperience1startdate] = useState("");
  const [experience1enddate, setExperience1endtdate] = useState("");

  const [experience2, setExperience2] = useState("");
  const [experience2startdate, setExperience2startdate] = useState("");
  const [experience2enddate, setExperience2enddate] = useState("");

  const [showForm, setShowForm] = useState(false);

  function setExperienceChange1(e) {
    setExperience1(e.target.value);
  }
  function experience1startDate(e) {
    setExperience1startdate(e.target.value);
  }
  function experience1endDate(e) {
    setExperience1endtdate(e.target.value);
  }
  function setExperienceChange2(e) {
    setExperience2(e.target.value);
  }
  function experience2Startdate(e) {
    setExperience2startdate(e.target.value);
  }
  function Experience2enddate(e) {
    setExperience2enddate(e.target.value);
  }

  function toggleform(e) {
    e.preventDefault();
    setShowForm(!showForm);
  }
  const editForm = () => {
    setShowForm(!showForm);
  };
  return (
    <>
      <header>
        <h1>Work Experience</h1>
      </header>
      <form>
        <label>EXPERIENCE</label>
        <input name="work" type="text" onChange={setExperienceChange1} />

        <input
          name="work1startdate"
          type="date"
          onChange={experience1startDate}
        />
        <input name="work1enddate" type="date" onChange={experience1endDate} />
        <label>EXPERIENCE 2</label>
        <input name="work2" type="text" onChange={setExperienceChange2} />
        <input
          name="work2startdate"
          type="date"
          onChange={experience2Startdate}
        />
        <input name="work2enddate" type="date" onChange={Experience2enddate} />

        <button type="submit" onClick={toggleform}>
          SUBMIT
        </button>
        <button type="reset" onClick={editForm}>
          EDIT
        </button>
      </form>
      {!showForm && (
        <div className="updatedWork">
          <p>{experience1}</p>
          <p>START DATE: {experience1startdate}</p>
          <p>END DATE: {experience1enddate}</p>
          <p>{experience2}</p>
          <p>START DATE: {experience2startdate}</p>
          <p>END DATE: {experience2enddate}</p>
        </div>
      )}
    </>
  );
}
export default WorkExperience;
