import React from 'react';
import './Course.css';

const courses = [
  { name: 'JavaScript', description: 'Learn the fundamentals of JavaScript, the language of the web.' },
  { name: 'Java', description: 'Master Java, one of the most popular programming languages.' },
  { name: 'AI/ML', description: 'Dive into Artificial Intelligence and Machine Learning concepts.' },
  { name: 'Python', description: 'Get started with Python, a powerful and versatile programming language.' }
];

const Course = () => {
  return (
    <div className="course">
      <h2>Courses</h2>
      <div className="course-list">
        {courses.map((course, index) => (
          <div className="course-item" key={index}>
            <h3>{course.name}</h3>
            <p>{course.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
