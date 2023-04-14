import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';

import './Blogs.css';

export default function Blogs() {
  return (
    <section className="blogs" id="blogs">
      <h1 className="heading">
        our
        {' '}
        <span>blogs</span>
      </h1>
      <div className="box-container">
        <div className="box">
          <img src="image/blog-1.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by Red
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                2nd April, 2023
              </a>
            </div>
            <h3> Variety Of Products </h3>
            <p>We support small-scale businesses, putting Indian products on the global market .</p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>
        <div className="box">
          <img src="image/blog-2.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by Blue
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                1st April, 2023
              </a>
            </div>
            <h3>Organic Vegetables And Fruits</h3>
            <p>All of our products are sustainable and contain minimal exposure to chemicals.</p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>
        <div className="box">
          <img src="image/blog-3.jpg" alt="" />
          <div className="content">
            <div className="icons">
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faUser} />
                </i>
                by Green
              </a>
              <a href="/">
                <i>
                  <FontAwesomeIcon icon={faCalendar} />
                </i>
                3rd May, 2023
              </a>
            </div>
            <h3>Eco-friendly</h3>
            <p>The products are friendly to the environment & do not contain harmful pollutants.</p>
            <a href="/" className="btn">
              read more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
