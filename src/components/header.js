import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import Logo from '../images/iot2019.png'

const handleClick = ev => {
  ev.preventDefault()
  const element = document.getElementById('nav')
  element.classList.toggle('block')
  element.classList.toggle('hidden')
}

const Header = () => {
  const handleClick = function(e) {
    const el = document.getElementById("nav");

    e.preventDefault();
    el.classList.toggle("block");
    el.classList.toggle("hidden");
  };

  return (
    <nav className="bg-teal">
      <div className="flex flex-wrap items-center justify-between max-w-xl mx-auto p-4 md:p-8">
        <Link to="/" className="flex items-center no-underline text-white">
        <img className="h-auto" src={Logo} alt="IoT2019"/>
        
        </Link>

        <button
          className="block md:hidden border border-white flex items-center px-3 py-2 rounded text-white"
          onClick={handleClick}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>

        <div
          id="nav"
          className="hidden md:flex md:items-center w-full md:w-auto"
        >
          <div className="text-xl">
            <Link
              to="/cfp"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white"
            >
              CFP
            </Link>

            <Link
              to="/attending"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
            >
              Attending
            </Link>
            <Link
              to="/registration"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
            >
              Registration
            </Link>

            <Link
              to="/program"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
            >
              Program
            </Link>
            
            <Link
              to="/keynotes"
              className="block mt-4 md:inline-block md:mt-0 mr-6 no-underline text-white"
            >
              Keynotes
            </Link>
            <Link
              to="/committee"
              className="block md:inline-block mt-4 md:mt-0 mr-6 no-underline text-white"
            >
              Committee
            </Link>

            <Link
              to="/sponsoring"
              className="block md:inline-block mt-4 md:mt-0 no-underline text-white"
            >
              Sponsoring
            </Link>
            
            

          </div>
        </div>
      </div>
    </nav>
  );
};

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
