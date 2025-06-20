function Intro({pageSetter}) {
    return(
      <div className='pfl-container'>
        <span className='pfl-photo'></span>
        <div className='pfl-header'>
          <p className='name'>Sean Andrew</p>
          <p className='title'>Web Developer</p>
        </div>
        <div className='logos'>
          <i class="fa-brands fa-react"></i>
          <i class="fa-brands fa-css3-alt"></i>
          <i class="fa-brands fa-python"></i>
        </div>
        <div className='pfl-header'>
          <p>PROFILE</p>
        </div>
        <div className='link-container'>
          <div className='link-card'>
            <div className='link-logo'>
              <i class="fa-solid fa-file"></i>
            </div>
            <button>Resume</button>
          </div>    
          <div className='link-card'>
            <div className='link-logo'>
              <i class="fa-solid fa-laptop-code"></i>
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
              <i class="fa-solid fa-leaf"></i>
            </div>
            <button onClick={()=> pageSetter(1)}>Company Website</button>
          </div>
          <div className='link-card'>
            <div className='link-logo'>
              <i class="fa-solid fa-puzzle-piece"></i>
            </div>
            <button onClick={()=> pageSetter(2)}>Mastermind</button>
          </div>
          <div className='link-card'>
            <div className='link-logo'>
              <i class="fa-solid fa-square-poll-vertical"></i>
            </div>
            <button onClick={()=> pageSetter(3)}>Dota 2 Stats Tracker</button>
          </div> 
        </div>
      </div>
    )
}


export default Intro;
