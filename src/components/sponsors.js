import React from "react";
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';

const Sponsors = () => (
    <div>
        
        <p className="flex justify-center">
            <h3 className="font-serif text-grey-darker">Sponsors</h3>
        </p>

        <div className="flex">
                <div className="flex-1 text-grey-darker text-center  px-30 py-2 m-2"><img src="https://via.placeholder.com/350x150?text=Sponsor+PLATINIUM+logo+here" /></div>
                <div className="flex-1 text-grey-darker text-center  px-30 py-2 m-2"><img src="https://via.placeholder.com/350x150?text=Sponsor+SILVER+logo+here" /></div>
                <div className="flex-1 text-grey-darker text-center  px-30 py-2 m-2"><img src="https://via.placeholder.com/350x150?text=Sponsor+BRONZE+logo+here" /></div>
                
        </div>

        <div className="flex bg-grey-lighter">
            <div className="flex-1 text-grey-darker text-center bg-grey-light px-30 py-2 m-2">< FaFacebookF /></div>
            <div className="flex-1 text-grey-darker text-center bg-grey-light px-30 py-2 m-2">< FaTwitter /></div>
            <div className="flex-1 text-grey-darker text-center bg-grey-light px-30 py-2 m-2">< FaLinkedinIn /></div>
        </div>

  </div>
);

export default Sponsors;
