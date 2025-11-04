import { useState } from 'react';
import './Home.css';

import codingCrochet from '../../assets/images/coding crochet sans balle.png';
import MapIcon from '../../assets/icons/map.svg?react';
import MailIcon from '../../assets/icons/mail.svg?react';
import GithubIcon from '../../assets/icons/github.svg?react';
import LinkedinIcon from '../../assets/icons/linkedin.svg?react';
import CvIcon from '../../assets/icons/cv.svg?react';

import { github, linkedin, myEmail } from '../../utils/url';
import { purple } from '../../utils/colors';
import { skills } from '../../utils/skills';

import Check from '../../components/Check/Check';
import RollingBall from '../../components/rollingBall/RollingBall';
import SkillCard from '../../components/SkillCard/SkillCard';

function Home() {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyMailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(myEmail);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className='mainContainer'>
      <div className='homeContainer'>
        <nav className='navContainer'>
          <button type='button'>Accueil</button>
          <button type='button'>Skills</button>
          <button type='button'>Réalisations</button>
          <button type='button'>FR</button>
          <button type='button'>EN</button>
        </nav>
        <div className='infoContainer'>
          <section className='contactContainer'>
            <div className='myInfo'>
              <div className='avatar' />
              <h1 style={{ margin: 0 }}>Fanny Lagadec</h1>
              <div className='localisation'>
                <MapIcon height={35} fill={purple} />
                <p>Paris, Chartres ou Remote</p>
              </div>
            </div>

            <div className='iconContainer'>
              <button className='contactIcon tooltip' onClick={copyMailToClipboard}>
                {isCopied ? <Check size={'40px'} /> : <MailIcon height={40} />}
                <span className='tooltipText'>Copier</span>
              </button>
              <a className='contactIcon' href={github} target='blank' rel='noreferrer'>
                <GithubIcon height={40} />
              </a>
              <a className='contactIcon' href={linkedin} target='blank' rel='noreferrer'>
                <LinkedinIcon height={40} />
              </a>
              <a className='contactIcon tooltip' href='src\assets\cv Lagadec React et Mobile.pdf'>
                <CvIcon height={40} />
                <span className='tooltipText'>Télécharger</span>
              </a>
            </div>
          </section>
          <section className='prezContainer'>
            <img src={codingCrochet} alt='illustration of person crochetting code' className='codingCrochet' />
            <div>
              <article className='prez'>
                <h1>Développeuse Front end</h1>
                <p className='crochetPrez'>
                  <span className='ribbonHighlight'> Bienvenue sur mon portfolio !</span> J’ai décidé d’en faire un qui
                  me ressemble. Je trouve ça marrant d’utiliser un thème sur le crochet, parce qu’en anglais ça se dit
                  &quot;hook&quot;, et je code en React en utilisant ... des hooks ! <br />
                  <br />
                  Je pense aussi que ma façon de crochetter est proche de ma façon de coder. Avant de commencer un
                  nouveau projet, je vais faire des recherches sur les patrons existants, les types de mailles, et
                  comment je peux m’approcher au plus prêt de la demande de mon client. <br />
                  Ensuite je vais commencer par faire des petits composants que j’assemblerai à la fin, comme une patte,
                  une aile ou une queue. Parfois ça ne va pas marcher et je vais devoir adapter, et je n’ai pas peur de
                  devoir défaire mon travail ou de recommencer à zéro.
                </p>
                <p className='devPrez'>
                  Ce que je préfère dans le développement, c’est résoudre des problèmes et proposer des solutions
                  adaptées, apprendre de nouvelles choses et travailler avec des équipes différentes. <br />
                  J’aime aussi développer de belles interfaces, pensées pour l’utilisateur.
                </p>
              </article>
              <RollingBall />
            </div>
          </section>
        </div>
      </div>

      <SkillCard skills={skills} />
    </div>
  );
}

export default Home;
