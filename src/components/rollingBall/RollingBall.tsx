import './RollingBall.css';
import yarnBall from '../../assets/images/crochetBall.png';
import useWindowDimensions from '../../hooks/useWindowDimensions';

export default function RollingBall() {
  const { width } = useWindowDimensions();

  return (
    <div className='rollingBallContainer' key={width}>
      <img className='rollingBall' src={yarnBall} alt='rolling ball of yarn' />
      <div className='ballShadow' />
      <div className='yarnReveal'>
        <div className='purple' />
      </div>
    </div>
  );
}
