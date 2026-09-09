import { Link } from 'react-router-dom';
import './style.css';

function ModernButton({ to, label, type = 'link', disabled = false }) {
  const content = (
    <>
      <span className="modern-button_label">{label}</span>
      <span className="modern-button_icon">
        <svg
          viewBox="0 0 24 24"
          width="18"
          height="18"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M5 12h14" />
          <path d="m13 6 6 6-6 6" />
        </svg>
      </span>
    </>
  );

  if (type === 'submit') {
    return (
      <button type="submit" className="modern-button" disabled={disabled}>
        {content}
      </button>
    );
  }

  return (
    <Link to={to} className="modern-button">
      {content}
    </Link>
  );
}

export default ModernButton;
