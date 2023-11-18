import React, { useState, useRef } from 'react';
import Service from '../serviceImg/repair.jpg';
import repair from '../serviceImg/Service.png';
import install from '../serviceImg/install.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import ACservice from '../serviceImg/repair.png';
import replace from '../serviceImg/image4.png';
import leak from '../serviceImg/Geyser checkupservice.png';
import bad from '../serviceImg/image7.png';
import installation from '../serviceImg/wiring.png';
import uninstall from '../serviceImg/Service.png';
import wiring from'../serviceImg/wiring.png';
import "../Services/Geyser.css";




function GeyserContainer() {
  const [selectedService, setSelectedService] = useState('Service');
  const serviceRef = useRef(null);
  const repairRef = useRef(null);
  const installRef = useRef(null);

  const scrollToRef = (ref) => {
    if (ref.current) {
      window.scrollTo({
        top: ref.current.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  const handleServiceClick = (service, ref) => {
    setSelectedService(service);
    scrollToRef(ref);
  };

  return (
    <div className="container-main">
       <h1>Geyser Repair</h1>
      <h4><FontAwesomeIcon icon={faStar} className="star-icon" /> 4.7 (6.3 booking)</h4>
      <div className="Service">
        <p>Select a Service:</p>
        <hr />
        <ul className="service-list">
          <ServiceItem
            icon={Service}
            title="Repair"
            selected={selectedService === 'Service'}
            onClick={() => handleServiceClick('Service', serviceRef)}
          />
          <ServiceItem
            icon={repair}
            title="Servicing"
            selected={selectedService === 'Repair & Gas Refill'}
            onClick={() => handleServiceClick('Repair & Gas Refill', repairRef)}
          />
          <ServiceItem
            icon={install}
            title="Installation"
            selected={selectedService === 'Install & Uninstall'}
            onClick={() => handleServiceClick('Install & Uninstall', installRef)}
          />
        </ul>
      </div>
      <div className="Mainimg"><img src={wiring} alt="" /></div>
      <div className="name-box-gy" id="carouselExampleIndicators">
      <div id="service" className="cart-box-gy" ref={serviceRef}>
        <h2>Repair</h2>
        <div className="card-content-gy">
          <div className="card-body-gy">
            <span>30 DAYS WARRANTY</span>
            <h5 className="card-title">Water leakage</h5>
            <p>
              <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.1 review)
            </p>
            <hr />
            <ul>
              <li>Preventive Maintenance.</li>
              <li>Tank Leak.</li>
              <li>Drain Valve.</li>
            </ul>
           
          </div>
          <img
            className="card-img-top-gy"
            src={ACservice}
            alt="service"
            onClick={() => scrollToRef(serviceRef)}
          />
           <a href="/book-now-page">Book Now</a>
        </div>
      </div>
      <hr style={{ width: '90%', textAlign: 'left', marginLeft: '25px' }} />
      <div className="cart-box-gy">
        <div className="card-content-gy">
          <div className="card-body-gy">
            <span>30 DAYS WARRANTY</span>
            <h5 className="card-title">Gesyer Checkup</h5>
            <p>
              <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.3 (1.254 review)
            </p>
            <hr />
            <ul>
              <li>Inspect the Anode Rod.</li>
              <li>Temperature Setting.</li>
              <li>Safety Check,Visual Inspection</li>
            </ul>
         
          </div>
          <img
            className="card-img-top-gy"
            src={replace}
            alt="Card image cap"
            onClick={() => scrollToRef(repairRef)}
          />
           <a href="/book-now-page">Book Now</a>
        </div>
        
      </div>
     <hr style={{ width: '90%', textAlign: 'left', marginLeft: '25px' }} />
      <div id="repair" className="cart-box-gy" ref={repairRef}>
        <h2>Servicing</h2>
        <div className="card-content-gy">
          <div className="card-body-gy">
            <span>30 DAYS WARRANTY</span>
            <h5 className="card-title">Geyser Servicing</h5>
            <p>
              <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.1 (1.31 review)
            </p>
            <hr />
            <ul>
              <li>Tightening and Replacing Parts.</li>
              <li>Turn Power and Water Back On.</li>
              <li>Testing,Service Report.</li>
            </ul>
           
          </div>
          <img
            className="card-img-top-gy"
            src={leak}
            alt="repair"
            onClick={() => scrollToRef(repairRef)}
          />
           <a href="/book-now-page">Book Now</a>
        </div>
      
      </div>
     <hr style={{ width: '90%', textAlign: 'left', marginLeft: '25px' }} />
      <div className="cart-box-gy">
        <div className="card-content-gy">
          <div className="card-body-gy">
            <span>30 DAYS WARRANTY</span>
            <h5 className="card-title">Geyser not heating</h5>
            <p>
              <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.5 (1.178 review)
            </p>
            <hr />
            <ul>
              <li>Vent and Exhaust (for gas geysers).</li>
              <li>Check the Power Supply,Gas Supply.</li>
              <li>Other Malfunctions.</li>
            </ul>
         
          </div>
          <img
            className="card-img-top-gy"
            src={bad}
            alt="Card image cap"
            onClick={() => scrollToRef(repairRef)}/>
             <a href="/book-now-page">Book Now</a>
        </div>
      </div>
     <hr style={{ width: '90%', textAlign: 'left', marginLeft: '25px' }} />

      <div id="install" className="cart-box-gy" ref={installRef}>
        <h2>Install & Uninstall</h2>
        <div className="card-content-gy">
          <div className="card-body-gy">
            <span>30 DAYS WARRANTY</span>
            <h5 className="card-title">Geyser Installation</h5>
            <p>
              <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.8 (1.51 review)
            </p>
            <hr />
            <ul>
              <li>Choose a Location.</li>
              <li>Mounting the Geyser.</li>
              <li>Water Supply and Discharge.</li>
              <li>Testing and Balancing</li>
            </ul>
        
          </div>
          <img
            className="card-img-top-gy"
            src={installation}
            alt="Install"
            onClick={() => scrollToRef(installRef)}
          />
           <a href="/book-now-page">Book Now</a>
        </div>
      </div>
     <hr style={{ width: '90%', textAlign: 'left', marginLeft: '25px' }} />
      <div className="cart-box-gy">
        <div className="card-content-gy">
          <div className="card-body-gy">
            <span>30 DAYS WARRANTY</span>
            <h5 className="card-title">Geyser uninstallation</h5>
            <p>
              <FontAwesomeIcon icon={faStar} className="star-icon" /> 4.9 (1.351 review)
            </p>
            <hr />
            <ul>
              <li>Safety Precautions.</li>
              <li>Disconnect Electrical.</li>
              <li>Disconnect Water Pipes.</li>
            </ul>
           
          </div>
          <img
            className="card-img-top-gy"
            src={uninstall}
            alt="Card image cap"
            onClick={() => scrollToRef(installRef)}
          />
           <a href="/book-now-page">Book Now</a>
        </div>
      </div>
     <hr style={{ width: '90%', textAlign: 'left', marginLeft: '25px' }} />
    </div>
    </div>
  );
}

function ServiceItem({ icon, title, selected, onClick }) {
  return (
    <li onClick={onClick}>
      <img src={icon} alt={title} className={`service-image ${selected ? 'selected' : ''}`} />
      {title}
    </li>
  );
}

export default GeyserContainer;