import './CardHeader.css';

function CardHeader({ avatar, name, studentID }) {
  return (
    <div className="card-header">
      <div className="avatar-wrapper">
        <img src={avatar} alt="Student Avatar" className="avatar" />
      </div>
      <h1 className="student-name">{name}</h1>
      <p className="student-id">@{studentID}</p>
    </div>
  );
}

export default CardHeader;
