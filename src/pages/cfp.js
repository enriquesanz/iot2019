import React from "react";
import { Link } from 'gatsby'
import Sponsors from "../components/sponsors";
import Publishers from "../components/publishers";
import Layout from '../components/layout'
import SEO from '../components/seo'

const CFPPage = () => (
<Layout>
  <SEO
      title="CFP"
      keywords={[`iot2019`, `conference`, `iot` ]}
    />
  <div className="flex flex-col md:flex-row items-center">
    <div className="md:w-3/3 md:mr-8">
      <p className="border-l-4 border-red-light  font-sans leading-normal text-lg pl-4 text-justify">
      <h1 className="text-grey-darker font-serif">Call for papers</h1>
      Driven by connected low-cost sensing and actuation and the large host of scientifically and economically relevant application scenarios that they enable, the Internet of Things has become a central research area with a broad reach across many fields in information technology and adjacent domains. The International Conference on Internet of Things (IoT) has become the premier gathering place where visionary, ground-breaking research in the IoT field meets leading industry experts. Since its beginnings in the year 2008, IoT has been backed by strong support from leading academic institutions as well as industry and we are happy to announce its 9th iteration will take place from October 22-25th 2019 in Bilbao, Spain.
      <br />
      <br />
      <strong className="text-grey-darker">The topic of this year edition will be the Internet of Things for People </strong> which encompasses all the applications and ground-breaking work that is being done in the IoT field to pave the bridge between citizens and everywhere data produced by pervasive technology. Selected papers will be invited to extend and improve their contributions to Special Issues under consideration.
      <br /><br />
      In the following sections more information is provided about how to submit papers for the main conference (full/short papers, work-in-progress or demos), workshops and doctoral consortium.

      </p>

    <br />
      <div className="flex">
      <p className="font-sans leading-loose pl-20">
      
      <Link
              to="/papers"
              className="no-underline text-teal hover:text-red-light"
            >
              <h2 className="font-serif">Full and short papers</h2>
      </Link>

      
        <ul>
          <li><strong className="text-grey-darker">Submissions:</strong> Friday, May 3, 2019</li>
          <li><strong className="text-grey-darker">Notifications:</strong> Friday, June 21, 2019 </li>
          <li><strong className="text-grey-darker">Camera ready:</strong> Thursday, July 4, 2019</li>
        </ul>

      <Link
              to="/wips"
              className="no-underline text-teal hover:text-red-light"
            >
              <h2 className="font-serif">WiPs and Demos</h2>
      </Link>

          <ul>
            <li><strong className="text-grey-darker">Due:</strong> June 28, 2019</li>
            <li><strong className="text-grey-darker">Notifications:</strong> July 30, 2019</li>
            <li><strong className="text-grey-darker">Camera Ready:</strong> September 2, 2019 </li>
          </ul>

      </p>

      <p className="font-sans leading-loose pl-20">

        <Link
              to="/doctoral"
              className="no-underline text-teal hover:text-red-light"
            >
              <h2 className="font-serif">Doctoral consortium</h2>
        </Link>
      
          <ul>
            <li><strong className="text-grey-darker">Due:</strong> Friday, June 28, 2019</li>
            <li><strong className="text-grey-darker">Notifications:</strong> July 16, 2019</li>
            <li><strong className="text-grey-darker">Camera Ready:</strong> July 30, 2019</li>
            </ul>

        <Link
              to="/workshops"
              className="no-underline text-teal hover:text-red-light"
            >
              <h2 className="font-serif">Workshops proposals</h2>
        </Link>

          <ul>
            <li><strong className="text-grey-darker">Proposals Due:</strong> March 25, 2019</li>
            <li><strong className="text-grey-darker">Notifications:</strong> April 12, 2019</li>
            <li><strong className="text-grey-darker">Camera Ready (online in web):</strong> April 30, 2019</li>
          </ul>


      </p>      
      </div>
      <br/><br/>
      <p>
          {/*<Publishers />*/}
          <Sponsors />

      </p>
    </div>
  </div>
  </Layout>
);

export default CFPPage;
