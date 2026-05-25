import { useState } from 'react';
import './StatusToggle.css';

function StatusToggle() {
  const [isOnline, setIsOnline] = useState(false);

  const toggleStatus = () => setIsOnline(!isOnline);

  return (
    <div className="status-toggle">
      <p>Status: <strong>{isOnline ? 'Online' : 'Offline'}</strong></p>
      <button
        className={`btn-primary ${isOnline ? 'btn-online' : 'btn-offline'}`}
        onClick={toggleStatus}
      >
        Toggle Status
      </button>
    </div>
  );
}

export default StatusToggle;
