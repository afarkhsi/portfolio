import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage = localStorage.getItem('language') || 'fr';

i18n.use(initReactI18next).init({
  lng: savedLanguage,
  fallbackLng: 'fr',
  returnObjects: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    fr: {
      translation: {
        navbar: {
          home: 'ACCUEIL',
          projects: 'PROJETS',
          contact: 'CONTACT',
        },
        about: {
          jobTitle: 'DÉVELOPPEUR FULL-STACK',
          description:
            "Passionné par le développement et l'innovation, je mets mes compétences full-stack au service de la création d'applications web et mobiles performantes, fiables et pensées pour l'utilisateur.",
          projectsButton: 'Mes projets',
        },
        card: {
          buttonLabel: 'Voir le projet',
        },
        projects: {
          items: {
            1: {
              description:
                "Paramedic est une plateforme de gestion et d'optimisation des transports sanitaires, de la prise en charge à la facturation. Le bon transport, au bon moment, pour le bon patient. Elle permet de gérer les transports sanitaires, d'optimiser les itinéraires et de suivre les patients en temps réel.",
            },
            2: {
              description:
                "Telesport est un site web dédié aux passionnés de sport, offrant une plateforme pour suivre les actualités, les résultats et l'historique des médailles olympiques.",
            },
            3: {
              description:
                "API de location d'appartements entre particuliers, permettant aux utilisateurs de s'inscrire, se connecter, rechercher, réserver, publier et gérer leurs locations.",
            },
            4: {
              description:
                "Mise en place de tests back-end et front-end sur une application de yoga, permettant de vérifier le bon fonctionnement des fonctionnalités et d'assurer la qualité du code.",
            },
            5: {
              description:
                "MDD est un réseau social destiné aux développeurs en recherche d'emploi. Il permet de mettre en relation les professionnels et d'encourager les échanges et la collaboration entre pairs partageant des intérêts communs.",
            },
            6: {
              description:
                "Bob App est une application proposant quotidiennement de nouvelles blagues. Une démarche CI/CD a été mise en place pour automatiser le développement et le déploiement, à l'aide d'outils tels que GitHub Actions, SonarQube et Docker.",
            },
            7: {
              description:
                "Proof of Concept pour une application de location de voitures dans plusieurs pays. L'objectif est de centraliser les systèmes existants sur une plateforme unique, de fournir un service client moderne et réactif, et d'améliorer l'expérience utilisateur ainsi que l'efficacité opérationnelle.",
            },
            8: {
              description:
                'SportSee est une startup spécialisée dans le coaching sportif qui souhaite lancer une nouvelle version de la page de profil utilisateur, permettant notamment de suivre le nombre de séances réalisées et les calories brûlées.',
            },
            9: {
              description:
                "Développement d'une application React avec ses composants et ses routes React Router, à partir de maquettes Figma responsives, pour un site de location d'appartements entre particuliers.",
            },
            10: {
              description:
                'Le projet consiste à accompagner une nouvelle banque, Argent Bank, dans la mise en place de son application afin de développer sa présence dans le secteur bancaire.',
            },
            11: {
              description:
                "Après plusieurs années consacrées à l'édition de livres de cuisine, l'entreprise souhaite créer son propre site de recettes, à l'image de Marmiton ou de 750g.",
            },
            12: {
              description:
                "FishEye est un site web permettant aux photographes indépendants de présenter leurs meilleurs travaux. Après une levée de fonds, l'entreprise souhaite moderniser son site web.",
            },
            13: {
              description:
                "Développement d'un site mobile-first répertoriant les menus de restaurants gastronomiques.",
            },
            14: {
              description:
                "HRnet gère les dossiers des employés de WealthHealth. L'entreprise souhaite convertir son application en React et remplacer les plugins jQuery existants par des composants réutilisables.",
            },
          },
        },
        form: {
          prenom: 'Prénom',
          name: 'Nom',
          email: 'Email',
          message: 'Message',
          yourMessage: 'Votre message',
          submit: 'Envoyer',
          success: 'Message envoyé !',
          messageSuccess:
            'Merci pour votre message, je vous répondrai rapidement.',
          error: "Erreur d'envoi",
          messageError:
            'Une erreur est survenue. Merci de réessayer plus tard.',
          invalid: 'Formulaire incomplet',
          minimumInvalid: 'Veuillez renseigner au moins 2 caractères',
          emailInvalid: 'Veuillez renseigner une adresse email valide',
          messageInvalid: "Merci de vérifier les champs avant l'envoi.",
          minimumMessageInvalid: 'Veuillez renseigner au moins 20 caractères',
          ok: 'OK',
        },
        cv: {
          labels: {
            close: 'Fermer',
            skills: 'Compétences',
            experiences: 'Expériences',
            projects: 'Projets',
            education: 'Formations',
            github: 'GitHub',
          },

          pdf: {
            href: '/cv-abdourrahman-farkhsi-fr.pdf',
            filename: 'CV-Abdourrahman-Farkhsi-FR.pdf',
            label: 'Télécharger mon CV',
          },

          name: 'Abdourrahman Farkhsi',
          availability: 'Disponible immédiatement',
          headline:
            'Développeur Full-Stack Java / Spring • Angular • React • Python • Flutter',
          intro:
            "Développeur Full-Stack junior diplômé d'OpenClassrooms (titre RNCP niveau 7, bac+5), j'ai passé 12 mois en alternance chez Paramedic Technologies, dans une équipe d'environ 10 développeurs. J'y ai livré environ 60 tickets web et mobile (Flutter, React, Python), chacun testé (Pytest, Playwright, Patrol), pour une plateforme utilisée par des milliers de professionnels. Je conçois aussi des API REST sécurisées (Java, Spring Boot, JWT) et des interfaces Angular et React. Ancien responsable administratif et comptable (avec gestion du pôle IT de l'association EIAPIC), j'apporte une rigueur analytique et un sens du métier utiles en fintech, banque, assurance et gestion. Depuis la fin de mon alternance, je participe bénévolement à la conception technique et à l'architecture de la refonte numérique de l'association SIGMA F. Je recherche un poste de développeur Full-Stack junior au sein d'une équipe produit.",

          skills: [
            {
              title: 'Back-end',
              items: [
                'Java',
                'Spring Boot',
                'API REST',
                'Spring Security / JWT',
                'Python',
                'SQL / MySQL',
                'MongoDB',
              ],
            },
            {
              title: 'Front-end',
              items: [
                'JavaScript',
                'TypeScript',
                'ReactJS – Redux.js',
                'Angular',
                'HTML / CSS',
                'Sass',
                'Bootstrap',
              ],
            },
            {
              title: 'Mobile',
              items: ['Flutter (Android Studio)', 'Dart'],
            },
            {
              title: 'Tests & qualité',
              items: [
                'JUnit / Mockito',
                'Jest / Jasmine',
                'Pytest',
                'Behave (BDD, Gherkin)',
                'Cypress',
                'Playwright',
                'Patrol (Flutter)',
              ],
            },
            {
              title: 'Outils & DevOps',
              items: [
                'Docker',
                'Git / GitHub / GitLab',
                'Swagger / OpenAPI',
                'SonarQube',
                'Claude Code (développement assisté par IA)',
              ],
            },
            {
              title: 'Langues',
              items: [
                'Arabe & Français (langue maternelle)',
                'Anglais & Espagnol (niveau avancé)',
              ],
            },
          ],

          experiences: [
            {
              role: 'Conception technique du projet digital — Association SIGMA F (bénévolat)',
              meta: 'Bénévolat • Depuis mai 2026',
              description:
                "Association d'enseignement (préparation aux examens du bac) dont les outils numériques, vieillissants, sont à refondre.",
              bullets: [
                "Conception technique et architecturale de la future plateforme numérique de l'association, avant tout développement",
                'Réflexion sur les enjeux à venir du projet (évolutivité, maintenabilité, sécurité, plateformes de déploiement)',
                "Travail en équipe de 3 personnes sur l'aspect technique et budgétaire",
              ],
            },
            {
              role: 'Alternant développeur Full-Stack Web & Mobile',
              meta: 'PARAMEDIC Technologies • Paris (75) • Mars 2025 à Mars 2026',
              stack:
                'Flutter • Dart • ReactJS • Redux • JavaScript • HTML • CSS • Python • Pytest • Playwright • Behave • Patrol',
              description:
                "Plateforme de gestion et d'optimisation des transports sanitaires, de la prise en charge à la facturation, avec suivi des patients en temps réel. L'application mobile est utilisée par des centaines de professionnels (régulateurs, sociétés d'ambulances, chauffeurs) et l'application web SaaS par des milliers de professionnels, tous profils confondus.",
              bullets: [
                "Livraison d'environ 60 tickets en 12 mois, en majorité des fonctionnalités de 3 à 10 jours, au sein d'une équipe d'environ 10 développeurs",
                "Création de nouveaux modules de zéro, sur l'application mobile (Flutter) et sur l'application web, front et back-end : brancardage et commande patient",
                "Refonte complète de la nouvelle version de l'application mobile (Flutter / Android Studio) en équipe",
                'Conception des modèles et tables de données associés',
                'Tests systématiques de chaque fonctionnalité développée : Pytest, Behave, Playwright (end-to-end web), Patrol (Flutter)',
                'Diagnostics, création de tickets et correction de bugs',
              ],
            },
            {
              role: 'Responsable administratif et comptable',
              meta: 'Association EIAPIC • Mantes-la-Jolie (78) • Février 2020 à Mai 2022',
              bullets: [
                "Développement et gestion du pôle IT de l'association : mise en place d'outils numériques de collaboration et de partage interne et externe",
                'Digitalisation des données et de plusieurs processus pour rendre le travail à distance pratique et efficace',
                "Maintenance des plateformes utilisateurs de renseignement des données liées à l'activité de l'association et gestion du parc informatique",
                "Gestion financière et trésorerie, suivi et contrôle des comptes, clôtures comptables et édition des documents avant expertise, mise en place d'une comptabilité analytique",
                'Gestion de la paie et des contrats (CDD, contrats spéciaux, agréments service civique) et de projets comptables et transverses',
              ],
            },
          ],

          projects: [
            {
              title: 'ChaTop API',
              stack:
                'Java • Spring Boot • Spring Security • JWT • MySQL • Swagger',
              github: 'https://github.com/afarkhsi/Cha-Top',
              description:
                "API de location d'appartements entre particuliers, permettant aux utilisateurs de s'inscrire, se connecter, rechercher, réserver, publier et gérer leurs locations.",
              bullets: [
                "Création d'une API REST suivant une architecture en couches",
                "Gestion de l'authentification sécurisée par JWT",
                "Stockage d'images et validation des données avant traitement",
                'Documentation interactive avec Swagger UI',
              ],
            },
            {
              title: 'MDD Monde De Dév',
              stack: 'Angular • Sass • Java • Spring Boot • MySQL',
              github: 'https://github.com/afarkhsi/MDD-Fullstack-project',
              description:
                'Réseau social pour aider les développeurs qui cherchent un travail, en encourageant les liens et la collaboration entre pairs qui ont des intérêts communs.',
              bullets: [
                'Authentification sécurisée par JWT, gestion des profils, validation des données',
                'Abonnements à des sujets, création d’articles et publication de commentaires',
                'Modélisation de la base de données (MySQL)',
              ],
            },
            {
              title: 'ArgentBank',
              stack: 'ReactJS • Redux • JavaScript • HTML • CSS • MongoDB',
              github: 'https://github.com/afarkhsi/ArgentBank',
              description:
                "Application web pour une néobanque qui a besoin d'aide pour mettre en place son application.",
              bullets: [
                "Création de l'application web complète et responsive avec React",
                "Gestion de l'état global avec Redux",
                "Spécification des endpoints d'API nécessaires à une évolution future (Swagger)",
              ],
            },
          ],

          otherProjects: 'Autres projets : voir le portfolio',

          education: [
            {
              title:
                'Expert en développement logiciel (RNCP niveau 7, bac+5) - Développeur Full-Stack Java et Angular',
              meta: 'OpenClassrooms (75) • 2024 à 2026',
            },
            {
              title:
                'Certification professionnelle (bac+3/4) - Développeur concepteur logiciel JavaScript React',
              meta: 'OpenClassrooms (75) • 2022 à 2024',
            },
            {
              title:
                'Master 1 & 2 Économie-Gestion, parcours Gestion des Risques Financiers',
              meta: 'Université Paris-Est Créteil (94) • 2017 à 2019',
            },
          ],
        },
      },
    },
    en: {
      translation: {
        navbar: {
          home: 'HOME',
          projects: 'PROJECTS',
          contact: 'CONTACT',
        },
        about: {
          jobTitle: 'FULL-STACK DEVELOPER',
          description:
            'Passionate about development and innovation, I use my full-stack skills to build high-performance, reliable web and mobile applications designed with the user in mind.',
          projectsButton: 'My projects',
        },
        card: {
          buttonLabel: 'View project',
        },
        projects: {
          items: {
            1: {
              description:
                'Paramedic is a platform for managing and optimizing medical transportation, from patient care to billing. The right transport, at the right time, for the right patient. It helps manage medical transport, optimize routes, and track patients in real time.',
            },
            2: {
              description:
                'Telesport is a website for sports enthusiasts, providing a platform to follow sports news, results, and the history of Olympic medals.',
            },
            3: {
              description:
                'An apartment rental API for private individuals, allowing users to register, log in, search, book, publish, and manage rental listings.',
            },
            4: {
              description:
                'Implementation of back-end and front-end tests for a yoga application to verify functionality and ensure code quality.',
            },
            5: {
              description:
                'MDD is a social network designed to help developers looking for work. It connects professionals and encourages networking and collaboration between peers with shared interests.',
            },
            6: {
              description:
                'Bob App is an application that delivers new jokes every day. A CI/CD workflow was implemented to automate development and deployment using tools such as GitHub Actions, SonarQube, and Docker.',
            },
            7: {
              description:
                'A proof of concept for a multi-country car rental application. The goal is to centralize existing systems on a single platform, provide modern and responsive customer service, and improve user experience and operational efficiency.',
            },
            8: {
              description:
                'SportSee is a sports coaching startup developing a new version of its user profile page, enabling users to track completed workout sessions and calories burned.',
            },
            9: {
              description:
                'Development of a React application with reusable components and React Router routes, based on responsive Figma mockups, for a peer-to-peer apartment rental website.',
            },
            10: {
              description:
                'This project involves helping a new bank, Argent Bank, establish itself in the banking sector by developing its application.',
            },
            11: {
              description:
                'After publishing cookbooks for several years, the company decided to develop its own recipe website, similar to Marmiton or 750g.',
            },
            12: {
              description:
                'FishEye is a website that allows independent photographers to showcase their best work. Following a funding round, the company wants to modernize its website.',
            },
            13: {
              description:
                'Development of a mobile-first website showcasing menus from gourmet restaurants.',
            },
            14: {
              description:
                'HRnet manages employee records for WealthHealth. The company wants to migrate its application to React and replace existing jQuery plugins with reusable components.',
            },
          },
        },
        form: {
          prenom: 'First Name',
          name: 'Last Name',
          email: 'Email',
          message: 'Message',
          yourMessage: 'Your Message',
          submit: 'Submit',
          success: 'Message sent!',
          messageSuccess:
            'Thank you for your message. I will respond to you as soon as possible.',
          error: 'Send Error',
          messageError: 'An error occurred. Please try again later.',
          invalid: 'Incomplete Form',
          messageInvalid: 'Please check the fields before submitting.',
          emailInvalid: 'Please enter a valid email address.',
          minimumInvalid:
            'Please fill in this field with at least 2 characters.',
          minimumMessageInvalid:
            'Please fill in this field with at least 20 characters.',
          ok: 'OK',
        },
        cv: {
          labels: {
            close: 'Close',
            skills: 'Skills',
            experiences: 'Experience',
            projects: 'Projects',
            education: 'Education',
            github: 'GitHub',
          },

          pdf: {
            href: '/cv-abdourrahman-farkhsi-en.pdf',
            filename: 'CV-Abdourrahman-Farkhsi-EN.pdf',
            label: 'Download my resume',
          },

          name: 'Abdourrahman Farkhsi',
          availability: 'Available immediately',
          headline:
            'Full-Stack Developer Java / Spring • Angular • React • Python • Flutter',
          intro:
            "Junior Full-Stack Developer, graduate of OpenClassrooms (RNCP Level 7 title, Master's level), with 12 months of work-study experience (alternance) at Paramedic Technologies, in a team of about 10 developers. I delivered about 60 web and mobile tickets (Flutter, React, Python), each one tested (Pytest, Playwright, Patrol), for a platform used by thousands of professionals. I also build secure REST APIs (Java, Spring Boot, JWT) and Angular and React interfaces. A former administrative and accounting manager (who also ran the IT function of the EIAPIC association), I bring analytical rigor and business sense that are valuable in fintech, banking, insurance and management. Since the end of my work-study placement, I have volunteered on the technical design and architecture of the digital overhaul of the SIGMA F association. I am looking for a junior Full-Stack Developer position within a product team.",
          skills: [
            {
              title: 'Back-end',
              items: [
                'Java',
                'Spring Boot',
                'REST APIs',
                'Spring Security / JWT',
                'Python',
                'SQL / MySQL',
                'MongoDB',
              ],
            },
            {
              title: 'Front-end',
              items: [
                'JavaScript',
                'TypeScript',
                'ReactJS – Redux.js',
                'Angular',
                'HTML / CSS',
                'Sass',
                'Bootstrap',
              ],
            },
            {
              title: 'Mobile',
              items: ['Flutter (Android Studio)', 'Dart'],
            },
            {
              title: 'Testing & quality',
              items: [
                'JUnit / Mockito',
                'Jest / Jasmine',
                'Pytest',
                'Behave (BDD, Gherkin)',
                'Cypress',
                'Playwright',
                'Patrol (Flutter)',
              ],
            },
            {
              title: 'Tools & DevOps',
              items: [
                'Docker',
                'Git / GitHub / GitLab',
                'Swagger / OpenAPI',
                'SonarQube',
                'Claude Code (AI-assisted development)',
              ],
            },
            {
              title: 'Languages',
              items: [
                'Arabic & French (native)',
                'English & Spanish (advanced)',
              ],
            },
          ],

          experiences: [
            {
              role: 'Technical Design of a Digital Project — SIGMA F Association (volunteer)',
              meta: 'Volunteer work • Since May 2026',
              description:
                'Education association (baccalaureate exam preparation) whose aging digital tools need to be rebuilt.',
              bullets: [
                "Technical and architectural design of the association's future digital platform, before any development starts",
                "Analysis of the project's upcoming challenges (scalability, maintainability, security, deployment platforms)",
                'Worked in a team of 3 on the technical and budget aspects',
              ],
            },
            {
              role: 'Full-Stack Web & Mobile Developer (work-study)',
              meta: 'PARAMEDIC Technologies • Paris (75), France • March 2025 to March 2026',
              stack:
                'Flutter • Dart • ReactJS • Redux • JavaScript • HTML • CSS • Python • Pytest • Playwright • Behave • Patrol',
              description:
                'Platform for managing and optimizing medical patient transport, from patient intake to billing, with real-time patient tracking. The mobile application is used by hundreds of professionals (dispatchers, ambulance companies, drivers) and the SaaS web application by thousands of professionals of all profiles.',
              bullets: [
                'Delivered about 60 tickets in 12 months, mostly large features of 3 to 10 days each, within a team of about 10 developers',
                'Built new modules from scratch on both the mobile app (Flutter) and the web app, front end and back end: stretcher-bearer (patient transfer) and patient order modules',
                'Rebuilt the new version of the mobile application (Flutter / Android Studio) as part of the team',
                'Designed the associated data models and database tables',
                'Systematically tested every feature developed: Pytest, Behave, Playwright (web end-to-end), Patrol (Flutter)',
                'Diagnosed issues, created tickets and fixed bugs',
              ],
            },
            {
              role: 'Administrative and Accounting Manager',
              meta: 'EIAPIC Association • Mantes-la-Jolie (78), France • February 2020 to May 2022',
              bullets: [
                "Developed and ran the association's IT function: set up digital tools for internal and external collaboration and file sharing",
                'Digitized data and several processes to make remote work practical and efficient',
                "Maintained the user platforms used to record data related to the association's activity, and managed the IT equipment",
                'Handled financial management and cash flow, account monitoring and control, accounting closings and preparation of documents for the external accountant, and set up cost accounting',
                'Managed payroll and contracts (fixed-term, special contracts, Civic Service accreditations) as well as accounting and cross-functional projects',
              ],
            },
          ],

          projects: [
            {
              title: 'ChaTop API',
              stack:
                'Java • Spring Boot • Spring Security • JWT • MySQL • Swagger',
              github: 'https://github.com/afarkhsi/Cha-Top',
              description:
                'Peer-to-peer apartment rental API: users can sign up, log in, search, book, publish and manage their rentals.',
              bullets: [
                'Designed a REST API with a layered architecture',
                'Secure authentication with JWT',
                'Image storage and data validation before processing',
                'Interactive API documentation with Swagger UI',
              ],
            },
            {
              title: 'MDD (Monde De Dév)',
              stack: 'Angular • Sass • Java • Spring Boot • MySQL',
              github: 'https://github.com/afarkhsi/MDD-Fullstack-project',
              description:
                'Social network that helps job-seeking developers connect and collaborate with peers who share the same interests.',
              bullets: [
                'JWT authentication, profile management, data validation',
                'Topic subscriptions, article creation and comment publishing',
                'Database modeling (MySQL)',
              ],
            },
            {
              title: 'ArgentBank',
              stack: 'ReactJS • Redux • JavaScript • HTML • CSS • MongoDB',
              github: 'https://github.com/afarkhsi/ArgentBank',
              description:
                'Web application for a neobank that needs help building its application.',
              bullets: [
                'Built the complete, responsive web application with React',
                'Global state management with Redux',
                'Specified the API endpoints needed for a future evolution (Swagger)',
              ],
            },
          ],

          otherProjects: 'Other projects: see portfolio',

          education: [
            {
              title:
                "Expert in Software Development (RNCP Level 7, Master's level, bac+5) - Full-Stack Developer, Java and Angular",
              meta: 'OpenClassrooms (75) • 2024 to 2026',
            },
            {
              title:
                "Professional certification (bac+3/4, Bachelor's level) - Software Designer and Developer, JavaScript React",
              meta: 'OpenClassrooms (75) • 2022 to 2024',
            },
            {
              title:
                'Master 1 & 2 in Economics and Management, Financial Risk Management track',
              meta: 'Université Paris-Est Créteil (94), France • 2017 to 2019',
            },
          ],
        },
      },
    },
  },
});

export default i18n;
