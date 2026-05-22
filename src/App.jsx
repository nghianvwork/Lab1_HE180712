import React, { useState } from 'react';
import avatarImg from './assets/z7632372110653_052fecba7dc161b485811de6de1311fb.jpg';
import './index.css';

const student = {
  avatar: avatarImg,
  name: "Nguyễn Văn Nghĩa",
  studentID: "HE180712",
  className: "SE2009",
  major: "Software Engineering",
  hobbies: ["Football", "Music", "Traveling", "Cooding", "Cooking"],
};

function App() {
  const [isOnline, setIsOnline] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [likes, setLikes] = useState(0);

  const toggleStatus = () => setIsOnline(!isOnline);
  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);
  const handleLike = () => setLikes(likes + 1);

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>

      <div className="profile-card">
        <div className="card-header">
          <div className="avatar-wrapper">
            <img src={student.avatar} alt="Student Avatar" className="avatar" />
          </div>
          <h1 className="student-name">{student.name}</h1>
          <p className="student-id">@{student.studentID}</p>
        </div>

        <div className="card-body">
          <div className="info-group">
            <h3>Class: {student.className}</h3>
          </div>
          <div className="info-group">
            <h3>Major: {student.major}</h3>
          </div>
          <div className="info-group hobbies">
            <h3>Hobbies: </h3>
            <ul>
              {student.hobbies.map((hobby, index) => (
                <li key={index}>{hobby}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card-footer">
          <div className="status-toggle">
            <p>Status: <strong>{isOnline ? 'Online' : 'Offline'}</strong></p>
            <button className={`btn-primary ${isOnline ? 'btn-online' : 'btn-offline'}`} onClick={toggleStatus}>
              Toggle Status
            </button>
          </div>
           <div className="controls">
        <button className="btn-primary" onClick={toggleDarkMode}>
          {isDarkMode ? ' Light Mode' : ' Dark Mode'}
        </button>
      </div>
          <div className="like-section">
            <button className="btn-primary" onClick={handleLike}>
               Like
            </button>
            <span className="like-count">{likes} {likes === 1 ? 'Like' : 'Likes'}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
