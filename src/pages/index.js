import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import Index from "../images/index_resize.png";
import GatsbyLink from "gatsby-link";
import Sponsors from "../components/sponsors";
import Publishers from "../components/publishers";
import ACM from '../images/acm.png'

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
    <div className="flex">
      <div className="md:w-4/5 md:mr-8">
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
        and selected based on technical novelty, integrity of the analysis and social-environmental impacts and practical relevance.
        <br/>
        </p>
      </div>
      <div className="md:w-1/3 md:mr-8">
        <p className="border-l-4 border-purple-light font-sans leading-loose pl-4 text-left">
        <h4 className="font-serif text-grey-darker">Submission Key Dates:</h4>
        <ul className="sm:list-reset">
          <li><strong>Paper submission deadline:</strong><br/> June 2, 2019</li>
          <li><strong>Acceptance notice deadline:</strong><br/> July 14, 2019</li>
          <li><strong>Camera-ready deadline:</strong><br/> September 1, 2019</li>
          <li><strong>Conference:</strong><br/> October 22-25, 2019</li>
        </ul>
        </p>
        <br /><br /><br /><br /><br /><br />
        
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
    
    {/*<Publishers />*/}
    <Sponsors />

    </p>
    </div>
  </Layout>
)

export default IndexPage
