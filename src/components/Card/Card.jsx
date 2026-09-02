import { useEffect, useRef, useState } from 'react';
import './style.css';

const Card = ({ id, image, title, description, technologie, tags, link }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [scrollDistance, setScrollDistance] = useState(0);
  const [needsScroll, setNeedsScroll] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const text = textRef.current;

    if (container && text) {
      const containerHeight = container.clientHeight;
      const textHeight = text.scrollHeight;
      const distance = textHeight - containerHeight;

      if (distance > 0) {
        setScrollDistance(distance);
        setNeedsScroll(true);
      } else {
        setNeedsScroll(false);
      }
    }
  }, [description]);

  return (
    <div className="card" id={id}>
      <img className="card_img" src={image} alt="background-img" />

      {tags && (
        <div className="card_tags_badge">
          {tags.map((tag) => (
            <span key={tag} className={`card_tag card_tag_${tag}`}>
              {tag}
            </span>
          ))}
        </div>
      )}

      <div className="card_description">
        <div className="card_description_header">
          <span className="card_description_header_title">{title}</span>
          {tags && (
            <div className="card_tags">
              {tags.map((tag) => (
                <span key={tag} className={`card_tag card_tag_${tag}`}>
                  {tag}
                </span>
              ))}
            </div>
          )}
          <a
            className="card_description_header_link"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Voir le projet
          </a>
        </div>

        <div className="card_description_content" ref={containerRef}>
          <p
            className={`card_description_content_inner ${
              needsScroll ? 'is-scrolling' : ''
            }`}
            ref={textRef}
            style={
              needsScroll
                ? { '--scroll-distance': `-${scrollDistance}px` }
                : undefined
            }
          >
            {description}
          </p>
        </div>

        <div className="card_technologie">
          {technologie &&
            technologie.map((techno) => (
              <img className="card_technologie_logo" src={techno} alt="logo" />
            ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
