import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import Gugge from "../images/gugge.jpg";
import ACM from "../images/acm.png";
import CHI from "../images/chi.png";
import ICPS from "../images/icps.jpg";
import { FaTwitter } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';
import { FaLinkedinIn } from 'react-icons/fa';
import GatsbyLink from "gatsby-link";
import Sponsors from "../components/sponsors";

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
    />

    <div className="text-center">
    <section>
      <img src={Gugge} />
      <h2 className="bg-yellow inline-block my-8 p-3">
      The 9th International Conference on the Internet of Things (IoT 2019)
  Bilbao, Spain
  22-25th, October 2019

    </h2>
    </section>

    <br/>
    <div className="flex">
    <div className="md:w-2/3 md:mr-8">
      <p className="font-serif leading-loose pl-4 text-justify">
      
      The 9th International Conference on the Internet of Things (IoT 2019), building on the success of its predecessors since 2008, is the premier forum for such efforts, to share, 
      discuss and witness cutting edge research in all areas of development for the Internet of Things.

      </p><br/>
      <p className="font-serif leading-loose pl-4 text-justify">
      Pervasive connectivity, smart devices and demand for data testify to an IoT that will continue to grow by leaps and bounds. Computing power is dropping in price while new sensors 
      are being developed and incorporated into everyday objects, and as people buy into IoT technology, economies of scale lend themselves to the creation of ever more 
      data-centric businesses and applications. Instrumenting and connecting devices has massive potential to deliver a social and economic value.  
      However, there is need for a coordinated effort when rolling out the next generation of self-reporting paradigms. 
      </p>
      <br/>

      <p className="font-serif leading-loose pl-4 text-justify">
      The Internet of Things Conference is seeking original, high impact research papers on all topics related to the development of the Internet of Things. Papers will be reviewed 
      and selected based on technical novelty, integrity of the analysis and social-environmental impacts and practical relevance.
      </p>
    </div>
    <div className="md:w-2/3 md:mr-8">
      <p className="border-l-4 border-green font-serif leading-loose pl-4 text-justify">
      <h3>Paper Submission Key Dates:</h3>
      <ul className="list-restet">
        <li><strong>Paper submission deadline:</strong> Friday, May 3, 2019</li>
        <li><strong>Papers camera ready deadline:</strong> Thursday, July 4, 2019</li>
        <li><strong>Conference:</strong> October 22-25, 2019</li>
      </ul>
      </p>
    </div>
    </div>
    <br/>
    <p>

    <div className="flex bg-grey-lighter">
      <div className="flex-1 text-grey-darker text-center bg-grey-light px-30 py-2 m-2"><img src={ACM} /></div>
      <div className="flex-1 text-grey-darker text-center bg-grey-light px-30 py-2 m-2"><img src={CHI} /></div>
      {/*<div className="flex-1 text-grey-darker text-center bg-grey-light px-30 py-2 m-2"><img src={ICPS} /></div>*/}
    </div>


    <Sponsors />

    </p>
    </div>
  </Layout>
)

export default IndexPage
