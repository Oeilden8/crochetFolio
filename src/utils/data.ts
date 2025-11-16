import { DemoType, PlatformType } from '../types/enums';
import { lolChampion } from './url';

import appBG from '../assets/images/champsApp.jpg';
import regieBG from '../assets/images/ImagePublic.jpg';
import regieLogo from '../assets/images/logoRegie.png';
import champsLogo from '../assets/images/logoChamps.png';
import portailBG from '../assets/images/ImagePublic-Claire.jpg';
import logoLol from '../assets/images/leagueIcon.png';
import lolBG from '../assets/images/summonerRift.jpg';

import appAccueil from '../assets/projects/images/appAccueil.png';
import basketLive from '../assets/projects/images/basketLive.png';
import coureursLive from '../assets/projects/images/coureursLive.png';
import courseLive from '../assets/projects/images/courseLive.png';
import demoMatchs from '../assets/projects/images/demoMatchs.png';
import footLive from '../assets/projects/images/footLive.png';
import fullscreenBasket from '../assets/projects/images/fullscreenBasket.png';
import appVideo from '../assets/projects/videos/app_general_cut.webm';
import veloVideo from '../assets/projects/videos/app_velo.webm';
import volleyVideo from '../assets/projects/videos/app_volley.webm';

import regieAccueil from '../assets/projects/images/regieAccueil.jpg';
import creation from '../assets/projects/images/creation.jpg';
import campagne from '../assets/projects/images/campagne_en_cours.jpg';
import params from '../assets/projects/images/params.jpg';
import diffusion from '../assets/projects/images/diffusion.jpg';
import regieVideo from '../assets/projects/videos/regie.webm';

import dashboard from '../assets/projects/images/dashboard.jpg';
import compet from '../assets/projects/images/compet.jpg';
import empty from '../assets/projects/images/empty.jpg';
import portailVideo from '../assets/projects/videos/portail.webm';

import league from '../assets/projects/images/league.jpg';
import champion from '../assets/projects/images/morgana.jpg';

