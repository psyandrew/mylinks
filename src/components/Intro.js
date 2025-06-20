import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLeaf, faPuzzlePiece, faFile, faLaptopCode, faSquarePollVertical } from '@fortawesome/free-solid-svg-icons';
import { faReact, faCss3Alt, faPython } from '@fortawesome/free-brands-svg-icons';

function Intro({pageSetter}) {
    return(
      <div className='pfl-container'>
        <span className='pfl-photo'></span>
        <div className='pfl-header'>
          <p className='name'>Sean Andrew</p>
          <p className='title'>Web Developer</p>
        </div>
        <div className='logos'>
          <FontAwesomeIcon icon={faReact} />
          <FontAwesomeIcon icon={faCss3Alt} />
          <FontAwesomeIcon icon={faPython} />
        </div>
        <div className='pfl-header'>
          <p>PROFILE</p>
        </div>
        <div className='link-container'>
          <div className='link-card'>
            <div className='link-logo'>
              <FontAwesomeIcon icon={faFile} /> 
            </div>
            <button onClick={() => window.open('https://drive.google.com/file/d/1p2hSM37ye3f1iisyB0xFM_go_nmuuUtu/view?usp=sharing', '_blank')}>Resume</button>
          </div>    
          <div className='link-card'>
            <div className='link-logo'>
              <FontAwesomeIcon icon={faLaptopCode} />
            </div>
            <button onClick={()=> pageSetter(4)}>Codewars</button>
          </div> 
        </div>
        <div className='pfl-header'>
          <p>PORTFOLIO</p>
        </div>
        
        <div className='link-container'>
          <div className='link-card'>
            <div className='link-logo'>
              <FontAwesomeIcon icon={faLeaf} />
            </div>
            <button onClick={()=> pageSetter(1)}>Company Website</button>
          </div>
          <div className='link-card'>
            <div className='link-logo'>
              <FontAwesomeIcon icon={faPuzzlePiece} />
            </div>
            <button onClick={()=> pageSetter(2)}>Mastermind</button>
          </div>
          <div className='link-card'>
            <div className='link-logo'>
              <FontAwesomeIcon icon={faSquarePollVertical} />
            </div>
            <button onClick={()=> pageSetter(3)}>Dota 2 Stats Tracker</button>
          </div> 
        </div>
      </div>
    )
}


export default Intro;
