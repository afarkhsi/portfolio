import Ohmyfood from './../assets/images/website-ohmyfood.png';
import Lespetitsplats from './../assets/images/website-lespetitsplats.png';
import Kasa from './../assets/images/website-kasa.png';
import Argentbank from './../assets/images/website-argentbank.png';
import Sportsee from './../assets/images/website-sportsee.png';
import Fisheye from './../assets/images/website-fisheye.png';
import Hrnet from './../assets/images/website-hrnet.png';
import Telesport from './../assets/images/website-telesport.png';
import ChatopApi from './../assets/images/website-chatop.png';
import NumDev from './../assets/images/website-numdev.png';
import Mdd from './../assets/images/website-mdd.png';
import BobApp from './../assets/images/bobapp.png';
import PocYcyw from './../assets/images/poc-ycyw.png';
import Paramedic from './../assets/images/paramedic.png';
import ReactLogo from './../assets/logo/react-logo.png';
import JsLogo from './../assets/logo/JavaScript-logo.png';
import SassLogo from './../assets/logo/sass.png';
import CssLogo from './../assets/logo/css.png';
import HtmlLogo from './../assets/logo/html.png';
import ReduxLogo from './../assets/logo/redux.png';
import TsLogo from './../assets/logo/ts-logo.png';
import AngularLogo from './../assets/logo/angular-js.png';
import JavaLogo from './../assets/logo/java.jpg';
import PythonLogo from './../assets/logo/python-logo.png';
import FlutterLogo from './../assets/logo/flutter-logo.png';
import MongoLogo from './../assets/logo/mongo-logo.png';
import MysqlLogo from './../assets/logo/mysql-logo.png';
import SpringLogo from './../assets/logo/spring-logo.png';
import DockerLogo from './../assets/logo/docker-logo.png';

