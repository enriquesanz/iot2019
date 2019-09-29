import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Index from "../images/index-with-logos.png";
import Sponsors from "../components/sponsors";
import FGCS from '../images/SI/FGCS.jpg'
import SENSORS from '../images/SI/sensors.png'
import PUC from '../images/SI/PUC.jpg'
import TRAN from '../images/SI/transactions.gif'
import { Link } from 'gatsby'


const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`IoT`, `IoT Conference`, `UbiComp`, `Smart Objects`, `Bilbao`]}
    />

    <div className="text-center">
    <section> 
        <img src={Index} alt="9th International Conference on the Internet of Things (IoT 2019)"/>
    </section>

    <br/>
    <div className="block xl:flex md:flex sm:block">
      <div className="flex-2 md:w-3/5 md:mr-20">
        <p className="font-sans leading-normal text-lg text-justify">
        
        The 9th International Conference on the Internet of Things (IoT 2019), building on the success of its predecessors since 2008, is the premier forum  to share, 
        discuss and witness cutting edge research in all areas of development for the Internet of Things.

        </p><br/>
        <p className="font-sans leading-normal text-lg text-justify">
        Pervasive connectivity, smart devices and demand for data testify to an IoT that will continue to grow by leaps and bounds. Computing power is dropping in price while new sensors 
        are being developed and incorporated into everyday objects, and as people buy into IoT technology, economies of scale lend themselves to the creation of ever more 
        data-centric businesses and applications. Instrumenting and connecting devices has massive potential to deliver a social and economic value.  
        However, there is need for a coordinated effort when rolling out the next generation of self-reporting paradigms. 
        </p>
        <br/>

        <p className="font-sans leading-normal text-lg text-justify">
        The Internet of Things Conference is seeking original, high impact research papers on all topics related to the development of the Internet of Things. Papers will be reviewed 
        and selected based on technical novelty, integrity of the analysis and social-environmental impacts and practical relevance. Have a look to the <strong><Link to="/cfp" className=" text-teal hover:text-red-light"> CFP</Link></strong>.
        <br/>
        </p>
        <br/>
        <h4 className=" font-serif text-grey-darker text-left">Special Issues:</h4>
        <div className="flex">
                <div className="flex-1 text-grey-darker text-center  px-30 py-2 m-2"><a class="no-underline hover:border-purple-light " href="https://www.journals.elsevier.com/future-generation-computer-systems/call-for-papers/special-issue-on-internet-of-people-human-driven-artificial" target="_blank" rel="noopener noreferrer"><img src={FGCS} alt="FGCS"/></a></div>
                <div className="flex-1 text-grey-darker text-center  px-30 py-2 m-2"><a class="no-underline hover:border-purple-light " href="https://www.mdpi.com/journal/sensors/special_issues/Fog_Edge_IoT?view=compact&listby=date" target="_blank" rel="noopener noreferrer"><img src={SENSORS} alt="Sensors"/></a></div>
                <div className="flex-1 text-grey-darker text-center  px-30 py-2 m-2"><a class="no-underline hover:border-purple-light " href="https://www.facebook.com/notes/personal-and-ubiquitous-computing/social-networks-and-social-ubiquitous-computing-cfp/10155773077520458/" target="_blank" rel="noopener noreferrer"><img src={PUC} alt="PUC"/></a></div>
                <div className="flex-1 text-grey-darker text-center  px-30 py-2 m-2"><a class="no-underline hover:border-purple-light " href="https://wol-prod-cdn.literatumonline.com/pb-assets/assets/21613915/Cross-layer%20innovations%20in%20Internet%20of%20Things%20050319.pdf" target="_blank" rel="noopener noreferrer"><img src={TRAN} alt="TRAN"/></a></div>
                
                
        </div>
        <br/>
      </div>

      <div className="flex-1 md:w-1 md:mr-8">
        <p className="border-l-4 border-purple-light font-sans leading-loose pl-4 text-left">
        <h4 className="font-serif text-grey-darker">Key Dates:</h4>
        <ul className="sm:list-reset">
          <li><strong>Paper submission:</strong><br/><strike className="text-red-light"> June 2, 2019</strike><br/> <strike className="text-teal"><strong className="text-teal text-lg">June 16, 2019</strong></strike></li>
          <li><strong>Acceptance notification:</strong><br/> <strike>July 21, 2019</strike></li>
          <li><strong>Camera-ready:</strong><br/> <strike>September 8, 2019</strike></li>
          <li><strong>Conference:</strong><br/> October 22-25, 2019</li>
        </ul>
        </p>
        <br /><br /><br /><br /><br /><br /><br />
        
        <p className=" font-sans leading-loose text-left border-l-4 border-purple-light pl-4">
          <h4 className=" font-serif text-grey-darker">Previous IoT conferences:</h4>
          <ul className="sm:list-reset">
            <li><strong><a class="no-underline text-teal" href="https://iot-conference.org/iot2018/" target="_blank" rel="noopener noreferrer">IoT 2018</a></strong> (Santa Barbara, USA)</li>
            <li><strong><a class="no-underline text-teal" href="https://iot-conference.org/iot2017/" target="_blank" rel="noopener noreferrer">IoT 2017</a></strong> (Linz, Austria)</li>
            <li><strong><a class="no-underline text-teal" href="https://iot-conference.org/iot2016/" target="_blank" rel="noopener noreferrer">IoT 2016</a></strong> (Stuttgart, Germany)</li>
            <li><strong><a class="no-underline text-teal" href="https://iot-conference.org/iot2015/" target="_blank" rel="noopener noreferrer">IoT 2015</a></strong> (Seoul, S. Korea)</li>
            <li><strong><a class="no-underline text-teal" href="https://iot-conference.org/iot2014/" target="_blank" rel="noopener noreferrer">IoT 2014</a></strong> (Cambridge, USA)</li>
            <li><strong><a class="no-underline text-teal" href="https://iot-conference.org/iot2012/" target="_blank" rel="noopener noreferrer">IoT 2012</a></strong> (Wuxi, China)</li>
            <li><strong><a class="no-underline text-teal" href="https://iot-conference.org/iot2010/" target="_blank" rel="noopener noreferrer">IoT 2010</a></strong> (Tokio, Japan)</li>
            <li><strong><a class="no-underline text-teal" href="https://iot-conference.org/iot2008/" target="_blank" rel="noopener noreferrer">IoT 2008</a></strong> (Zurich, Switzerland)</li>
          </ul>
        </p>
      </div>
    </div>
    <br/><br/>
    <p>
    
    <Sponsors />

    </p>
    </div>
  </Layout>
)

export default IndexPage
