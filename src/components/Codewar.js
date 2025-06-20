function Codewar({pageSetter}) {
    return(
      <div className='pfl-container'>
        <button className='back-button' onClick={()=> pageSetter(0)}> <strong>&lt;</strong></button>
        <div className='showcase-pic cw'>
        </div>
        <div className='showcase-text'>
          <h1>
            Codewar Profile
          </h1>
          <p>I am currently ranked 4 kyu on Codewars with a focus on problem-solving in JavaScript and Python. This is where I hone my understanding of data structures, algorithms, and how to optimizate my code.</p>
        </div>
         <button className='open-button' onClick={() => window.open('https://www.codewars.com/users/psyandrew', '_blank')}>OPEN</button>
      </div>
    )
}


export default Codewar;