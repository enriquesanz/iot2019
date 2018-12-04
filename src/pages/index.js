import React from "react";
import Link from "gatsby-link";
import Chilling from "../images/gugge.jpg";
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import GatsbyLink from "gatsby-link";


const IndexPage = () => (
  <div className="text-center">
    <img src={Chilling} />
    <h2 className="bg-yellow inline-block my-8 p-3">
    The 9th International Conference on the Internet of Things (IoT 2019)
Bilbao, Spain
22-25th, October 2019

    </h2>
    <p className="leading-loose">
      The 9th International Conference on the Internet of Things (IoT 2019) hosted by the University of Deusto will take place from October 22–25, 2019 in Bilbao, Spain.

    </p>
    <br/>
    <p>
    <div className="md:w-3/3 md:mr-8">
      <p className="border-l-4 border-grey-darkest font-serif leading-loose pl-4 text-justify">
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
      </p>
    </div>
    <br/>

    <div className="flex bg-grey-lighter">
      <div className="flex-1 text-grey-darker text-center bg-grey-light px-30 py-2 m-2">< FaFacebookF /></div>
      <div className="flex-1 text-grey-darker text-center bg-grey-light px-30 py-2 m-2">< FaTwitter /></div>
      <div className="flex-1 text-grey-darker text-center bg-grey-light px-30 py-2 m-2">< FaLinkedinIn /></div>
    </div>


      {/* <a
        href="https://tailwindcss.com/"
        className="font-bold no-underline text-grey-darkest"
      >
        Tailwind
      </a>, a utility-first CSS framework. */}
    </p>
  </div>
);

export default IndexPage;
