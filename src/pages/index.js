import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Index from "../images/index.png";
import ACM from "../images/acm.png";
import CHI from "../images/chi.png";
import ICPS from "../images/icps.jpg";
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import GatsbyLink from "gatsby-link";
import Sponsors from "../components/sponsors";
import Publishers from "../components/publishers";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />

    <div className="text-center">
    <section>
      <img src={Index} />
    
    </section>

    <br/>
    <div className="flex">
    <div className="md:w-2/3 md:mr-8">
      <p className="font-sans leading-normal text-lg text-justify">
      
      The 9th International Conference on the Internet of Things (IoT 2019), building on the success of its predecessors since 2008, is the premier forum for such efforts, to share, 
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
      </p>
    </div>
    <div className="md:w-2/3 md:mr-8">
      <p className="border-l-4 border-purple-light font-sans leading-loose pl-4 text-justify">
      <h3 className=" font-serif text-grey-darker">Paper Submission Key Dates:</h3>
      <ul >
        <li><strong>Paper submission deadline:</strong><br/> Friday, May 3, 2019</li>
        <li><strong>Papers camera ready deadline:</strong><br/> Thursday, July 4, 2019</li>
        <li><strong>Conference:</strong><br/> October 22-25, 2019</li>
      </ul>
      </p>
      <br /><br /><br />
    
    </div>
    
    </div>
    <br/>
    <p>
    <p className=" font-sans leading-loose  text-justify ">
      <h4 className=" font-serif text-grey-darker">Previous IoT conferences:</h4>
      <ul className="sm:list-reset">
        <li><strong><a class="no-underline text-teal" href="https://iot-conference.org/iot2018/" target="_blank">IoT 2018</a></strong> (Santa Barbara, USA)</li>
        <li><strong><a class="no-underline text-teal" href="https://iot-conference.org/iot2017/" target="_blank">IoT 2017</a></strong> (Linz, Austria)</li>
        <li><strong><a class="no-underline text-teal" href="https://iot-conference.org/iot2016/" target="_blank">IoT 2016</a></strong> (Stuttgart, Germany)</li>
        <li><strong><a class="no-underline text-teal" href="https://iot-conference.org/iot2015/" target="_blank">IoT 2015</a></strong> (Coex, Seoul, S. Korea)</li>
        <li><strong><a class="no-underline text-teal" href="https://iot-conference.org/iot2014/" target="_blank">IoT 2014</a></strong> (MIT, Cambridge, USA)</li>
        <li><strong><a class="no-underline text-teal" href="https://iot-conference.org/iot2012/" target="_blank">IoT 2012</a></strong> (Wuxi, China)</li>
        <li><strong><a class="no-underline text-teal" href="https://iot-conference.org/iot2010/" target="_blank">IoT 2010</a></strong> (Tokio, Japan)</li>
        <li><strong><a class="no-underline text-teal" href="https://iot-conference.org/iot2008/" target="_blank">IoT 2008</a></strong> (Zurich, Switzerland)</li>
      </ul>
      </p>
    <Publishers />
    <Sponsors />

    </p>
    </div>
  </Layout>
)

export default IndexPage
