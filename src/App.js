function App() {
  return (
    <div className="App bg">
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-pzjw8f+ua7Kw1TIq7wXb0iACpikoM+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"/>
      <div className='profilecontainer'>
        <span className='profilephoto'></span>
        <div className='profileheader'>
          <p className='name'>Sean Andrew Casero</p>
          <p className='title'>Web Developer</p>
        </div>
        <span className='logo'><p>R</p><p>C</p><p>P</p></span>
        <div className='linkcontainer'>
          <button className='linkboxbtn' style={{ fontSize: '1.2rem' }}>RESUME</button>
          <p>PORTFOLIO</p>
          <button className='linkboxbtn'>COMPANY WEBSITE</button>
          <button className='linkboxbtn'>MASTERMIND</button>
          <button className='linkboxbtn'>BATTLESHIP</button>
        </div>
      </div>

    </div>
  );
}

export default App;
