import { DemoType, PlatformType } from '../types/enums';
import { lolChampion } from './url';

export const skills = [
  { id: 'drawing', title: 'Design', skillList: ['Suite Adobe', 'Canva', 'Figma'] },
  {
    id: 'react',
    title: 'Front end',
    skillList: ['HTML - CSS', 'Javascript', 'React', 'Typescript', 'Redux', 'Material UI'],
  },
  { id: 'expo', title: 'Mobile', skillList: ['React Native', 'Typescript', 'Expo', 'EAS'] },
  {
    id: 'computer',
    title: 'Outils',
    skillList: ['Git - Gitlab', 'Docker', 'Vs Code', 'Android Studio', 'XCode', 'Trello'],
  },
];

export const projects = [
  {
    id: 'champsApp',
    description: 'Application mobile de streaming sportif, avec affichage de stats poussées',
    backgroundImage: 'champsApp.jpg',
    stack: ['React Native', 'Typescript', 'React Query', 'Expo', 'Eas'],
    features: [
      'Création et gestion de compte',
      'Liste et carousel de compétitions',
      'Champs de recherche',
      'Lecture de vidéos live',
      'Affichage du chrono, du score, et diverses stats en temps réél',
    ],
    demos: [
      {
        src: 'app_general_cut.webm',
        name: "Demonstration de l'accueil et d'un live de football",
        type: DemoType.Video,
        platform: PlatformType.MobilePortrait,
      },
      {
        src: 'app_velo.webm',
        name: "Demonstration d'un live de vélo",
        type: DemoType.Video,
        platform: PlatformType.MobilePortrait,
      },
      {
        src: 'app_volley.webm',
        name: "Demonstration d'un live de volley en paysage",
        type: DemoType.Video,
        platform: PlatformType.MobileLandscape,
      },
      {
        src: 'appAccueil.png',
        name: "Liste des compétitions sur l'écran d'accueil",
        type: DemoType.Image,
        platform: PlatformType.MobilePortrait,
      },
      {
        src: 'demoMatchs.png',
        name: 'Menu avec la liste des matchs de démo',
        type: DemoType.Image,
        platform: PlatformType.MobilePortrait,
      },
      {
        src: 'basketLive.png',
        name: "Live d'un match de basket avec stats",
        type: DemoType.Image,
        platform: PlatformType.MobilePortrait,
      },
      {
        src: 'fullscreenBasket.png',
        name: "Live d'un match en plein ecran",
        type: DemoType.Image,
        platform: PlatformType.MobileLandscape,
      },
      {
        src: 'footLive.png',
        name: "Live d'un match de foot avec stats",
        type: DemoType.Image,
        platform: PlatformType.MobilePortrait,
      },
      {
        src: 'coureursLive.png',
        name: "Live d'une course avec liste des coureurs",
        type: DemoType.Image,
        platform: PlatformType.MobilePortrait,
      },
      {
        src: 'courseLive.png',
        name: "Live d'une course avec le tracé",
        type: DemoType.Image,
        platform: PlatformType.MobilePortrait,
      },
    ],
  },
  {
    id: 'champsPub',
    description: 'Site web de vente de publicités pour les sponsors',
    logo: 'logoRegie.png',
    backgroundImage: 'ImagePublic.jpg',
    stack: ['React', 'Typescript', 'Redux'],
    features: [
      'Création et gestion de compte',
      'Parcours de création de publicités',
      'Preview du rendu graphique en direct',
      'Panier',
      'Paiement',
      'Résumé de la campagne en cours ou terminée',
      'Facturation',
    ],
    demos: [
      {
        src: 'regie.webm',
        name: 'Demonstration de la régie',
        type: DemoType.Video,
        platform: PlatformType.Desktop,
      },
      {
        src: 'regieAccueil.jpg',
        name: "Page d'accueil de la régie : login or signin",
        type: DemoType.Image,
        platform: PlatformType.Desktop,
      },
      {
        src: 'creation.jpg',
        name: "Création d'une campagne",
        type: DemoType.Image,
        platform: PlatformType.Desktop,
      },
      {
        src: 'params.jpg',
        name: "Preview de l'emplacement de la publicité",
        type: DemoType.Image,
        platform: PlatformType.Desktop,
      },
      {
        src: 'diffusion.jpg',
        name: 'Paramètrage de la campagne',
        type: DemoType.Image,
        platform: PlatformType.Desktop,
      },
      {
        src: 'campagne_en_cours.jpg',
        name: "Résumé d'une campagne",
        type: DemoType.Image,
        platform: PlatformType.Desktop,
      },
    ],
  },
  {
    id: 'champsPartenaire',
    description: "Site web d'administration des clubs : programmation des diffusions, gestion des équipes et membres",
    logo: 'logoChamps.png',
    backgroundImage: 'ImagePublic-Claire.jpg',
    stack: ['React', 'Typescript', 'Redux', 'Mui', 'Yup', 'Formik'],
    features: [
      'Création et gestion de compte',
      "Création et gestion d'équipes et de leurs membres",
      'Programmation de diffusion live',
      'Dashboard résumant les gains et les spectateurs',
      'Facturation',
    ],
    demos: [
      {
        src: 'portail.webm',
        name: 'Démonstration du portail partenaire',
        type: DemoType.Video,
        platform: PlatformType.Desktop,
      },
      {
        src: 'dashboard.jpg',
        name: 'Résumé des lives',
        type: DemoType.Image,
        platform: PlatformType.Desktop,
      },
      {
        src: 'compet.jpg',
        name: 'Liste des compétitions',
        type: DemoType.Image,
        platform: PlatformType.Desktop,
      },
      {
        src: 'empty.jpg',
        name: 'Exemple de catégorie vide',
        type: DemoType.Image,
        platform: PlatformType.Desktop,
      },
    ],
  },
  {
    id: 'lolChampions',
    description: 'Site web permettant de trouver des informations sur les champions de League of Legends',
    logo: 'leagueIcon.png',
    backgroundImage: 'summonerRift.jpg',
    stack: ['React', 'Typescript', 'React Context'],
    features: [
      'Champs de recherche',
      'Filtre des champions par nom ou difficulté',
      'Carousel de skins du champion sélectionné',
      'Description du champion selectionné et de ses capacités',
      'Lien vers des guides dédiés',
    ],
    demos: [
      { src: 'league.jpg', name: "Page d'accueil", type: DemoType.Image, platform: PlatformType.Desktop },
      { src: 'morgana.jpg', name: 'Exemple de page de champion', type: DemoType.Image, platform: PlatformType.Desktop },
    ],
    url: lolChampion,
  },
];
