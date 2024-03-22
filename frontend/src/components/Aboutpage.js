import React from 'react';
import { Link } from 'react-router-dom';
import hotelManagementCertificate from '../images/rishicertificate.png';
import rishipic from '../images/rishipicexample.jpeg';

const AboutPage = () => {
  return (
    <div className="container mt-4" style={{ border: '2px solid #ccc', borderRadius: '10px', padding: '20px' }}>
      <div className="row">
        <div className="col-md-12 text-center">
          <h1 className="mb-4" style={{marginTop:'3%'}}>HEY, ITS ME RISHIK RAJ !!!</h1>
          <img src={rishipic} className="figure-img img-fluid rounded" alt="Rishik Raj" style={{ width: '550px', height: '350px' }}/>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec nec justo nec lectus pretium interdum. Sed ut
            sapien et dolor vehicula commodo. In hac habitasse platea dictumst. Vivamus rhoncus, nisi ac bibendum auctor,
            nisi elit pellentesque ex, eu eleifend ipsum odio eget justo. Nulla facilisi. Aenean ac tortor ut ipsum
            fermentum ullamcorper. Fusce tempor, dolor nec efficitur ultricies, dolor eros fringilla nisi, et lacinia
            eros risus ac magna. Nullam aliquam, sapien eget vehicula molestie, velit ligula gravida nisl, in tincidunt
            nisl ligula ac sapien. Nullam congue sagittis enim, vel posuere libero ultrices non. Integer sit amet leo
            hendrerit, tristique odio in, rhoncus ipsum. Duis porttitor lacus quis felis dictum commodo. Nulla eget sem
            ac lorem sodales aliquet. Nam vestibulum sapien quis erat vestibulum consequat. Mauris volutpat quam vitae
            dolor posuere, sit amet fermentum orci vestibulum.
          </p>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 text-center">
          <img src={hotelManagementCertificate} className="figure-img img-fluid rounded" alt="Hotel Management Certificate" style={{ width: '450px', height: '300px' }}/>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-md-12 text-center">
          <Link to="/admin" className="btn btn-primary">Admin Login</Link>
        </div>
      </div>
      <footer className="mt-4 text-center" style={{paddingTop:'2%',paddingBottom:'3%'}}>
        <div className="row">
          <div className="col-md-4">
            <a href="/insta">Instagram</a>
          </div>
          <div className="col-md-4">
            <a href="mailto:example@example.com">Email</a>
          </div>
          <div className="col-md-4">
            <a href="tel:+1234567890">Phone</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default AboutPage;
