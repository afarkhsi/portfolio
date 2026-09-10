import ModernButton from '../ModernButton/ModernButton';
import './style.css';

function CvModal({ onClose }) {
  return (
    <div className="cv_modal_overlay" onClick={onClose}>
      <div className="cv_modal_box" onClick={(e) => e.stopPropagation()}>
        <button
          className="cv_modal_close"
          onClick={onClose}
          aria-label="Fermer"
        >
          ×
        </button>

        <div className="cv_modal_content">
          <header className="cv_header">
            <h2>Abdourrahman Farkhsi</h2>
            <p className="cv_availability">Disponible immédiatement</p>
            <p className="cv_intro">
              Développeur Full-Stack junior fraîchement diplômé
              d'OpenClassrooms, j'ai été formé en alternance chez Paramedic
              Technologies où j'ai contribué au développement d'une application
              web et mobile de gestion de transports sanitaires. Ancien
              responsable financier et comptable, je mets en pratique ma rigueur
              analytique au service de projets aboutis et maintenables. Je
              recherche une première expérience en tant que développeur junior
              dans une équipe où je pourrais continuer à apprendre et à monter
              en compétences.
            </p>
          </header>

          <section className="cv_section">
            <h3>Compétences</h3>
            <div className="cv_skills_grid">
              <div>
                <h4>Langages</h4>
                <ul>
                  <li>JavaScript</li>
                  <li>Python</li>
                  <li>Java</li>
                  <li>Dart</li>
                  <li>Sass</li>
                  <li>Html / CSS</li>
                </ul>
              </div>
              <div>
                <h4>Frameworks & outils</h4>
                <ul>
                  <li>ReactJS – Redux.js</li>
                  <li>Angular</li>
                  <li>Spring Boot</li>
                  <li>Flutter (Android Studio)</li>
                  <li>Docker</li>
                  <li>Bootstrap</li>
                  <li>TypeScript</li>
                  <li>SQL</li>
                  <li>MongoDB</li>
                </ul>
              </div>
              <div>
                <h4>Outils IA</h4>
                <ul>
                  <li>Claude Code</li>
                </ul>
              </div>
              <div>
                <h4>Langues</h4>
                <ul>
                  <li>Arabe & Français (langue maternelle)</li>
                  <li>Anglais & Espagnol (niveau avancé)</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="cv_section">
            <h3>Expériences & projets</h3>

            <article className="cv_project">
              <h4>Alternant développeur Full-Stack Web & Mobile</h4>
              <p className="cv_project_meta">
                PARAMEDIC Technologies • Paris (75) • Mars 2025 à Mars 2026
              </p>
              <p className="cv_project_stack">
                Html • Css • JavaScript • ReactJS • Redux • Python • Flutter
              </p>
              <p>
                Paramedic est une plateforme de gestion et d'optimisation des
                transports sanitaires, de la prise en charge à la facturation.
              </p>
              <ul>
                <li>
                  Conception en équipe, développement et refonte complète de la
                  nouvelle version de l'application mobile avec Android Studio &
                  Flutter
                </li>
                <li>
                  Développement de nouveaux modules pour l'application web
                  (backend & frontend)
                </li>
                <li>Création de modèles et tables de données</li>
                <li>Corrections de bugs</li>
              </ul>
            </article>

            <article className="cv_project">
              <h4>ChaTop API</h4>
              <p className="cv_project_stack">Java • Spring Boot • MySQL</p>
              <p>
                Api de location d'appartements entre particuliers, permettant
                aux utilisateurs de s'inscrire, se connecter, rechercher,
                réserver, publier et gérer leurs locations.
              </p>
              <ul>
                <li>Création d'une api suivant une architecture en couche</li>
                <li>Gestion de l'authentification sécurisée par JWT</li>
                <li>
                  Stockage d'image & validation des données avant traitement
                </li>
                <li>Documentation interactive avec Swagger UI</li>
              </ul>
            </article>

            <article className="cv_project">
              <h4>MDD Monde De Dév</h4>
              <p className="cv_project_stack">
                Html • Sass • Angular • Java • Spring Boot • MySQL
              </p>
              <p>
                Réseau social pour aider les développeurs qui cherchent un
                travail, en encourageant les liens et la collaboration entre
                pairs.
              </p>
              <ul>
                <li>Gestion de l'authentification sécurisée par JWT</li>
                <li>Création des modèles et des tables de données</li>
                <li>Validation des données</li>
                <li>Gestion de profils</li>
                <li>
                  Abonnements à des sujets, création d'articles et publication
                  de commentaires
                </li>
              </ul>
            </article>

            <article className="cv_project">
              <h4>ArgentBank</h4>
              <p className="cv_project_stack">
                Html • Css • JavaScript • ReactJS • Redux.js • MongoDB
              </p>
              <p>
                Le projet concerne une nouvelle banque qui a besoin d'aide pour
                mettre en place son application.
              </p>
              <ul>
                <li>
                  Créer l'application web complète et responsive avec React
                </li>
                <li>
                  Utiliser Redux pour gérer le state de l'ensemble de
                  l'application
                </li>
                <li>
                  Spécifier les endpoints d'API nécessaires pour une éventuelle
                  deuxième mission
                </li>
              </ul>
            </article>
          </section>

          <section className="cv_section">
            <h3>Formations</h3>
            <article className="cv_formation">
              <h4>
                Expert en développement logiciel (BAC +5) - Développeur
                Full-Stack Java et Angular
              </h4>
              <p className="cv_project_meta">
                OpenClassrooms (75) • 2024 à 2026
              </p>
            </article>
            <article className="cv_formation">
              <h4>
                Certification professionnelle (BAC +3/+4) - Développeur
                concepteur logiciel JavaScript React
              </h4>
              <p className="cv_project_meta">
                OpenClassrooms (75) • 2022 à 2024
              </p>
            </article>
            <article className="cv_formation">
              <h4>
                Master 1&2 Economie Gestion parcours Gestion des Risques
                Financiers
              </h4>
              <p className="cv_project_meta">
                Université Paris XII Créteil (94) • 2017 à 2019
              </p>
            </article>
          </section>
          <section className="cv_download">
            <ModernButton
              type="download"
              to="/cv-abdourrahman-farkhsi.pdf"
              download="CV-Abdourrahman-Farkhsi.pdf"
              label="Télécharger mon CV"
            />
          </section>
        </div>
      </div>
    </div>
  );
}

export default CvModal;
