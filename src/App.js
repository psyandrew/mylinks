import { useState } from 'react';
import Intro from './components/Intro.js'
import Mastermind from './components/Mastermind.js'
import Company from './components/Company.js'
import Dota from './components/Dota.js'
import Codewar from './components/Codewar.js'


function App() {

  const [page, setPage]= useState(0)

  const pageSetter =(n)=>{
    setPage(n)
  } 

  return (
    <div className="App bg">
      {page === 0 && <Intro pageSetter={pageSetter}/> }
      {page === 1 && <Company pageSetter={pageSetter}/> }
      {page === 2 && <Mastermind pageSetter={pageSetter}/> }
      {page === 3 && <Dota pageSetter={pageSetter}/> }
      {page === 4 && <Codewar pageSetter={pageSetter}/> }
    </div>
  );
}

export default App;
