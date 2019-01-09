import React from 'react'

import Layout from '../components/layout'
import Sponsors from "../components/sponsors";
import Publishers from "../components/publishers";

const AboutPage = () => (
  <Layout>
    

    <div className="flex flex-col md:flex-row items-center">
      <div className="md:w-3/3 md:mr-8">
        <p className="border-l-4 border-grey-darkest font-serif leading-loose pl-4 text-justify">
          The International Conference on the Internet of Things offers a unique opportunity for organizations to introduce their latest products and research, gain feedback and establish collaborative relationships with an international audience of technical and business leaders in the Internet of Things (IoT) field. We sincerely look forward to your participation and support. 
          <br/><br/>
          We offer five corporate support levels: Platinum, Gold, Silver, and Bronze
          
          <br/>
          Sponsors should contact IoT2019 organizing chair by email (<strong>iot2019@deusto.es</strong>).

        </p>

        
      </div>

    <p>

     <h3>Sponsors</h3>

        <div className="flex bg-grey-lighter">
                <div className="flex-1 text-grey-darker text-center bg-grey-light px-30 py-2 m-2"><img src="https://via.placeholder.com/350x150?text=Sponsor+PLATINIUM+logo+here" /></div>
                <div className="flex-1 text-grey-darker text-center bg-grey-light px-30 py-2 m-2"><img src="https://via.placeholder.com/350x150?text=Sponsor+GOLD+logo+here" /></div>
                <div className="flex-1 text-grey-darker text-center bg-grey-light px-30 py-2 m-2"><img src="https://via.placeholder.com/350x150?text=Sponsor+SILVER+logo+here" /></div>
                <div className="flex-1 text-grey-darker text-center bg-grey-light px-30 py-2 m-2"><img src="https://via.placeholder.com/350x150?text=Sponsor+BRONZE+logo+here" /></div>
        </div>


    </p>
    </div>
  </Layout>
);

export default AboutPage
