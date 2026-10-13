import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const savedLanguage = localStorage.getItem('language') || 'fr';

i18n.use(initReactI18next).init({
  lng: savedLanguage,
  fallbackLng: 'fr',
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
      },
    },
  },
});

export default i18n;
