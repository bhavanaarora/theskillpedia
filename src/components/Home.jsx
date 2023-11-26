import React from 'react'
import { Link } from 'react-router-dom';
import './css/Home.css';
import Carousel from './Carousel';
import pic1 from '../assets/images/skills.svg'
import pic2 from '../assets/images/career-goal.svg'
import pic3 from '../assets/images/instructions.svg'
import pic4 from '../assets/images/certificate.svg'
import pic5 from '../assets/images/sap-ase.png'
import pic6 from '../assets/images/MySQL-DBA-Course.png'
import pic7 from '../assets/images/awspic.jpg'
import pic8 from '../assets/images/linuxpic.jpg'
import pic9 from '../assets/images/OpenStackpic.jpg'
import pic10 from '../assets/images/SELinuxpic.jpg'


const Home = () => {
  return (
    <>
      <Carousel />

      <div className="course text-center my-3">
        <button className="btn fs-5 m-3  px-2 px-md-5 text-white rounded text-decoration-none ">Browse Courses</button>
      </div>
      <section className="section3  my-5">
        <div className="section3card  py-5">
          <div className='row'>
            <div className='col-12 col-sm-6 col-xl-3 p-3'>
              <div className="card text-center">
                <div className="card-body">
                  <img src={pic1} alt='cardpic'></img>
                  <h5 className="card-title">Learn in-Demand Skills</h5>
                  <p className="card-text lead ">Like Cloud Computing,Dev-Ops Tools,Machine Learning and more</p>
                </div>
              </div>
              {/* colends */}
            </div>

            <div className='col-12 col-sm-6 col-xl-3 p-3'>
              <div className="card text-center">
                <div className="card-body">
                  <img src={pic2} alt='cardpic'></img>
                  <h5 className="card-title">Get Ready for Career</h5>
                  <p className="card-text lead ">In demand fields like IT,AI and Cloud Engineering</p>
                </div>
              </div>
              {/* col ends */}
            </div>

            <div className='col-12 col-sm-6 col-xl-3 p-3'>
              <div className="card text-center">
                <div className="card-body">
                  <img src={pic3} alt='cardpic'></img>
                  <h5 className="card-title">Expert Instructors</h5>
                  <p className="card-text lead ">Every course designed by experts with 20+ Years of Experience</p>
                </div>
              </div>
              {/* colends */}
            </div>

            <div className='col-12 col-sm-6 col-xl-3 p-3'>
              <div className="card text-center">
                <div className="card-body">
                  <img src={pic4} alt='cardpic'></img>
                  <h5 className="card-title">Get Certificate</h5>
                  <p className="card-text lead ">Once you complete Link course, you will receive certification.</p>
                </div>

              </div>
              {/* colends */}
            </div>
          </div>
        </div>

      </section>


      {/*================= section feature course =====================*/}


      <section className='featurecourses-section my-5 '>

      <hr className='pb-5'/>
      <div className='fw-bold'><h3>Featured Courses</h3></div>

        <div className=' featurecourses p-0 p-sm-3'>
                    
          {/* <div className='d-flex justify-content-center align-items-center mt-5 gap-5 flex-wrap'> */}
          <div className='row mt-5 mx-0 mx-sm-5'>
            {/*=========== card1 ==========*/}
            <div className='col-12 col-lg-6 col-xl-4 p-2 p-sm-3'>
            <div className="card text-center">
              <div className="card-header">
                <img src={pic5} alt="SAP" />
              </div>
              <div className="card-body">

                <div className='d-flex justify-content-center'>
                  <div>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div><p>&nbsp; 4.77 (181)</p></div>
                </div>
                <h5 className="card-title">Sybase ASE-DBLink Course</h5>
                <p className="card-text">SAP Adaptive Server Enterprise</p>
                <p><i className="far fa-user"></i> Ram Niwas Sangwan</p>
                <div className='d-flex justify-content-evenly'>
                  <p><i className="far fa-play-circle"></i> 32 Lectures</p>
                  <p><i className="fa fa-signal" aria-hidden="true"></i> Intermediate</p>
                </div>
                <p className='lead     fw-bold'><i   className="fa fa-inr" aria-hidden="true"></i> 14,500.00</p>
                <p className='strike'>39,900.00</p>
              </div>
              <div className="card-footer">
                <Link to="#" className="btn  w-100">Add To Cart</Link>
              </div>
            </div>
            </div>

            {/*=========== card2 ==========*/}
             
            <div className='col-12 col-lg-6 col-xl-4 p-2 p-sm-3'>
            <div className="card text-center">
              <div className="card-header">
                <img src={pic6} alt="SAP" />
              </div>
              <div className="card-body bg-white">
                <div className='d-flex justify-content-center'>
                  <div>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div><p>&nbsp; 4.80 (352)</p></div>
                </div>
                <h5 className="card-title">MySQL DBA Course</h5>
                <p className="card-text">MySQL</p>
                <p><i className="far fa-user"></i> Ram Niwas Sangwan</p>
                <div className='d-flex justify-content-evenly'>
                  <p><i className="far fa-play-circle"></i> 36 Lectures</p>
                  <p><i   className="fa fa-signal" aria-hidden="true"></i>All Levels</p>
                </div>
                <p className='lead fw-bold'><i   className="fa fa-inr" aria-hidden="true"></i> 38,500.00</p>
                <p className='strike'>39,900.00</p>
              </div>
              <div className="card-footer">
                <Link to="#" className="btn  w-100">Add To Cart</Link>
              </div>
            </div>
            </div>


            {/*================ card3 ===================*/}
            <div className='col-12 col-lg-6 col-xl-4 p-2 p-sm-3'>
            <div className="card text-center">
              <div className="card-header">
                <img src={pic7} alt="SAP" />
              </div>
              <div className="card-body">
                <div className='d-flex justify-content-center'>
                  <div>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div><p>&nbsp; 4.70 (167)</p></div>
                </div>
                <h5 className="card-title">AWS Technical Essentials Course</h5>
                <p className="card-text">AWS Cloud</p>
                <p><i className="far fa-user"></i> Ram Niwas Sangwan</p>
                <div className='d-flex justify-content-evenly'>
                  <p><i className="far fa-play-circle"></i> 1 Lecture</p>
                  <p><i className="fa fa-signal" aria-hidden="true"></i> Intermediate</p>
                </div>
                <p className='lead    fw-bold'><i   className="fa fa-inr" aria-hidden="true"></i> 10,000.00</p>
                <p className='strike'>29,900.00</p>
              </div>
              <div className="card-footer">
                <Link to="#" className="btn  w-100">Add To Cart</Link>
              </div>
            </div>
</div>


         
            {/*=========== card4 ==========*/}
            <div className='col-12 col-lg-6 col-xl-4 p-2 p-sm-3'>
            <div className="card text-center">
              <div className="card-header">
                <img src={pic8} alt="SAP" />
              </div>
              <div className="card-body bg-white">
                <div className='d-flex justify-content-center'>
                  <div>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div><p>&nbsp; 4.89 (611)</p></div>
                </div>
                <h5 className="card-title">Linux Essentials-A Beginners Course</h5>
                <p className="card-text">Linux Administration</p>
                <p><i className="far fa-user"></i> Ram Niwas Sangwan</p>
                <div className='d-flex justify-content-evenly'>
                  <p><i className="far fa-play-circle"></i> 25 Lectures</p>
                  <p><i   className="fa fa-signal" aria-hidden="true"></i> Beginner</p>
                </div>
                <p className='lead fw-bold'><i   className="fa fa-inr" aria-hidden="true"></i> 10,000.00</p>
                <p className='strike'>37,500.00</p>
              </div>
              <div className="card-footer">
                <Link to="#" className="btn  w-100">Add To Cart</Link>
              </div>
            </div>
            </div>

            {/*=========== card5 ==========*/}

            <div className='col-12 col-lg-6 col-xl-4 p-2 p-sm-3'>
            <div className="card text-center">
              <div className="card-header">
                <img src={pic9} alt="SAP" />
              </div>
              <div className="card-body bg-white">
                <div className='d-flex justify-content-center'>
                  <div>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                  </div>
                  <div><p>&nbsp; 4.82 (875)</p></div>
                </div>
                <h5 className="card-title">OpenStack Training Course</h5>
                <p className="card-text">OpenStack Cloud</p>
                <p><i className="far fa-user"></i> Ram Niwas Sangwan</p>
                <div className='d-flex justify-content-evenly'>
                  <p><i className="far fa-play-circle"></i> 15 Lectures</p>
                  <p><i   className="fa fa-signal" aria-hidden="true"></i> All Levels</p>
                </div>
                <p className='lead fw-bold'><i   className="fa fa-inr" aria-hidden="true"></i> 15,500.00</p>
                <p className='strike'>39,900.00</p>
              </div>
              <div className="card-footer">
                <Link to="#" className="btn  w-100">Add To Cart</Link>
              </div>
            </div>
            </div>

            {/*================ card6 ===================*/}
            <div className='col-12 col-lg-6 col-xl-4 p-2 p-sm-3'>
            <div className="card text-center">
              <div className="card-header">
                <img src={pic10} alt="SAP" />
              </div>
              <div className="card-body bg-white">
                <div className='d-flex justify-content-center'>
                  <div>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i className="fa fa-star" aria-hidden="true"></i>
                    <i class="fa fa-star-half-o" aria-hidden="true"></i>
                  </div>
                  <div><p>&nbsp; 4.61 (63)</p></div>
                </div>
                <h5 className="card-title">SELinux Administration Course</h5>
                <p className="card-text">Linux Administration</p>
                <p><i className="far fa-user"></i> Ram Niwas Sangwan</p>
                <div className='d-flex justify-content-evenly'>
                  <p><i className="far fa-play-circle"></i> 12 Lectures</p>
                  <p><i   className="fa fa-signal" aria-hidden="true"></i> All Levels</p>
                </div>
                <p className='lead fw-bold'><i   className="fa fa-inr" aria-hidden="true"></i> 10,500.00</p>
                <p className='strike'>39,900.00</p>
              </div>
              <div className="card-footer">
                <Link to="#" className="btn  w-100">Add To Cart</Link>
              </div>
            </div>
</div>


          </div>

          <div className="text-center mt-5">
        <button className="btn btn-secondary fs-5 m-3  px-2 px-md-5 text-white rounded text-decoration-none ">All Featured Courses 
      </button>
      </div>

        </div>

      </section>


    </>
  )
}

export default Home