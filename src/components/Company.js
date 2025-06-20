function Company({pageSetter}) {
    return(
      <div className='pfl-container'>
        <button className='back-button' onClick={()=> pageSetter(0)}> <strong>&lt;</strong></button>
        <div className='showcase-text'>
           <h1>
            Tagaytay Leaf Website
          </h1>
        </div>
        <div className='showcase-pic gt1'>
          </div>
        <div className='showcase-text'>
          <p>
            Tagaytay Leaf started as a project where the goal was to recreate modern landing page design ideas I gathered from behance and dribble and mesh them into one responsive Page.
            I eventually decided to grow it further into a full stack e-commerce web app built with React and Django for a fictional tea brand based in Tagaytay.
          </p>
        </div>
        <div className='showcase-pic gt3'>
          </div>
        <div className='showcase-text'>
          <p>
            The project includes two separate interfaces: one for customers and another for staff.
            For the customer user I added a customer shopping experience complete with product listings, a cart system, order tracking, and a contact form for sending in customer concerns to the staff.
            For the staff I developed a dedicated dashboard that enables inventory management, monitors incoming orders, and centralizes customer inquiries for follow-ups.
          </p>
        </div>
        <div className='showcase-pic gt2'>
        </div>
        <div className='showcase-text'>
          <p>
            This project gave me the opportunity to implement role-based access and build admin-facing tools, helping me better understand how to structure and connect frontend and backend logic in a full-stack application for different users in mind. 
          </p>
        </div>
        <div className='showcase-credentials'>
            <p>
              Homepage: https://green-tea-seven.vercel.app/
            </p>
            <p>
              Catalogue: https://green-tea-seven.vercel.app/catalogue
            </p>
            <p>
              Admin Dashboard: https://green-tea-seven.vercel.app/dashboard
            </p>
        </div>
        <p>
          <b>NOTICE</b>: You might experience a short delay (around 50 seconds) during your first interaction since the backend winds down if the site has been inactive. Don't worry, it'll speed right up after that!
        </p>
        <button className='open-button' onClick={() => window.open('https://green-tea-seven.vercel.app/', '_blank')}>OPEN</button>
      </div>
    )
}


export default Company;
