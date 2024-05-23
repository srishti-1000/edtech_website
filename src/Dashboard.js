import React from 'react';
import './Dashboard.css';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h2>Welcome to the EduTech Dashboard</h2>
      <div className="dashboard-sections">
        <Link to="/courses">
          <section className="dashboard-section">
            <h3>Courses</h3>
            <p>Manage your courses here.</p>
          </section>
        </Link>
        {/* <Link to="/students"> */}
          <section className="dashboard-section">
            <h3>Students</h3>
            <p>View student informations.</p>
          </section>
        {/* </Link> */}
        <Link to="/profile">
          <section className="dashboard-section">
            <h3>Profile</h3>
            <p>Update your profile details.</p>
          </section>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
