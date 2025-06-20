function Mastermind({pageSetter}) {
    return(
      <div className='pfl-container'>
        <button className='back-button' onClick={()=> pageSetter(0)}> <strong>&lt;</strong></button>
          <div className='showcase-pic Mastermind'>
          </div>
        <div className='showcase-text'>
          <h1>
            Mastermind
          </h1>
          <p>
            I chose to bring Mastermind into the browser since I am very familiar with the mechanics.
            This project was my way of translating the boardgame's logic into React,
            focusing on state handling while also building a user-friendly interface.
          </p>
        </div>
         <button className='open-button' onClick={() => window.open('https://mastermind-beta-smoky.vercel.app/', '_blank')}>OPEN</button>
      </div>
    )
}


export default Mastermind;
