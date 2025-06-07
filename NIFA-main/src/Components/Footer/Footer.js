import React from 'react';
import './Footer.css'
import gplay from '../images/gplay.png'
import appstore from '../images/appstore.png'

const Footer = () => {
  return (
    <div>
        <div className="whatsapp">
            <a href="https://wa.me/9555112200" target="_blank"><i class="fa-brands fa-whatsapp"></i></a>
        </div>
      <div className="footer">
          <footer>
            <div className="footer-section1">
            <div className='company'>
                <h2>Company</h2>
                <ol>
                    <li><a href="">About</a></li>
                    <li><a href="">Facilities</a></li>
                    <li><a href="">Career</a></li>
                    <li><a href="">Contact Us</a></li>
                    <li><a href="">Terms & Conditions</a></li>
                    <li><a href="">Refund Policy</a></li>
                    <li><a href="">Privacy Policy</a></li>
                </ol>
            </div>
            <div className="Activities">
                <h2>Activities</h2>
                <ol>
                    <li><a href="">Art Gallery</a></li>
                    <li><a href="">Workshops</a></li>
                    <li><a href="">Outdoor Activities</a></li>
                    <li><a href="">Media Coverage</a></li>
                    <li><a href="">Art Events</a></li>
                    <li><a href="">Exhibition</a></li>
                    <li><a href="">Daily Activities</a></li>
                </ol>
            </div>
            <div className="PopularCourse">
                <h2>Popular Course</h2>
                <ol>
                    <li><a href="">Diploma In Fine Arts</a></li>
                    <li><a href="">Certificate Hobby Course</a></li>
                    <li><a href="">Entrance Preparation</a></li>
                    <li><a href="">BFA</a></li>
                    <li><a href="">Animation Sketching</a></li>
                    <li><a href="">Kids Diploma</a></li>
                </ol>
            </div>
            <div className="OurLocations">
                <h2>Our Locations</h2>
                <ol>
                    <li><a href="">Gurgaon (Dlf Phase - 4)</a></li>
                    <li><a href="">Mumbai (Andheri West)</a></li>
                    <li><a href="">South Delhi (Kailash Colony)</a></li>
                </ol>
                <div className="InternationalBranches">
                    <h2>International Branches</h2>
                    <ol>
                        <li><a href="">London</a></li>
                        <li><a href="">USA</a></li>
                        <li><a href="">Dubai, UAE</a></li>
                    </ol>
                </div>
            </div>
            </div>
            <div className="footer-section">
            <div className="part1">
                <h2>NIFA Is A Unit Of Nifaedutech Pvt Ltd.</h2>
                <h2>Connect With Us:</h2>
                <a href="tel:9555112200">9555112200</a> &nbsp;
                <a href="tel:9810130552">9810130552</a> <br />
                <a href="mailto:admission@nifafinearts.com">admission@nifafinearts.com</a>
                <div className="footer-icons">
                <a href="http://"><i class="fab fa-facebook-f"></i></a> &nbsp;
                <a href="http://"><i class="fab fa-twitter"></i></a> &nbsp;
                 <a href="http://"><i class="fab fa-instagram"></i></a> &nbsp;
                 <a href="http://"><i class="fab fa-youtube"></i></a>
                </div>
            </div>
            <div className="part2">
                <h2>Download The App</h2>
                <a href="/"><img src={gplay} alt="" /></a>
                <a href="/"><img src={appstore} alt="" /></a>
                <p>© Copyright 2021 NIFA Fine Arts. All Rights Reserved.</p>
            </div>
          </div>
          </footer>
      </div>
    </div>
  )
}

export default Footer;
