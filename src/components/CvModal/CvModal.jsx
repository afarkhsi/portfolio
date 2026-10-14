import { useTranslation } from 'react-i18next';
import ModernButton from '../ModernButton/ModernButton';
import './style.css';

function CvModal({ onClose }) {
  const { t } = useTranslation();

  return (
    <div className="cv_modal_overlay" onClick={onClose}>
      <div className="cv_modal_box" onClick={(e) => e.stopPropagation()}>
        <button
          className="cv_modal_close"
          onClick={onClose}
          aria-label={t('cv.labels.close')}
        >
          ×
        </button>

        <div className="cv_modal_content">
          <header className="cv_header">
            <h2>{t('cv.name')}</h2>
            <p className="cv_availability">{t('cv.availability')}</p>
            <p className="cv_project_stack">{t('cv.headline')}</p>
            <p className="cv_intro">{t('cv.intro')}</p>
          </header>

          <section className="cv_section">
            <h3>{t('cv.labels.skills')}</h3>
            <div className="cv_skills_grid">
              {t('cv.skills').map((group) => (
                <div key={group.title}>
                  <h4>{group.title}</h4>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          <section className="cv_section">
            <h3>{t('cv.labels.experiences')}</h3>
            {t('cv.experiences').map((experience) => (
              <article className="cv_project" key={experience.role}>
                <h4>{experience.role}</h4>
                <p className="cv_project_meta">{experience.meta}</p>
                {experience.stack && (
                  <p className="cv_project_stack">{experience.stack}</p>
                )}
                {experience.description && <p>{experience.description}</p>}
                <ul>
                  {experience.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </section>

          <section className="cv_section">
            <h3>{t('cv.labels.projects')}</h3>
            {t('cv.projects').map((project) => (
              <article className="cv_project" key={project.title}>
                <h4>{project.title}</h4>
                <p className="cv_project_stack">{project.stack}</p>
                <p>{project.description}</p>
                <ul>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
                {project.github && (
                  <p className="cv_project_meta">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {t('cv.labels.github')}
                    </a>
                  </p>
                )}
              </article>
            ))}
            <p className="cv_project_meta">{t('cv.otherProjects')}</p>
          </section>

          <section className="cv_section">
            <h3>{t('cv.labels.education')}</h3>
            {t('cv.education').map((formation) => (
              <article className="cv_formation" key={formation.title}>
                <h4>{formation.title}</h4>
                <p className="cv_project_meta">{formation.meta}</p>
              </article>
            ))}
          </section>

          <section className="cv_download">
            <ModernButton
              type="download"
              to={t('cv.pdf.href')}
              download={t('cv.pdf.filename')}
              label={t('cv.pdf.label')}
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default CvModal;
