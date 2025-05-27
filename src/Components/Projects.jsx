import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import WalkingAnimation from './WalkingAnimation';

import ShanghaiPr1 from '../Pictures/ShanghaiPr1.jpg';
import LogoT from '../Pictures/LogoT.png';
import BashameMouse1 from '../Pictures/BashameMouse1.png';
import Partall from '../Pictures/partall.png';
import BashameUnit1 from '../Pictures/BashameUnit1.png';
import FigmaCook from '../Pictures/FigmaCook.png';
import DeerRunner from '../Pictures/DeerRunner.png';
import TwineStory from '../Pictures/TwineStory.png';
import Imdbdatabase2 from '../Pictures/Imdbdatabase2.png';

const projects = [
  { img: ShanghaiPr1, title: 'Shanghai Blog', file: 'ShanghaiBlog.zip' },
  { img: LogoT, title: 'Art Website', file: 'Artweb.zip' },
  { img: BashameMouse1, title: 'Bashame Clicker', file: 'BashameClicker.zip' },
  { img: Partall, title: 'Odd or Even', file: 'Odd or Even.zip' },
  { img: BashameUnit1, title: 'Bashame Units', file: 'BashameUnit.zip' },
  { img: FigmaCook, title: 'Figma Cooking App', file: 'FigmaCook.zip' },
  { img: DeerRunner, title: 'Deer Girl Runner', file: 'DeerRunner.zip', isGame: true },
  { img: TwineStory, title: 'Twine Story', file: 'TwineStory.zip' },
  { img: Imdbdatabase2, title: 'Imdb Database', file: 'Imdbdatabase.zip' },
  // Add more objects for Project6, Project7, etc., if you have those images
];

const Projects = () => {
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTime, setLastClickTime] = useState(0);
  const [showAnimation, setShowAnimation] = useState(false);
  const navigate = useNavigate();

  const handleProjectClick = (project) => {
    if (project.isGame) {
      navigate('/game');
    }
  };

  const handleDownload = (e, file) => {
    e.preventDefault();
    const link = document.createElement('a');
    link.href = `Download/${file}`;
    link.download = file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleBashameClick = (e) => {
    e.preventDefault();
    const currentTime = new Date().getTime();
    
    if (currentTime - lastClickTime > 1000) {
      setClickCount(1);
    } else {
      setClickCount(prev => prev + 1);
    }
    
    setLastClickTime(currentTime);

    if (clickCount === 2) {
      const easterEgg = document.createElement('div');
      easterEgg.style.position = 'fixed';
      easterEgg.style.top = '50%';
      easterEgg.style.left = '50%';
      easterEgg.style.transform = 'translate(-50%, -50%)';
      easterEgg.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
      easterEgg.style.color = 'white';
      easterEgg.style.padding = '20px';
      easterEgg.style.borderRadius = '10px';
      easterEgg.style.zIndex = '9999';
      easterEgg.style.textAlign = 'center';
      easterEgg.style.fontSize = '24px';
      easterEgg.innerHTML = '🎉 You found the easter egg! 🎉<br>🎮 Konami Code: ↑↑↓↓←→←→BA';

      document.body.appendChild(easterEgg);
      setShowAnimation(true);

      setTimeout(() => {
        document.body.removeChild(easterEgg);
        setClickCount(0);
        setShowAnimation(false);
      }, 3000);
    }
  };

  return (
    <>
      <div className='ProjectsContainer'>
        <div id="ProjectID"></div>
        <div className="MyProjects">
          {projects.map((proj, i) => (
            <div 
              className="Project" 
              key={i}
              onClick={() => handleProjectClick(proj)}
              style={{ cursor: proj.isGame ? 'pointer' : 'default' }}
            >
              <img 
                className={`ProjectImage image${i + 1}`} 
                src={proj.img} 
                alt={proj.title} 
                onClick={proj.title === 'Bashame Clicker' ? handleBashameClick : undefined}
                style={{ cursor: proj.title === 'Bashame Clicker' ? 'pointer' : 'default' }}
              />
              <div className="ProjectContent">
                <p>{proj.title}</p>
                {proj.isGame && (
                  <p style={{
                    color: '#4CAF50',
                    margin: '5px 0',
                    fontSize: '0.9em',
                    fontWeight: 'bold'
                  }}>
                    Click to Play
                  </p>
                )}
                <a 
                  href={`Download/${proj.file}`} 
                  className="download-button"
                  onClick={(e) => handleDownload(e, proj.file)}
                >
                  Download
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
      {showAnimation && <WalkingAnimation />}
    </>
  );
};

export default Projects;
