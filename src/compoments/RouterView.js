import React from 'react';
import Header from './header';
import CopyRight from './copyright';
import sliderImg from '../images/slider_img.png';

const RouterView = props => (
  <div id="home_page" className={`home_page component ${props.className}`}>
    <Header />
    <section class="main_full banner_section_top">
        <div class="container-fluid">
          <div class="row">
             <div class="full">
                  <div class="slider_banner">
                    <img class="img-responsive" src={sliderImg} alt="#" />
                      <div class="slide_cont">
                        <div class="slider_cont_inner">
                          <h3>Welcome To Our  Web Coaching</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit</p>
                        <a class="blue_bt" href="#">Read More</a>
                        </div>
                      </div>
                  </div>
                </div>
          </div>
        </div>
      </section>
    <section class="layout_padding section about_dottat">
      <div class="container">
      <div class="col-lg-12 text_align_center">
        {props.children}
      </div>
      </div>
    </section>
    <CopyRight />
  </div>
);

export default RouterView;
