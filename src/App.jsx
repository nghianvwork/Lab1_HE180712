import { useState } from 'react';
import avatarImg from './assets/z7632372110653_052fecba7dc161b485811de6de1311fb.jpg';
import ProfileCard from './components/ProfileCard';
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
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <div className={`app-container ${isDarkMode ? 'dark-mode' : 'light-mode'}`}>
      <ProfileCard
        student={student}
        isDarkMode={isDarkMode}
        onToggleDarkMode={toggleDarkMode}
      />
    </div>
  );
}

export default App;
