import { useEffect, useRef, useState } from 'react';
import './Home.css';

import codingCrochet from '../../assets/images/coding crochet sans balle.png';
import MapIcon from '../../assets/icons/map.svg?react';
import MailIcon from '../../assets/icons/mail.svg?react';
import GithubIcon from '../../assets/icons/github.svg?react';
import LinkedinIcon from '../../assets/icons/linkedin.svg?react';
import CvIcon from '../../assets/icons/cv.svg?react';
import CV from '../../assets/cv Lagadec React et Mobile.pdf';

import { github, linkedin, myEmail } from '../../utils/url';
import { purple } from '../../utils/colors';
import { crochet, projects, skills } from '../../utils/data';

import Check from '../../components/Check/Check';
import RollingBall from '../../components/rollingBall/RollingBall';
import SkillCard from '../../components/SkillCard/SkillCard';
import ProjectCard from '../../components/projectCards/ProjectCard';
import ProjectsCarousel from '../../components/Carousel/ProjectsCarousel';
import ScrollTopButton from '../../components/ScrollTopButton/ScrollTopButton';
import GeneralModal from '../../components/Modals/GeneralModal';

function Home() {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string>(projects[0].id);
  const [showScrollButton, setShowScrollButton] = useState<boolean>(false);
  const [isCrochetModalOpen, setIsCrochetModalOpen] = useState<boolean>(false);
  const [selectedCrochetImage, setSelectedCrochetImage] = useState<string>('');

  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLElement | null>(null);
  const crochetRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScrollButtonDisplay = () => {
      window.pageYOffset > 300 ? setShowScrollButton(true) : setShowScrollButton(false);
    };

    window.addEventListener('scroll', handleScrollButtonDisplay);

    return () => {
      window.removeEventListener('scroll', handleScrollButtonDisplay);
    };
  }, []);

  const copyMailToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(myEmail);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const selectedProject = projects.find((project) => project.id === selectedProjectId);

  return (
    <div className='mainContainer'>
      {showScrollButton && <ScrollTopButton />}

      <div className='homeContainer'>
        <nav className='navContainer'>
          <button
            type='button'
            onClick={() =>
              skillsRef.current?.scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
            Skills
          </button>
          <button
            type='button'
            onClick={() =>
              projectsRef.current?.scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
            Projets
          </button>
          <button
            type='button'
            onClick={() =>
              crochetRef.current?.scrollIntoView({
                behavior: 'smooth',
              })
            }
          >
            Crochet
          </button>
          {/* <button type='button'>FR</button>
          <button type='button'>EN</button> */}
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
              <a className='contactIcon tooltip' href={CV} target='blank'>
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

      <div className='skillsTitle' ref={skillsRef}>
        <h1>Skills</h1>
      </div>
      <div>
        <SkillCard skills={skills} />
      </div>

      <section ref={projectsRef} className='projectContainer'>
        <h1>Projets</h1>

        <ProjectCard projects={projects} onSelectedProject={setSelectedProjectId} selectedProject={selectedProjectId} />

        <div className='separator' />
        <div className='stack'>
          {selectedProject?.stack.map((tech) => (
            <p key={tech}>{tech}</p>
          ))}
        </div>

        {selectedProject?.url && (
          <a className='visitButton' href={selectedProject.url} target='blank' rel='noreferrer'>
            Visiter le site
          </a>
        )}

        {selectedProject && <ProjectsCarousel demos={selectedProject.demos} projectId={selectedProjectId} />}
      </section>

      <div className='crochetTitle' ref={crochetRef}>
        <h1>Projets en crochet</h1>
      </div>

      <section className='crochetContainer'>
        {isCrochetModalOpen && selectedCrochetImage && (
          <GeneralModal setIsOpen={setIsCrochetModalOpen}>
            <img src={selectedCrochetImage} alt={"zoom sur l'image selectionnée"} className='imageCrochetFull' />
          </GeneralModal>
        )}

        {crochet.map((craft) => (
          <button
            key={craft.src}
            className='crochetCard'
            style={{
              backgroundImage: `url(${craft.src})`,
            }}
            onClick={() => {
              setSelectedCrochetImage(craft.src);
              setIsCrochetModalOpen(true);
            }}
          >
            {craft.name}
          </button>
        ))}
      </section>
    </div>
  );
}

export default Home;
