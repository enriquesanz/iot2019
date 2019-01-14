import React from 'react'

import Layout from '../components/layout'
import Sponsors from "../components/sponsors";
import Publishers from "../components/publishers";

const AboutPage = () => (
  <Layout>
    

    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/3 md:mr-8">
        <p className="border-l-4 border-red-light font-sans leading-normal pl-4 text-lg text-justify">
          <h1 className="text-grey-darker font-serif">Sponsoring</h1>
          The International Conference on the Internet of Things offers a unique opportunity for organizations to introduce their latest products and research, gain feedback and establish collaborative relationships with an international audience of technical and business leaders in the Internet of Things (IoT) field. We sincerely look forward to your participation and support. 
          <br/><br/>
          We offer five corporate support levels: Platinum, Gold, Silver, and Bronze. Our sponsorship packages range from €1,000 to €20,000 but we also customize them depending on your needs.
          
          <br/>
          <br/>
          Sponsors should contact IoT2019 organizing chair by email (<strong>iot2019@deusto.es</strong>).

        </p>

        
      </div>

    <p>
    

      <div className="flex flex-col bg-grey-lighter">
        <div className="w-full"><img src="https://via.placeholder.com/350x150?text=Sponsor+PLATINIUM+logo+here" /></div>
        <div className="w-full"><img src="https://via.placeholder.com/350x150?text=Sponsor+GOLD+logo+here" /></div>
        <div className="w-full"><img src="https://via.placeholder.com/350x150?text=Sponsor+SILVER+logo+here" /></div>
        <div className="w-full"><img src="https://via.placeholder.com/350x150?text=Sponsor+BRONZE+logo+here" /></div>
       
      </div>
    </p>
    </div>
  </Layout>
);

export default AboutPage
