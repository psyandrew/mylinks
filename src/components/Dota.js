function Dota({pageSetter}) {
    return(
      <div className='pfl-container'>
        <button className='back-button' onClick={()=> pageSetter(0)}> <strong>&lt;</strong></button>
        <div className='showcase-pic DotaApp'>
        </div>
        <div className='showcase-text'>

          <h1>
            Dota Stats Tracker
          </h1>

          <p>
            Dota Stats Tracker is a full-stack web app I built using Django and React. It can fetch live data on player count and distribute them to their ranks to give users a snapshot of the Dota 2 ranked playerbase.

            I built it to explore full-stack development for real-time data integration and data visualization.

            My original plan was to run a backend web scraper that periodically pulled updated hero meta data from free community sources.

            However this approach required a dedicated server which I couldn’t secure due to resource constraints. While some services did offer real-time data via API calls they were behind paywalls and it would defeat the point of my goal of learning a python based backend.

            As a workaround, I learned to use WebSoup and a bit of Selenium to scrape and store hero data from the past year so I can visualize it for my fellow Dota enthusiasts.
          </p>
          <p>
            <b>NOTICE</b>: You might experience a short delay (around 50 seconds) during your first interaction since the backend winds down if the site has been inactive. Don't worry, it'll speed right up after that!
          </p>
        </div>
         <button className='open-button' onClick={() => window.open('https://dota-meta-app.vercel.app/', '_blank')}>OPEN</button>
      </div>
    )
}


export default Dota;
