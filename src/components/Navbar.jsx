import React from 'react'
import { Link } from 'react-router-dom';
import './css/Navbar.css';
import logo from '../assets/images/logo.png'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-xxl">
        <div className="container-fluid">
          <Link className="navbar-brand ms-0  ms-xl-5" to="/"><img src={logo} alt='skill pedia'></img></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span><i class="fa-solid fa-bars-staggered"></i></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">TheSkillPedia</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-start my-auto flex-grow-1 ">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>

                <li class="nav-item dropdown dropdown-mega position-static ">
              <Link class="nav-link dropdown-toggle" to ="/" id="navbarDropdown1" role="button"
                data-bs-toggle="dropdown" aria-expanded="false" data-bs-auto-close="outside">
                Courses
              </Link>
              <div class="dropdown-menu scrollabe-menu ">
                <div class="mega-content px-md-4">
                  <div class="container-fluid ">
                    <div class="row">
                      {/* <!-- col1:start --> */}
                      <div class=" col-12 col-xxl-3  py-4 px-xl-2 px-4">
                        <h5 class="fw-bold">Business</h5>
                        <div class="list-group">
                          <Link to ="/" class="list-group-item">
                            Finance
                          </Link>
                          <Link to ="/" class="list-group-item">
                           Entrepreneurship
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Communication
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Management
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Sales
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Operations
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Business Law
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Home Business
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Human Resources
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Industry
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Media
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Real Estate
                          </Link>
                          {/* <!-- list-group:end --> */}
                        </div>
                        {/* <!-- col1:end --> */}
                      </div>


                      {/* <!-- col2:start --> */}
                      <div class=" col-12 col-xxl-3  py-4 px-xl-5 px-4">
                        <h5 class="fw-bold">Design</h5>
                        <div class="list-group">
                          <Link to ="/" class="list-group-item">
                           Web Design
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Graphic Design
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Design Tools
                          </Link>
                          <Link to ="/" class="list-group-item">
                            User Experience
                          </Link>
                          <Link to ="/" class="list-group-item">
                            3D & Animation
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Fashion
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Architectural Design
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Interior Design
                          </Link>
                          {/* <!-- list-group:end --> */}
                        </div>
                        {/* <!-- col2:end --> */}
                      </div>

                      {/* <!-- col3:start --> */}
                      <div class="col-12 col-xxl-3  py-4 px-xl-5 px-4">
                        <h5 class="fw-bold">Finance & Accounting</h5>
                        <div class="list-group">
                          <Link to ="/" class="list-group-item">
                            Accounting & Book Keeping
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Compliance
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Cryptocurrency & Blockchain
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Economics
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Finance Cert & Exam Prep
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Financial Modeling & Analysis
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Investing & Trading
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Taxes
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Other Finance & Economics
                          </Link>
                          {/* <!-- list-group:end --> */}
                        </div>
                        {/* <!-- col3:end --> */}
                      </div>

                      {/* <!-- col4:start --> */}
                      <div class="col-12 col-xxl-3   py-4 px-xl-5 px-4">
                        <h5 class="fw-bold">Health & Fitness</h5>
                        <div class="list-group">
                          <Link to ="/" class="list-group-item">
                            Fitness
                          </Link>
                          <Link to ="/" class="list-group-item">
                            General Health
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Sports
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Nutrition
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Yoga
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Mental Health
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Dieting
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Self Defense
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Safety &  First-Aid
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Dance
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Meditation
                          </Link>
                          {/* <!-- list-group:end --> */}
                        </div>
                        {/* <!-- col4:end --> */}
                      </div>



                      {/* <!-- col5:start --> */}
                      <div class=" col-12 col-xxl-3  py-4  px-xl-5 px-4">
                        <h5 class="fw-bold">IT & Software Development</h5>
                        <div class="list-group">
                          <Link to ="/" class="list-group-item">
                            Web Development
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Data Science
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Programming Languages
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Mobile Apps
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Game Development
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Relational Databse
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Software Testing
                          </Link>
                          <Link to ="/" class="list-group-item">
                            DevOps Toolchain
                          </Link>
                          <Link to ="/" class="list-group-item">
                            E-Commerce
                          </Link>
                          <Link to ="/" class="list-group-item">
                            IT-Certification
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Network & Security
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Operating Systems
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Cloud Computing
                          </Link>

                          {/* <!-- list-group:end --> */}
                        </div>
                        {/* <!-- col5:end --> */}
                      </div>


                      {/* <!-- col6:start --> */}
                      <div class=" col-12 col-xxl-3  py-4 px-xl-5 px-4">
                        <h5 class="fw-bold">Lifestyle</h5>
                        <div class="list-group">
                          <Link to ="/" class="list-group-item">
                            Arts & Crafts
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Food & Beverage
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Beauty & Makeup
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Travel
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Gaming
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Home Improvement
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Pet Care & Training
                          </Link>
                          {/* <!-- list-group:end --> */}
                        </div>
                        {/* <!-- col6:end --> */}
                      </div>

                      {/* <!-- col7:start --> */}
                      <div class="col-12 col-xxl-3  py-4 px-xl-5 px-4">
                        <h5 class="fw-bold">Marketing</h5>
                        <div class="list-group">
                          <Link to ="/" class="list-group-item">
                            Digital Marketong
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Search Engine Optimization
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Social Media Marketing
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Branding
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Marketing Fundamental
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Analytics & Automation
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Public Relations
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Advertising
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Video & Mobile Marketing
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Content Marketing
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Product Marketing
                          </Link>
                          {/* <!-- list-group:end --> */}
                        </div>
                        {/* <!-- col7:end --> */}
                      </div>

                      {/* <!-- col8:start --> */}
                      <div class="col-12 col-xxl-3   py-4 px-xl-5 px-4">
                        <h5 class="fw-bold">Music</h5>
                        <div class="list-group">
                          <Link to ="/" class="list-group-item">
                            Instrument
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Production
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Music Fundamental
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Vocal
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Music Techniques
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Music Software
                          </Link>
                        
                          {/* <!-- list-group:end --> */}
                        </div>
                        {/* <!-- col8:end --> */}
                      </div>



                       {/* <!-- col9:start --> */}
                       <div class="col-12 col-xxl-3   py-4 px-xl-5 px-4">
                        <h5 class="fw-bold">Office Productivity</h5>
                        <div class="list-group">
                          <Link to ="/" class="list-group-item">
                            Microdoft
                          </Link>
                          <Link to ="/" class="list-group-item">
                           Apple
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Google
                          </Link>
                           {/* <!-- list-group:end --> */}
                        </div>
                        {/* <!-- col9:end --> */}
                      </div>


                       {/* <!-- col10:start --> */}
                       <div class="col-12 col-xxl-3   py-4 px-xl-5 px-4">
                        <h5 class="fw-bold">Personal Development</h5>
                        <div class="list-group">
                          <Link to ="/" class="list-group-item">
                            Personal Transformation
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Productivity
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Leadership
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Personal Finance
                          </Link>
                          <Link to ="/" class="list-group-item">
                           Career Development
                          </Link>

                          <Link to ="/" class="list-group-item">
                            Parenting & Relationships
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Religion & Sprituality
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Personal Brand Building
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Creativity
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Influence
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Self Esteem
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Stress Management
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Memory & Study Skills
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Motivation
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Others
                          </Link>
                          {/* <!-- list-group:end --> */}
                        </div>
                        {/* <!-- col10:end --> */}
                      </div>

                       {/* <!-- col11:start --> */}
                       <div class="col-12 col-xxl-3   py-4 px-xl-5 px-4">
                        <h5 class="fw-bold">Photography</h5>
                        <div class="list-group">
                          <Link to ="/" class="list-group-item">
                           Digital Photography
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Photography Fundamentals
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Portraits
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Photography Tools
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Commercial Photography
                          </Link>
                          <Link to ="/" class="list-group-item">
                            Video Design
                          </Link>
                          
                          {/* <!-- list-group:end --> */}
                        </div>
                        {/* <!-- col11:end --> */}
                      </div>

                      {/* <!-- row:end --> */}
                    </div>
                  </div>
                </div>
              </div>

            </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/">Contact Us</Link>
                </li>

              </ul>

              <form className="search  my-3 my-xxl-auto ms-0 d-flex " role="search">
                <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-primary" type="submit"><i class="fa-solid fa-magnifying-glass"></i></button>
              </form>


              <div className='my-auto  justify-content-evenly login'>
                <button className='btn btn-primary'><i className="fa-solid fa-right-to-bracket"></i> Login</button>
                <button className='btn btn-primary'><i class="fa-solid fa-user-plus"></i> Signup</button>
                <button className='btn btn-primary me-1 me-md-2'><i class="fa-solid fa-cart-shopping"></i> Cart</button>
              </div>

            </div>
          </div>
        </div>
      </nav>


    </>
  )
}

export default Navbar