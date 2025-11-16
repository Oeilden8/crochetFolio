import './ScrollTopButton.css';
import Arrow from '../../assets/icons/arrowLeft.svg?react';

function ScrollTopButton() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <button type='button' className='scrollButton' onClick={handleScrollTop}>
      <Arrow className='scrollArrow' />
    </button>
  );
}

export default ScrollTopButton;
