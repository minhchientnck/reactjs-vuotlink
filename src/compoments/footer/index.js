import React, { Component } from 'react';
import logoFooter from '../../images/logo_footer.png';
import './styles.css';

class Footer extends Component {
  render() {
    return (
      <footer className="footer layout_padding">
        <div className="container">
          <div className="row">
            <div className="col-md-4 col-sm-12">
              <a href="index.html"><img className="img-responsive" src={logoFooter} alt="#" /></a>
              <div className="footer_link_heading">
                <div className="footer_menu margin_top_30">
                  <ul>
                    <li><a href="tel:9876543210">9876 543 210</a></li>
                    <li><a href="#">demo@gmail.com</a></li>
                    <li><a href="#">40 Baria Sreet 133/2 NewYork City, US</a></li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col-md-8">
              <div className="row">
                <div className="col-md-4 col-sm-12">
                  <div className="footer_link_heading">
                    <h3>FEATURED COURSES</h3>
                  </div>
                  <div className="footer_menu">
                    <ul>
                      <li><a href="#">Starting Soon</a></li>
                      <li><a href="#">Just Added</a></li>
                      <li><a href="#">Most Viewed</a></li>
                      <li><a href="#">Top Paid</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-4 col-sm-12">
                  <div className="footer_link_heading">
                    <h3>CATEGORIES</h3>
                  </div>
                  <div className="footer_menu">
                    <ul>
                      <li><a href="#">Arts & Design</a></li>
                      <li><a href="#">Business</a></li>
                      <li><a href="#">Computer</a></li>
                      <li><a href="#">Data entery</a></li>
                    </ul>
                  </div>
                </div>

                <div className="col-md-4 col-sm-12">
                  <div className="footer_link_heading">
                    <h3>USEFUL LINKS</h3>
                  </div>
                  <div className="footer_menu">
                    <ul>
                      <li><a href="#">FAQs</a></li>
                      <li><a href="#">Success Stories</a></li>
                      <li><a href="#">Shop</a></li>
                      <li><a href="#">Privacy policy</a></li>
                      <li><a href="#">Contact search</a></li>
                      <li><a href="#">Jobs and vacancies</a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