const DATA = [
  {
    id: 1,
    image: Paramedic,
    title: 'Paramedic Technologies',
    description: `Paramedic est une plateforme de gestion et d'optimisation des transports sanitaires, de la prise en charge à la facturation. Le bon transport, au bon moment, pour le bon patient. Elle permet de gérer les transports sanitaires, d'optimiser les itinéraires et de suivre les patients en temps réel.`,
    technologie: [
      HtmlLogo,
      JsLogo,
      ReactLogo,
      ReduxLogo,
      PythonLogo,
      MongoLogo,
      FlutterLogo,
    ],
    tags: ['fullstack', 'mobile'],
    link: 'https://www.paramedic.tech/',
  },
  {
    id: 2,
    image: Telesport,
    title: 'Telesport',
    description: `Telesport est un site web dédié aux passionnés de sport, offrant une plateforme pour suivre les actualités, les résultats et l'historique des médailles olympiques.`,
    technologie: [HtmlLogo, SassLogo, AngularLogo],
    tags: ['front-end'],
    link: 'https://github.com/afarkhsi/Telesport',
  },
  {
    id: 3,
    image: ChatopApi,
    title: 'Chatop Api',
    description: `Api de location d'appartements entre particuliers, permettant aux utilisateurs de s'inscrire, se connecter, rechercher, réserver, publier et gérer leurs locations.`,
    technologie: [JavaLogo, SpringLogo, MysqlLogo],
    tags: ['back-end'],
    link: 'https://github.com/afarkhsi/Cha-Top',
  },
  {
    id: 4,
    image: NumDev,
    title: 'NumDev',
    description: `Mise en place de tests back & front sur une application de Yoga, permettant de vérifier le bon fonctionnement des fonctionnalités et d'assurer la qualité du code.`,
    technologie: [AngularLogo, JavaLogo, SpringLogo, MysqlLogo],
    tags: ['fullstack', 'test'],
    link: 'https://github.com/afarkhsi/Testez-une-application-full-stack',
  },
  {
    id: 5,
    image: Mdd,
    title: 'Monde De Dév',
    description: `MDD est un reseaux social pour aider les développeurs qui cherchent un travail. Elle permet de mettre en relation les professionnels en encourageant les liens et la collaboration entre pairs qui ont des intérêts communs.`,
    technologie: [
      HtmlLogo,
      SassLogo,
      TsLogo,
      AngularLogo,
      JavaLogo,
      SpringLogo,
      MysqlLogo,
    ],
    tags: ['fullstack'],
    link: 'https://github.com/afarkhsi/MDD-Fullstack-project',
  },
  {
    id: 6,
    image: BobApp,
    title: 'Bob App',
    description: `Bob App est une application permettant de voir quotidiennement de nouvelles blagues, il a été décidé d'intégrer une démarche CI/CD pour automatiser le processus de développement et de déploiement, en utilisant des outils tels que GitHub Actions, SonarQube et Docker.`,
    technologie: [
      HtmlLogo,
      SassLogo,
      TsLogo,
      AngularLogo,
      JavaLogo,
      SpringLogo,
      DockerLogo,
    ],
    tags: ['fullstack', 'devops'],
    link: 'https://github.com/afarkhsi/Gerez-un-projet-collaboratif-en-int-grant-une-demarche-CI-CD',
  },
  {
    id: 7,
    image: PocYcyw,
    title: 'POC-YCYW',
    description: `POC pour une application de location de voitures multi-pays. Il s'agit de centralisater les systèmes existants en une plateforme unique, founir un service client moderne et réactif, ainsi que de l'améliorer l'experience utilisateur et l'efficacité opérationnelle. 
 `,
    technologie: [
      HtmlLogo,
      SassLogo,
      TsLogo,
      AngularLogo,
      JavaLogo,
      SpringLogo,
    ],
    tags: ['fullstack'],
    link: 'https://github.com/afarkhsi/POC_YCYW_P13',
  },
  {
    id: 8,
    image: Sportsee,
    title: 'SPORTSEE',
    description: `SportSee, une startup dédiée au coaching sportif, veut lancer une nouvelle version de la page profil de l'utilisateur. Cette page va notamment permettre à l'utilisateur de suivre le nombre de sessions réalisées ainsi que le nombre de calories brûlées.`,
    technologie: [HtmlLogo, CssLogo, JsLogo, ReactLogo],
    tags: ['front-end'],
    link: 'https://github.com/afarkhsi/SPORTSEE.git',
  },
  {
    id: 9,
    image: Kasa,
    title: 'KASA',
    description: `Développer une application React, ses composants ainsi que les routes React Router, en suivant les maquettes Figma (responsives) pour un site de location d'appartements entre particuliers.`,
    technologie: [HtmlLogo, CssLogo, JsLogo, ReactLogo],
    tags: ['front-end'],
    link: 'https://github.com/afarkhsi/KASA.git',
  },
  {
    id: 10,
    image: Argentbank,
    title: 'ARGENTBANK',
    description: `Le projet concerne une nouvelle banque qui démarre, Argent Bank, qui essaie de percer dans le secteur et qui a besoin d'aide pour mettre en place son application.`,
    technologie: [HtmlLogo, CssLogo, JsLogo, ReactLogo, ReduxLogo],
    tags: ['front-end'],
    link: 'https://github.com/afarkhsi/ArgentBank.git',
  },
  {
    id: 11,
    image: Lespetitsplats,
    title: 'LES PETITS PLATS',
    description: `Après avoir édité des livres de cuisine pendant plusieurs années, l'entreprise a décidé de se lancer dans un nouveau projet : réaliser son propre site de recettes de cuisine à l'instar de Marmiton ou 750g.`,
    technologie: [HtmlLogo, SassLogo, JsLogo],
    tags: ['front-end'],
    link: 'https://github.com/afarkhsi/les_petits_plats.git',
  },
  {
    id: 12,
    image: Fisheye,
    title: 'FISHEYE',
    description:
      'FishEye est un site web qui permet aux photographes indépendants de présenter leurs meilleurs travaux. Ils ont récemment levé des fonds et aimeraient mettre à jour leur site web.',
    technologie: [HtmlLogo, CssLogo, JsLogo],
    tags: ['front-end'],
    link: 'https://github.com/afarkhsi/Front-End-Fisheye.git',
  },
  {
    id: 13,
    image: Ohmyfood,
    title: 'OHMYFOOD!',
    description: `Développer un site "mobile first" qui répertorie les menus de restaurants gastronomiques.`,
    technologie: [HtmlLogo, SassLogo],
    tags: ['front-end'],
    link: 'https://github.com/afarkhsi/OHMYFOOD.git',
  },
  {
    id: 14,
    image: Hrnet,
    title: 'Hrnet',
    description: `HRnet gère les dossiers des employés de WealthHealth, il ont fait part de leur volonté de convertir le site en React et remplacer les plugin JQuery utilisés par des composants réutilisables.`,
    technologie: [HtmlLogo, CssLogo, JsLogo, TsLogo, ReactLogo, ReduxLogo],
    tags: ['front-end'],
    link: 'https://github.com/afarkhsi/HRnet-WealthHealth.git',
  },
];

export default DATA;
