import './CardBody.css';

function CardBody({ className, major, hobbies }) {
  return (
    <div className="card-body">
      <div className="info-group">
        <h3>Class: {className}</h3>
      </div>
      <div className="info-group">
        <h3>Major: {major}</h3>
      </div>
      <div className="info-group hobbies">
        <h3>Hobbies: </h3>
        <ul>
          {hobbies.map((hobby, index) => (
            <li key={index}>{hobby}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardBody;
