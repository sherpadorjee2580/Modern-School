import React from "react";
import "./style/Footer.css";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok,
} from "react-icons/fa";

const Footer = () => {
  const footerTop = [
    { icon: "🗺️", title: "Find Us", desc: "Boudha, Tushal,Kathmandu" },
    { icon: "📞", title: "Call Us", desc: "014570224(Bachelors & Masters" },
    { icon: "✉️", title: "Mail Us", desc: "info@saraswati.edu.np" },
  ];

  const socialMedia = [
    {
      icon: <FaFacebook />,
      link: "https/Facebook.com",
      backgroundColor: "blue",
    },
    {
      icon: <FaTwitter />,
      link: "https/Facebook.com",
      backgroundColor: "rgb(0,195,255)",
    },
    {
      icon: <FaInstagram />,
      link: "https/Facebook.com",
      backgroundColor: "pink",
    },
    {
      icon: <FaYoutube />,
      link: "https/Facebook.com",
      backgroundColor: "red",
    },
    {
      icon: <FaLinkedin />,
      link: "https/Facebook.com",
      backgroundColor: "blue",
    },
    {
      icon: <FaTiktok />,
      link: "https/Facebook.com",
      backgroundColor: "blue",
    },
  ];

  const usefulLink = [
    { name: "Calendar", link: "path" },
    { name: "About Us", link: "path" },
    { name: "Choose", link: "path" },
    { name: "Contact", link: "path" },
    { name: "Excellence", link: "path" },
    { name: "Nothing", link: "path" },
  ];

  const help = [
    { name: "FAQs", link: "facebook.com" },
    { name: "Contact", link: "facebook.com" },
  ];

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__top-row">
            {footerTop.map((item) => (
              <div key={item} className="footer__top-col">
                <div className="footer__top-col-left">
                  <p className="footer__top-icon"> {item.icon} </p>
                </div>
                <div className="footer__top-col-right">
                  <p className="footer__top-title"> {item.title} </p>
                  <p className="footer__top-desc"> {item.desc} </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="footer__middle">
          <div className="footer__middle-left">
            <div className="footer__middle-txt">
              <p className="footer__middle-txt-title">Saraswati School</p>
              <p className="footer__middle-txt-desc">
                Since its establishment in 2046 BS, Saraswati School has been
                providing global 21st-century college education in Nepal.Being
                graduating from the largest cohorts of students, Saraswati
                School is the ideal partner for students that demand
                high-quality education services, meeting the most demanding
                academic requirements.Saraswati School activ...
              </p>
              <div className="footer__middle-txt-links">
                <p className="footer__middle-txt-links-title">Follow Us</p>
                <div className="footer__middle-txt-links-linkContainer">
                  {socialMedia.map((item) => (
                    <a
                      href={item.link}
                      style={{ backgroundColor: item.backgroundColor }}
                      className="link"
                    >
                      {" "}
                      {item.icon}{" "}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="footer__middle-mid">
            <p className="footer__middle-mid-title">Useful Links</p>
            <ul>
              {usefulLink.map((item) => (
                <li>
                  <a href={item.link} key={item}>
                    {" "}
                    {item.name}{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer__middle-right">
            <div className="subscribe">
              <p className="subscribe__title">Subscribe</p>
              <p className="subscribe__desc">
                Don’t miss to subscribe to our new feeds, kindly fill the form
                below.
              </p>
              <form className="subscribe__input" action="">
                <input type="email" placeholder="Subscription Email" />
                <button>➡️</button>
              </form>
            </div>
            <div className="help">
              <p className="help__title">Help & Support</p>
              <p className="help__desc">
                If you have any problem, feel free to contact us. We will make
                sure to clear all your problem. Thank You!!
              </p>
              <div className="link">
                {help.map((item) => (
                  <a key={item} href={item.link}>
                    {" "}
                    {item.name}{" "}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="footer__buttom"></div>
      </div>
    </footer>
  );
};

export default Footer;
