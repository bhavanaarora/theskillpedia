import React from 'react'
import carousel3 from '../assets/images/carousel3.jpg';
import carousel1 from '../assets/images/carousel1.jpg';
import carousel4 from '../assets/images/carousel4.jpg';
import './css/Carousel.css';

const Carousel = () => {
  return (
    <>    
    {/* <!-- container-fluid product-slider:end --> */}
    <div className="container-fluid m-0 p-0">
      <div id="carouselExampleAutoplaying" className="carousel carousel-fade" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="5000">
            <img  src={carousel3} className="d-block w-100 h-75" alt="..."/>
            <div class="carousel-caption ">
              <h2 className="display-4  ">Sieze The Opportunity To Learn,<br/>No Matter Where You Are!</h2>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src={carousel1} className="d-block w-100 h-75" alt="..."/>
            <div class="carousel-caption ">
              <h2 className="display-3">Empower Your Future, Learn Anywhere with Our Online Courses!</h2>
            </div>
          </div>
          <div className="carousel-item" data-bs-interval="5000">
            <img src={carousel4} className="d-block w-100 h-75" alt="..."/>
            <div class="carousel-caption ">
              <h2 className="display-3">Unlock Knowledge, Anytime, Anywhere: Your Journey Starts Here!</h2>
            </div>
          </div>
         </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
        {/* <!-- carousel:end --> */}
        {/* <div className='wave'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#222222" fill-opacity="0.8" d="M0,96L48,90.7C96,85,192,75,288,74.7C384,75,480,85,576,96C672,107,768,117,864,133.3C960,149,1056,171,1152,170.7C1248,171,1344,149,1392,138.7L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
        </div> */}
    </div>
    </>
  )
}

export default Carousel