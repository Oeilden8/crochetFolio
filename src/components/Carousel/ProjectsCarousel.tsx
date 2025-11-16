import { useEffect, useState } from 'react';
import './ProjectsCarousel.css';
import { getMediaUrl } from '../../utils/formatter';
import { DemoType, PlatformType } from '../../types/enums';

import ArrowLeft from '../../assets/icons/arrowLeft.svg?react';
import loading from '../../assets/icons/loading-buffer.gif';

interface Demo {
  name: string;
  src: string;
  type: DemoType;
  platform: PlatformType;
}

const ProjectsCarousel = (props: { demos: Demo[]; projectId: string }) => {
  const demos = props.demos;

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isMediaLoaded, setIsMediaLoaded] = useState<boolean>(false);

  useEffect(() => {
    if (props.projectId) {
      setCurrentIndex(0);
      setIsMediaLoaded(false);
    }
  }, [props.projectId]);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? demos.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === demos.length - 1 ? 0 : prevIndex + 1));
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  const handleDemoDisplay = (demo: Demo) => {
    if (demo.type === DemoType.Image) {
      if (demo.platform === PlatformType.Desktop) {
        return (
          <img
            key={demo.src}
            src={getMediaUrl(`../assets/projects/images/${demo.src}`)}
            alt={demo.name}
            className='imageCarousel'
            onLoad={() => setIsMediaLoaded(true)}
          />
        );
      } else {
        return (
          <div
            key={demo.src}
            className={demo.platform === PlatformType.MobilePortrait ? 'phoneBackground' : 'phoneBackground landscape'}
          >
            <img
              src={getMediaUrl(`../assets/projects/images/${demo.src}`)}
              alt={demo.name}
              className={demo.platform === PlatformType.MobilePortrait ? 'phone' : 'phoneLandscape'}
              onLoad={() => setIsMediaLoaded(true)}
            />
          </div>
        );
      }
    } else {
      if (demo.platform === PlatformType.Desktop) {
        return (
          <video controls key={demo.src} className='imageCarousel'>
            <source
              src={getMediaUrl(`../assets/projects/videos/${demo.src}`)}
              type='video/webm'
              onLoad={() => setIsMediaLoaded(true)}
            />
          </video>
        );
      } else {
        return (
          <div
            key={demo.src}
            className={demo.platform === PlatformType.MobilePortrait ? 'phoneBackground' : 'phoneBackground landscape'}
          >
            <video
              controls
              key={demo.src}
              className={demo.platform === PlatformType.MobilePortrait ? 'phone' : 'phoneLandscape'}
            >
              <source
                src={getMediaUrl(`../assets/projects/videos/${demo.src}`)}
                type='video/webm'
                onLoad={() => setIsMediaLoaded(true)}
              />
            </video>
          </div>
        );
      }
    }
  };

  return (
    <>
      {!isMediaLoaded && (
        <div style={{ textAlign: 'center', padding: '20px' }}>
          <img src={loading} alt='icon indicating loading' width={50} />
        </div>
      )}

      <div className='navMobile'>
        <button onClick={goToPrevious} className='navButton'>
          <ArrowLeft className='arrow' />
        </button>
        <p className='demoName'>{currentIndex === 0 ? demos[0].name : demos[currentIndex]?.name}</p>
        <button onClick={goToNext} className='navButton'>
          <ArrowLeft className='arrow arrowRight' />
        </button>
      </div>

      <div className='carouselContainer'>
        <button onClick={goToPrevious} className='navButton'>
          <ArrowLeft className='arrow' />
        </button>
        <article className='carousel'>
          <div
            className='imageContainer'
            style={{
              width: `${demos.length * 100}%`,
              transform: `translateX(-${(currentIndex * 100) / demos.length}%)`,
            }}
          >
            {demos.map((demo) => handleDemoDisplay(demo))}
          </div>
        </article>
        <button onClick={goToNext} className='navButton'>
          <ArrowLeft className='arrow arrowRight' />
        </button>
      </div>

      <article className='dotsContainer'>
        <div className='dots'>
          {demos.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={index === currentIndex ? 'dot dotActive' : 'dot dotInactive'}
            />
          ))}
        </div>
      </article>
    </>
  );
};

export default ProjectsCarousel;
