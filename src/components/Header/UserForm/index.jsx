// User Form
import React from 'react';
import PropTypes from 'prop-types';
import './UserForm.css';

export default function UserForm(props) {
  const { active } = props;
  return (
    <form className={`user-form ${active ? 'active' : ''}`}>
      <h3>login now</h3>
      <div className="box">
        <input type="email" placeholder="Your Email" />
      </div>
      <div className="box">
        <input type="password" placeholder="Your Password" />
      </div>
      <p>
        forget your password
        {' '}
        <a href="/">click here</a>
      </p>
      <p>
        don&apos;t have an account
        {' '}
        <a href="/">create now</a>
      </p>
      <button type="submit" className="btn">
        login now
      </button>
    </form>
  );
}
UserForm.propTypes = {
  active: PropTypes.bool,
}.isRequired;
