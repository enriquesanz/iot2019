import React from "react";
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import ACM from '../images/endorsements/ACM.jpg'
import SIGCHI from '../images/endorsements/sigchi.jpg'
import ICPS from '../images/endorsements/ICPS_small.jpg'


const Sponsors = () => (
    <div>
        
        <p className="flex justify-center">
        
        
        </p>

        <div className="flex">
                <div className="flex-1 text-grey-darker text-center  px-30 py-2 m-2"><img src={ACM} /></div>
                <div className="flex-1 text-grey-darker text-center  px-30 py-2 m-2"><img src={SIGCHI} /></div>
                <div className="flex-1 text-grey-darker text-center  px-30 py-2 m-2"><img src={ICPS} /></div>
                
        </div>
    
        <div className="flex">
            <div className="flex-1 text-grey-darker text-center bg-grey-light px-30 py-2 m-2"><a class="no-underline hover:border-purple-light " href="https://www.facebook.com/Iot-conference-2019-348587342715269/" target="_blank" rel="noopener noreferrer">< FaFacebookF /></a></div>
            <div className="flex-1 text-grey-darker text-center bg-grey-light px-30 py-2 m-2"><a class="no-underline hover:border-purple-light" href="https://twitter.com/iot2019" target="_blank" rel="noopener noreferrer">< FaTwitter /></a></div>
            <div className="flex-1 text-grey-darker text-center bg-grey-light px-30 py-2 m-2"><a class="no-underline hover:border-purple-light" href="https://www.instagram.com/iotconference2019/" target="_blank" rel="noopener noreferrer">< FaInstagram /></a></div>
        </div>

  </div>
);

export default Sponsors;