import bonnet from '../assets/crochet/BonnetTotoro.jpg';
import chaussons from '../assets/crochet/ChaussonsTotoro.jpg';
import coulemelle from '../assets/crochet/Coulemelle.jpg';
import dangoCats from '../assets/crochet/DangoCats.jpg';
import dracaufeu from '../assets/crochet/Dracaufeu.jpg';
import eliott from '../assets/crochet/EliotDragon.jpg';
import falkor from '../assets/crochet/Falkor.jpg';
import groot from '../assets/crochet/Groot.jpg';
import haku from '../assets/crochet/Haku.jpg';
import selenien from '../assets/crochet/Moonkin.jpg';
import morille from '../assets/crochet/Morille.jpg';
import panda from '../assets/crochet/Panda.jpg';
import racoon from '../assets/crochet/PinkRacoon.jpg';
import mobile from '../assets/crochet/PokeMobile.jpg';
import pokemons from '../assets/crochet/Pokemons.jpg';
import panier from '../assets/crochet/PokePanier.jpg';
import ronflex from '../assets/crochet/Ronflex.jpg';
import sac from '../assets/crochet/Sac.jpg';
import stormtrooper from '../assets/crochet/StormTrooper.jpg';
import teemo from '../assets/crochet/Teemo.jpg';
import totoro from '../assets/crochet/Totoro.jpg';

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
    backgroundImage: appBG,
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
        src: appVideo,
        name: "Demonstration vidéo de l'accueil et d'un live de football",
        type: DemoType.Video,
        platform: PlatformType.MobilePortrait,
      },
      {
        src: veloVideo,
        name: "Demonstration vidéo d'un live de vélo",
        type: DemoType.Video,
        platform: PlatformType.MobilePortrait,
      },
      {
        src: volleyVideo,
        name: "Demonstration vidéo d'un live de volley en paysage",
        type: DemoType.Video,
        platform: PlatformType.MobileLandscape,
      },
      {
        src: appAccueil,
        name: "Liste des compétitions sur l'écran d'accueil",
        type: DemoType.Image,
        platform: PlatformType.MobilePortrait,
      },
      {
        src: demoMatchs,
        name: 'Menu avec la liste des matchs de démo',
        type: DemoType.Image,
        platform: PlatformType.MobilePortrait,
      },
      {
        src: basketLive,
        name: "Live d'un match de basket avec stats",
        type: DemoType.Image,
        platform: PlatformType.MobilePortrait,
      },
      {
        src: fullscreenBasket,
        name: "Live d'un match en plein ecran",
        type: DemoType.Image,
        platform: PlatformType.MobileLandscape,
      },
      {
        src: footLive,
        name: "Live d'un match de foot avec stats",
        type: DemoType.Image,
        platform: PlatformType.MobilePortrait,
      },
      {
        src: coureursLive,
        name: "Live d'une course avec liste des coureurs",
        type: DemoType.Image,
        platform: PlatformType.MobilePortrait,
      },
      {
        src: courseLive,
        name: "Live d'une course avec le tracé",
        type: DemoType.Image,
        platform: PlatformType.MobilePortrait,
      },
    ],
  },
  {
    id: 'champsPub',
    description: 'Site web de vente de publicités pour les sponsors',
    logo: regieLogo,
    backgroundImage: regieBG,
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
        src: regieVideo,
        name: 'Demonstration vidéo de la régie',
        type: DemoType.Video,
        platform: PlatformType.Desktop,
      },
      {
        src: regieAccueil,
        name: "Page d'accueil de la régie : login or signin",
        type: DemoType.Image,
        platform: PlatformType.Desktop,
      },
      {
        src: creation,
        name: "Création d'une campagne",
        type: DemoType.Image,
        platform: PlatformType.Desktop,
      },
      {
        src: params,
        name: "Preview de l'emplacement de la publicité",
        type: DemoType.Image,
        platform: PlatformType.Desktop,
      },
      {
        src: diffusion,
        name: 'Paramètrage de la campagne',
        type: DemoType.Image,
        platform: PlatformType.Desktop,
      },
      {
        src: campagne,
        name: "Résumé d'une campagne",
        type: DemoType.Image,
        platform: PlatformType.Desktop,
      },
    ],
  },
  {
    id: 'champsPartenaire',
    description: "Site web d'administration des clubs : programmation des diffusions, gestion des équipes et membres",
    logo: champsLogo,
    backgroundImage: portailBG,
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
        src: portailVideo,
        name: 'Démonstration vidéo du portail partenaire',
        type: DemoType.Video,
        platform: PlatformType.Desktop,
      },
      {
        src: dashboard,
        name: 'Résumé des lives',
        type: DemoType.Image,
        platform: PlatformType.Desktop,
      },
      {
        src: compet,
        name: 'Liste des compétitions',
        type: DemoType.Image,
        platform: PlatformType.Desktop,
      },
      {
        src: empty,
        name: 'Exemple de catégorie vide',
        type: DemoType.Image,
        platform: PlatformType.Desktop,
      },
    ],
  },
  {
    id: 'lolChampions',
    description: 'Site web permettant de trouver des informations sur les champions de League of Legends',
    logo: logoLol,
    backgroundImage: lolBG,
    stack: ['React', 'Typescript', 'React Context'],
    features: [
      'Champs de recherche',
      'Filtre des champions par nom ou difficulté',
      'Carousel de skins du champion sélectionné',
      'Description du champion selectionné et de ses capacités',
      'Lien vers des guides dédiés',
    ],
    demos: [
      { src: league, name: "Page d'accueil", type: DemoType.Image, platform: PlatformType.Desktop },
      { src: champion, name: 'Exemple de page de champion', type: DemoType.Image, platform: PlatformType.Desktop },
    ],
    url: lolChampion,
  },
];

export const crochet = [
  { src: haku, name: 'Haku du voyage de Chihiro' },
  { src: totoro, name: 'Méga Totoro' },
  { src: bonnet, name: 'Bonnet Totoro pour enfant' },
  { src: chaussons, name: 'Chaussons Totoro pour bébé' },

  { src: teemo, name: 'Teemo de League of Legends' },
  { src: dangoCats, name: 'Chats Dango de Teamfight Tactics' },
  { src: selenien, name: 'Sélénien elfe de World of Warcraft' },

  { src: dracaufeu, name: 'Dracaufeu' },
  { src: pokemons, name: 'Chibi pokemons' },
  { src: panier, name: 'Panier pokeball' },
  { src: ronflex, name: 'Pokemon Ronflex' },
  { src: mobile, name: 'Mobile pokemon pour bébé' },

  { src: sac, name: 'Sac en crochet' },
  { src: morille, name: 'Champignon Morille' },
  { src: coulemelle, name: 'Champignon Coulemelle' },
  { src: eliott, name: 'Eliott le dragon' },
  { src: falkor, name: "Falkor de l'histoire sans fin" },
  { src: panda, name: 'Panda' },
  { src: racoon, name: 'Raton laveur rose' },
  { src: stormtrooper, name: 'StormTrooper' },
  { src: groot, name: "Je s'apelle Groot" },
];
