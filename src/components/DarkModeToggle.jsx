import './DarkModeToggle.css';

function DarkModeToggle({ isDarkMode, onToggle }) {
  return (
    <div className="controls">
      <button className="btn-primary" onClick={onToggle}>
        {isDarkMode ? ' Light Mode' : ' Dark Mode'}
      </button>
    </div>
  );
}

export default DarkModeToggle;
