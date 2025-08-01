import React, { useState } from "react";
import "./style/Enroll.css";
import Nav from "../../Component/Nav/Nav";
import Footer from "../../Component/Footer/Footer";
import { Link } from "react-router-dom";

const CourseEnrollment = () => {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    course: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Get existing entries
    const existingData = JSON.parse(localStorage.getItem("enrollments")) || [];

    // Add new entry
    const updatedData = [...existingData, formData];

    // Save back to localStorage
    localStorage.setItem("enrollments", JSON.stringify(updatedData));

    alert("Enrollment submitted successfully!");

    // Optional: Reset form
    setFormData({ fullname: "", email: "", course: "" });
  };

  return (
    <div className="enroll">
      <Nav />
      <section className="enrollment">
        <div className="enrollment__container">
          <h2 className="enrollment__title">Course Enrollment</h2>
          <p className="enrollment__subtitle">
            Join our academic programs and shape your future with quality
            education.
          </p>

          <form className="enrollment__form" onSubmit={handleSubmit}>
            <div className="enrollment__form-group">
              <label className="enrollment__label" htmlFor="fullname">
                Full Name
              </label>
              <input
                className="enrollment__input"
                type="text"
                id="fullname"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                required
              />
            </div>

            <div className="enrollment__form-group">
              <label className="enrollment__label" htmlFor="email">
                Email Address
              </label>
              <input
                className="enrollment__input"
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="enrollment__form-group">
              <label className="enrollment__label" htmlFor="course">
                Select Course
              </label>
              <select
                className="enrollment__select"
                id="course"
                name="course"
                value={formData.course}
                onChange={handleChange}
                required
              >
                <option value="">-- Choose a Course --</option>
                <option value="science">Science</option>
                <option value="management">Management</option>
                <option value="humanities">Humanities</option>
                <option value="computer">Computer Science</option>
              </select>
            </div>

            <button type="submit" className="enrollment__submit">
              Submit Enrollment
            </button>
          </form>
          <p className="enrollment__admin-link">
            Are you an admin? <Link to="/admin">View Enrollments</Link>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default CourseEnrollment;
