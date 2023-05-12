import React from 'react'
import './Collaborate.css';
import img1 from '../Images/img1.jpg'
import img2 from '../Images/img2.png'
import img3 from '../Images/img3.jpg'
import img4 from '../Images/img4.jpg'


function Collaborate() {
  return (
    <div className='main'>
      <h4>Let's Collaborate</h4>
      <div className='container'>
        <div className='card'>

          <div className='card-body'>
            <div className='card-text'>
              <h2>AI + RPA is what we do</h2>
              <p>
                <div className="servicesH3">
                  <h3>Future-Proof your business. Drive efficiency, profitability and deliver on customer experience</h3>
                </div>
              </p>
            </div>
            <div className="servicesP"><a href="/services/AIandRPAautomation"><p>AI + RPA Automation</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>

            </a></div>
          </div>
          <img src={img1} alt='img' />
        </div>
      </div>


      <div className='container'>
        <div className='card'>

          <div className='card-body'>
            <div className='card-text'>
              <h2>Make Bolder Choices</h2>
              <p>
                <div className="servicesH3">
                  <h3>Digital focused strategies to realize market-changing ideas</h3>
                </div>
              </p>
            </div>
            <div className="servicesP"><a href="/services/AIandRPAautomation"><p>Build Better Apps</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>

            </a></div>
          </div>
          <img src={img2} alt='img' />
        </div>
      </div>



      <div className='container'>
        <div className='card'>

          <div className='card-body'>
            <div className='card-text'>
              <h2>Innovate with Speed</h2>
              <p>
                <div className="servicesH3">
                  <h3>Create higher quality software, deliver on customer expectations and business goals</h3>
                </div>
              </p>
            </div>
            <div className="servicesP"><a href="/services/AIandRPAautomation"><p>DevOps</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>

            </a></div>
          </div>
          <img src={img3} alt='img' />
        </div>
      </div>


      <div className='container'>
        <div className='card'>

          <div className='card-body'>
            <div className='card-text'>
              <h2>Embrace Cloud</h2>
              <p>
                <div className="servicesH3">
                  <h3>With Cloud-First accelerate innovation and optimize performance</h3>
                </div>
              </p>
            </div>
            <div className="servicesP"><a href="/services/AIandRPAautomation"><p>Cloud Services</p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" />
              </svg>

            </a></div>
          </div>
          <img src={img4} alt='img' />
        </div>

      </div>

      <button type="button" variant="primary" class="button-24">Get in touch</button>


    </div>
  )
}

export default Collaborate
