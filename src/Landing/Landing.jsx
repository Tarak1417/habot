import React from 'react';
import './Landing.css'; 
import backgroundimage from "../Assets/image 1 (1).png";
import backgroundimage3 from "../Assets/Group 4.png"
import { MoveRight } from 'lucide-react';
import { FaUserPlus, FaFileAlt, FaClipboardCheck, FaHandshake } from "react-icons/fa";
import { FaLinkedin, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa';
import bag from "../Assets/suitcase 1.png"
import location from "../Assets/placeholder 1.png"

const Landing = () => {
  return (
    <div className="landing-page">
      <header className="navbar">
        <div className="logo">
          <img src={backgroundimage} alt="HABOT Logo" />
        </div>
        <div className='items'>
          <nav>
            <ul>
              <li>Find Suppliers</li>
              <li>Find Service Tags</li>
            </ul>
          </nav>
          <button className="login-signup">Login / Sign Up</button>
        </div>
      </header>

      <section className="hero-section">
        <h1>Are You a Supplier?</h1>
        <h2>Explore Matching Opportunities.</h2>
        <div className="search-container">
  <div className="input-with-icon">
    <img src={bag} alt="Service Icon" className="input-icon" />
    <input
      type="text"
      placeholder="Search your required service here"
      className="service-search"
    />
  </div>

  <div className="input-with-icon">
    <img src={location} alt="Location Icon" className="input-icon" />
    <input
      type="text"
      placeholder="Search your desired location here"
      className="location-search"
    />
  </div>

  <button className="search-button">Search</button>
</div>
        <div className="buyer-link">
          <p>
            Are you a buyer? <a href="/">Click here if you are looking to post a requirement</a>
          </p>
        </div>
      </section>

      <div className='belowContainer'>
        <section className="cta-section">
          <h2>Ready to dive into <span>HABOT</span>?</h2>
          <p>
            Signing up with HABOT opens the door to a world of new opportunities
            and potential for business growth. Gain access to a vibrant community
            of like-minded individuals, unlock valuable resources, and take the
            first step towards realizing your entrepreneurial dreams.
          </p>
          <button className="signup-button">Sign up Today! <MoveRight className='right'/> </button>
        </section>

        <section className="locations-section">
          <div className="location-buttons">
            <button>Abu Dhabi</button>
            <button>Dubai</button>
            <button>Sharjah & Ajman</button>
            <button>Fujairah</button>
            <button>Ras Al Khaimah</button>
            <button>Umm Al Quwain</button>
          </div>
        </section>
      </div>
      <div className="container">
      <div className="video-section">
        <iframe
          width="auto"
          height="315"
          src="https://www.youtube.com/embed/example-video-id"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="info-section">
        <div className="info-header">
          <span className="buyer active">Buyer</span>
          <span className="suppliers">Supplier</span>
        </div>
        <ul className="info-list">
          <li>✅ Post your requirements.</li>
          <li>✅ Sit back for multiple suppliers to contact you.</li>
          <li>✅ Choose among the suppliers based on the ratings and reviews.</li>
        </ul>
      </div>
    </div>
    <div className='supplier'>
   <h1>Lets Suppliers <span className='find'>Find You</span> </h1>
   <button className='getbutton'>get Verified</button>
    </div>
    <div className="how-it-works">
      <h2>How it works?</h2>
      <p className="description">
        Buyers post their needs and review top suppliers, while suppliers complete profiles, 
        connect with potential buyers, and build successful business relationships, 
        sharing valuable feedback.
      </p>
      
      <div className="steps-container">
        <div className="step-box1">
          <FaUserPlus className="icon" />
          <h3>Select Your Role and Sign Up</h3>
        </div>
        <div className="step-box">
          <FaUserPlus className="icon" />
          <h3>Select Your Role and Sign Up</h3>
        </div>
        <div className="step-box3">
          <FaFileAlt className="icon" />
          <h3>Buyers Post Your Requirements</h3>
        </div>
        <div className="step-box">
          <FaClipboardCheck className="icon" />
          <h3>Review, Select, and Contact the Best Suppliers</h3>
        </div>
        <div className="step-box4">
          <FaClipboardCheck className="icon" />
          <h3>Suppliers Complete Profile and Get Notified</h3>
        </div>
        <div className="step-box">
          <FaHandshake className="icon" />
          <h3>Both Parties Connect and Leave Feedback</h3>
        </div>
      </div>
    </div>
    <footer className="footer">
        <hr/>
      <div className="footer-content">
        <div className="footer-logo">
          <img src={backgroundimage3} alt="Habot Logo" />
          <p>© R Singhania</p>
        </div>

        <div className="footer-section">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Terms</h4>
          <ul>
            <li><a href="#">Data privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Accessibility</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Related</h4>
          <ul>
            <li><a href="#">Find Buyer</a></li>
            <li><a href="#">Feedback</a></li>
          </ul>
        </div>

        <div className="footer-social">
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaInstagram /></a>
        </div>
      </div>
      <hr/>
    </footer>
    </div>
  );
};

export default Landing;
