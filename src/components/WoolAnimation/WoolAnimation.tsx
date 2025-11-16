import React, { useState, useEffect } from 'react';
import './WoolAnimation.css';
import thatStitch from '../../assets/images/maille.png';

interface StitchInterface {
  id: string;
  animating: boolean;
}

const WoolUnravelingAnimation = () => {
  const [animationStarted, setAnimationStarted] = useState(false);

  const totalRows = 10;
  const stitchesPerRow = 10;
  const animationDelay = 40;

  const generateInitialStitches = () => {
    const initialStitches = [];
    for (let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
      const row = [];
      for (let stitchIndex = 0; stitchIndex < stitchesPerRow; stitchIndex++) {
        row.push({
          id: `${stitchIndex} - ${rowIndex}`,
          animating: false,
        });
      }
      initialStitches.push(row);
    }
    return initialStitches;
  };

  const [stitches, setStitches] = useState<StitchInterface[][]>(generateInitialStitches());

  useEffect(() => {
    const unravelRow = (rowIndex: number) => {
      const row = stitches[rowIndex];
      if (row) {
        for (let stitchIndex = stitchesPerRow - 1; stitchIndex >= 0; stitchIndex--) {
          const delay =
            rowIndex % 2 ? stitchIndex * animationDelay : (stitchesPerRow - 1 - stitchIndex) * animationDelay;
          setTimeout(() => {
            setStitches((currentStitches) => {
              const updatedStitches = [...currentStitches];
              updatedStitches[rowIndex][stitchIndex] = {
                id: `${stitchIndex} - ${rowIndex}`,
                animating: true,
              };
              return updatedStitches;
            });
          }, delay);
        }
      }
    };

    const startUnraveling = () => {
      if (animationStarted) return;
      setAnimationStarted(true);
      let currentRow = totalRows - 1;

      const unravelNextRow = () => {
        unravelRow(currentRow);
        currentRow--;
        setTimeout(unravelNextRow, stitchesPerRow * animationDelay + 400);
      };

      unravelNextRow();
    };

    const timer = setTimeout(() => {
      startUnraveling();
    }, 500);
    return () => clearTimeout(timer);
  }, [animationStarted, stitches]);

  return (
    <div>
      {/* Overlay de laine */}
      <div className='woolOverlay'>
        {stitches.map((row, rowIndex) => (
          <div key={rowIndex} className='knitRow'>
            {row.map((stitch) => (
              <div key={stitch.id} className={stitch.animating ? 'stitch stitchAnimating' : 'stitch'}>
                <img src={thatStitch} style={{ width: '50px' }} alt={`${stitch.id}`} />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default WoolUnravelingAnimation;
