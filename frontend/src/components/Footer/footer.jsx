import React from 'react'
import { Link } from 'react-router-dom';

const footer = () => {
    const socialLinks = [
        { url: 'https://instagram.com', iconClass: 'fa-brands fa-instagram' },
        { url: 'https://facebook.com', iconClass: 'fa-brands fa-facebook' },
        { url: 'https://twitter.com', iconClass: 'fa-brands fa-twitter' },
        { url: 'https://twitter.com', iconClass: 'fa-brands fa-linkedin' },
        { url: 'https://twitter.com', iconClass: 'fa-brands fa-youtube' },
      ];
  
  return (
    <>
    <div className="sub_footer">
    Follow us to stay updated
    </div>
    <hr/>
      <div className="podFooter py-7">
        <div className="container">
          <ul className='d-flex justify-content-center align-items-center gap-5' >
          {socialLinks.map((link, index) => (
            <li key={index}>
              <Link to={link.url}>
                <i className={link.iconClass} style={{fontSize:"26px"}}></i>
              </Link>
            </li>
          ))}
          </ul>
        </div>
      </div>
      </>
  )
}

export default footer
