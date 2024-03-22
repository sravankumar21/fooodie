import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS file
import { BiFoodMenu } from 'react-icons/bi'; // Import food-related icon from React Icons
import { AiOutlineUser } from 'react-icons/ai'; // Import user account icon
import cookingMainImage1 from '../images/cooking main.jpeg';
import cookingMainImage2 from '../images/cooking1.jpeg';
import cookingMainImage3 from '../images/cookingleft.jpeg';


const Homepage = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"> 
            <BiFoodMenu style={{ marginRight: '20px', marginLeft: '45px' }} /> Foooodie.com
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav ms-auto" style={{ marginRight: '20px' }}> {/* Move the navigation items to the right and add margin-right */}
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/reviews">Reviews</a>
              </li>
            </ul>
            <div className="d-grid gap-2 d-md-flex justify-content-md-end">
              <button className="btn btn-outline-dark me-md-2" type="button">My Cart</button> {/* Change button style to outline-light */}
              <a className="navbar-login" href="/"> 
                <AiOutlineUser size={38} style={{ marginLeft: '6px', marginRight: '12px' }} />
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="container mt-4 text-center" style={{ paddingTop: '1.2%' }}>
  <h1 style={{ fontFamily: 'Inter', fontSize: 38, fontWeight: 'bold' }}>MR.RISHI'S KITCHEN</h1>
  <h4 style={{ fontFamily: 'Inter', fontSize: 24, fontWeight: 'normal', color: '#828282' }}>Hungry? Let's Make It Delicious!</h4>
  <button className="btn btn-outline-dark me mt-3" onClick={() => window.location.href = '/menu'}>Menu</button>
</div>


      <div id="carouselExampleSlidesOnly" className="carousel slide" style={{paddingTop:'2%'}} data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={cookingMainImage1} className="d-block w-50 mx-auto" alt="First slide" style={{ position: 'absolute', left: 0, top: 0, zIndex: -1 }} />
            <img src={cookingMainImage2} className="d-block w-50 mx-auto" alt="Second slide" />
            <img src={cookingMainImage3} className="d-block w-50 mx-auto" alt="Third slide" style={{ position: 'absolute', right: 0, top: 0, zIndex: -1 }} />
          </div>
          {/* Add more carousel items if needed */}
        </div>
      </div>
    </div>
  );
}

export default Homepage;
