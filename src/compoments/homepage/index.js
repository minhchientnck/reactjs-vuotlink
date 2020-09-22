import React, { Component } from 'react';
import './styles.css';
import sliderImg from '../../images/slider_img.png';
import abImg from '../../images/ab_img.png';
import cour1 from '../../images/cour1.png';
import cour2 from '../../images/cour2.png';
import testimon from '../../images/testimon.png';

class HomePage extends Component {
  render() {
    return (
      <div>
      <section className="main_full banner_section_top">
        <div className="container-fluid">
          <div className="row">
             <div className="full">
                  <div className="slider_banner">
                    <img className="img-responsive" src={sliderImg} alt="#" />
                      <div className="slide_cont">
                        <div className="slider_cont_inner">
                          <h3>Welcome To Our  Web Coaching</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                        <a className="blue_bt" href="#">Read More</a>
                        </div>
                      </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
      <section className="layout_padding section about_dottat">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 text_align_center">
                  <div className="full heading_s1">
                     <h2>About</h2>
                  </div>
                  <div className="full">
                     <p className="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                  </div>
               </div>
               <div className="col-md-12">
                  <div className="about_img margin_top_30  text_align_center">
                     <img src={abImg} alt="#" />
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="layout_padding section">
         <div className="container">
            <div className="row">
               <div className="col-lg-12 text_align_center">
                  <div className="full heading_s1">
                     <h2>Our Courses</h2>
                  </div>
                  <div className="full">
                     <p className="large">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo</p>
                  </div>
               </div>
            </div>
            <div className="row">

              <div className="col-md-4 text_align_center">
                 <div className="cours">
                   <img className="img-responsive" src={cour1} alt="#" />
                 </div>
                 <h3>Design</h3>
                 <p>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in re</p>
              </div>  

              <div className="col-md-4 text_align_center">
                 <div className="cours">
                   <img className="img-responsive" src={cour2} alt="#" />
                 </div>
                 <h3>Coding</h3>
                 <p>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in re</p>
              </div> 

              <div className="col-md-4 text_align_center">
                 <div className="cours">
                   <img className="img-responsive" src="images/cour3.png" alt="#" />
                 </div>
                 <h3>Javascript</h3>
                 <p>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in re</p>
              </div> 

            </div>
            <div className="row">
               <div className="col-md-12">
                  <div className="full center">
                      <a className="blue_bt" href="#">Read More</a>
                  </div>
               </div>
            </div>
         </div>
      </section>
      <section className="layout_padding section">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-12 text_align_center">
                  <div className="full heading_s1">
                     <h2>Our Coaching Time</h2>
                  </div>
               </div>
            </div>
            <div className="row">
              <div className="col-md-12 cours_timging_bg">
                 <div className="container">
                    <div className="time_table">
                          <ul><li>Monday</li><li>8 Am - 6 Pm</li></ul>
                          <ul><li>Tuesday</li><li>9 Am - 5 Pm</li></ul>
                          <ul><li>Wednesday</li><li>10 Am - 8 Pm</li></ul>
                          <ul><li>Thursday</li><li>8  Am - 6 Pm</li></ul>
                          <ul><li>Friday</li><li>6 Am - 4 Pm</li></ul>
                          <ul><li>Saturday</li><li>9 Am - 5 Pm</li></ul>
                          <ul><li>Sunday</li><li>Holiday</li></ul>
                       </div>
                 </div>        
              </div> 
            </div>
         </div>
      </section>
      <section className="layout_padding section">
         <div className="container-fluid">
            <div className="row">
               <div className="col-lg-12 text_align_center">
                  <div className="full heading_s1">
                     <h2>Our Success Stories</h2>
                  </div>
                  <div className="full">
                     <p className="large">In ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br/>consequat. Duis aute irure dolor in re</p>
                  </div>
               </div>
               <div className="col-md-12 testimonial">
                  <div className="full text_align_center">
                     <img src={testimon} alt="#" />
                     <h3><span className="theme_color_text">koluda</span><br/><small>Student</small></h3>
                  </div>
                  <div className="full margin_top_30 text_align_center">
                    <h4>I have successfully complated</h4>
                    <p>adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud<br/>exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in re</p>
                  </div>
               </div>
            </div>
        </div>
      </section>
      <section className="section blue_pattern_bg" style={{backgroundColor: '#3b3bff'}}>
         <div className="container">
            <div className="row">
               <div className="col-md-6">
                  <div className="full">
                     <h4>Subscribe Now to Our Newsletter !</h4>
                     <p>adipiscing elit, sed do eiusmod tempor incididunt ut<br/>labore et dolore magna aliqua.</p>
                  </div>
               </div>
               <div className="col-md-6">
                 <div className="form_subribe">
                    <form>
                       <input type="email" name="email" placeholder="Enter Your Email" />
                       <button>Subscribe</button>
                    </form>
                 </div>
               </div>
            </div>
         </div>
      </section>
      </div>
    );
  }
}

export default HomePage;
