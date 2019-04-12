import React from 'react'
import SEO from '../components/seo'
import Layout from '../components/layout'
import Sponsors from "../components/sponsors";
import Publishers from "../components/publishers";
import PackagesIoT from "../files/IoT-Sponsorship-Offers.pdf";
import ComSoc from "../images/sponsors/logoIoT.png";
import EC from "../images/sponsors/EC-Council.png";
import Deusto from "../images/sponsors/Deusto.jpeg";
import FI from '../images/SI/futureinternet-logo.png'

const SponsorsPage = () => (
  <Layout>
    
    <SEO
      title="Sponsors"
      keywords={[`iot2019`, `conference`, `iot` ]}
    />
    
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/3 md:mr-8">
        <p className="border-l-4 border-red-light font-sans leading-normal pl-4 text-lg text-justify">
          <h1 className="text-grey-darker font-serif">Sponsoring</h1>
          The International Conference on the Internet of Things offers a unique opportunity for organizations to introduce their latest products and research, gain feedback and establish collaborative relationships with an international audience of technical and business leaders in the Internet of Things (IoT) field. We sincerely look forward to your participation and support. 
          <br/><br/>
          We offer five corporate support levels: Platinum, Gold, Silver, and Bronze. Our sponsorship packages range from €1,000 to €10,000 but we also customize them depending on your needs. 
          Please, download the <a class="no-underline text-teal hover:font-bold" href={PackagesIoT} target="_blank" rel="noopener noreferrer">pdf file</a> where the sponsoring packages are explained.
          
          <br/>
          <br/>
          Sponsors should contact IoT2019 organizing chair by email (<strong>iot2019@deusto.es</strong>).

        </p>

        
      </div>

    <p>
    

      <div className="flex flex-col ">
        <p className="text-sm text-dark flex items-center">
          <strong>Sponsors</strong>
        </p>
        <div className="w-full"><a class="no-underline hover:border-purple-light " href="https://www.deusto.es/" target="_blank" rel="noopener noreferrer"><img src={Deusto} alt="Platinium"/></a></div>
        <div className="w-full"><img src="https://via.placeholder.com/350x150?text=Sponsor+GOLD+logo+here" alt="Gold"/></div>
      </div>
      <br/>
      <div className="flex flex-col ">
        <p className="text-sm text-dark flex items-center">
          <strong>Contributors</strong>
        </p>
      <div className="w-full"><img src="https://via.placeholder.com/350x150?text=Sponsor+SILVER+logo+here" alt="Silver"/></div>
      <div className="w-full"><img src="https://via.placeholder.com/350x150?text=Sponsor+BRONZE+logo+here" alt="Bronze"/></div>
      <div className="text-grey-darker text-center  px-30 py-2 m-2"><a class="no-underline hover:border-purple-light " href="https://www.mdpi.com/journal/futureinternet" target="_blank" rel="noopener noreferrer"><img src={FI}/></a></div>
      </div>
      <br/>

      <div className="flex flex-col">
        <p className="text-sm text-dark flex items-center">
          <strong>Friends of IoT Conference</strong>
        </p>
        <div className="text-grey-darker text-center  px-30 py-2 m-2"><a class="no-underline hover:border-purple-light " href="https://www.eccouncil.org/" target="_blank" rel="noopener noreferrer"><img src={EC} alt="EC"/></a></div>
        <div className="text-grey-darker text-center  px-30 py-2 m-2"><a class="no-underline hover:border-purple-light " href="http://iot.committees.comsoc.org/" target="_blank" rel="noopener noreferrer"><img src={ComSoc} alt="ComSoc"/></a></div>
      </div>        

    </p>
    </div>
  </Layout>
);

export default SponsorsPage
