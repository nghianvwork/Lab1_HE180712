import './ProfileCard.css';
import CardHeader from './CardHeader';
import CardBody from './CardBody';
import StatusToggle from './StatusToggle';
import DarkModeToggle from './DarkModeToggle';
import LikeButton from './LikeButton';

function ProfileCard({ student, isDarkMode, onToggleDarkMode }) {
  return (
    <div className="profile-card">
      <CardHeader
        avatar={student.avatar}
        name={student.name}
        studentID={student.studentID}
      />
      <CardBody
        className={student.className}
        major={student.major}
        hobbies={student.hobbies}
      />
      <div className="card-footer">
        <StatusToggle />
        <DarkModeToggle isDarkMode={isDarkMode} onToggle={onToggleDarkMode} />
        <LikeButton />
      </div>
    </div>
  );
}

export default ProfileCard;
