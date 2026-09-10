import { Link } from 'react-router-dom';
import './style.css';

function ModernButton({
  to,
  label,
  type = 'link',
  disabled = false,
  download,
}) {
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
          {type === 'download' ? (
            <>
              <path d="M12 3v13" />
              <path d="m7 11 5 5 5-5" />
              <path d="M5 21h14" />
            </>
          ) : (
            <>
              <path d="M5 12h14" />
              <path d="m13 6 6 6-6 6" />
            </>
          )}
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

  if (type === 'download') {
    return (
      <a href={to} download={download} className="modern-button">
        {content}
      </a>
    );
  }

  return (
    <Link to={to} className="modern-button">
      {content}
    </Link>
  );
}

export default ModernButton;
