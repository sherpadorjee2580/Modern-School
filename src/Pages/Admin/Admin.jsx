import React, { useEffect, useState } from "react";
import Nav from "../../Component/Nav/Nav";
import Footer from "../../Component/Footer/Footer";
import "./style/Admin.css";

const Admin = () => {
  useEffect(() => {
    const password = prompt("Enter admin password:");
    if (password !== "admin123") {
      alert("Unauthorized access");
      window.location.href = "/";
    } else {
      const storedData = JSON.parse(localStorage.getItem("enrollments")) || [];
      setEnrollments(storedData);
    }
  }, []);

  const [enrollments, setEnrollments] = useState([]);

  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem("enrollments")) || [];
    setEnrollments(storedData);
  }, []);

  return (
    <div className="admin">
      <Nav />
      <section className="admin__section">
        <div className="admin__container">
          <h2 className="admin__title">📋 Enrolled Students</h2>
          <p className="admin__description">
            Below is the list of students enrolled in various academic programs.
          </p>

          {enrollments.length === 0 ? (
            <div className="admin__empty">
              <p>No enrollments found.</p>
            </div>
          ) : (
            <div className="admin__table-wrapper">
              <table className="admin__table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Full Name</th>
                    <th>Email</th>
                    <th>Course</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  {enrollments.map((entry, index) => (
                    <tr key={index}>
                      <td>{index + 1}</td>
                      <td>{entry.fullname}</td>
                      <td>{entry.email}</td>
                      <td>{entry.course}</td>
                      <td>
                        <span className="admin__status admin__status--active">
                          Enrolled
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Admin;
