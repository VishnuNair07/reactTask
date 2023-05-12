import React from 'react';
import './Footer.css';
import img1 from '../Images/Text1.svg';
import img2 from '../Images/logo2.svg';

function Footer() {
  return (
    <div className='main'>
      <footer>
        <div class="top">
          <div class="pages">
            <div className='about'>
              <img className="img1" src={img2} alt="img" />
              <img src={img1} className="img2" alt="img" />
              <p>By leveraging our full spectrum strategy, design, and technology capabilities, we deliver game-changing outcomes for our clients around the world.</p>
            </div>

            <ul>
              <h3>Locations</h3>
              <li><a href="/">Toronto</a></li>
              <li><a href="/">New Delhi</a></li>
            </ul>

            <ul>
              <h3>Services</h3>
              <li><a href="/">Complete AI + RPA Automation</a></li>
              <li><a href="/">Cloud Services</a></li>
              <li><a href="/">Delivery Pipeline Automation</a></li>
              <li><a href="/">Simplify Cloud Ops</a></li>
              <li><a href="/">Build Better Apps</a></li>
            </ul>

            <ul>
              <h3>XivTech</h3>
              <li><a href="/">About</a></li>
              <li><a href="/">Careers</a></li>
              <li><a href="/">Contact</a></li>
            </ul>
          </div>

        </div>

        <div class="info">
          <div class="copyright">&copy;2021 XivTech, Inc. All Rights Reserved</div>
        </div>
      </footer>
    </div>
  )
}

export default Footer
