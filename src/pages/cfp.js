import React from "react";
import Link from "gatsby-link";
import Sponsors from "../components/sponsors";
import Layout from '../components/layout'

const CFPPage = () => (
<Layout>
  <div className="flex flex-col md:flex-row items-center">
    <div className="md:w-3/3 md:mr-8">
      <p className="border-l-4 border-grey-darkest font-serif leading-loose pl-4 text-justify">
      <h1>Call for papers</h1>
      Driven by connected low-cost sensing and actuation and the large host of scientifically and economically relevant application scenarios that they enable, the Internet of Things has become a central research area with a broad reach across many fields in information technology and adjacent domains. The International Conference on Internet of Things (IoT) has become the premier gathering place where visionary, ground-breaking research in the IoT field meets leading industry experts. Since its beginnings in the year 2008, IoT has been backed by strong support from leading academic institutions as well as industry and we are happy to announce its 9th iteration will take place from October 22-25th 2018 in Bilbao, Spain.
      <br />
      <br />
      The topic of this year edition will be Internet of Things for People which encompasses all the applications and ground-breaking work that is being done in the IoT field to pave the bridge between citizens and everywhere data produced by pervasive technology. 

      </p>

    <br />
      <div className="flex">
      <p className="font-serif leading-loose pl-4">
      
      <a href="/papers"><h2>Full and short papers</h2></a>
        <ul>
          <li>Submissions: Friday, May 3, 2019</li>
          <li>Notifications: Friday, June 21, 2019 </li>
          <li>Camera ready: Thursday, July 4, 2019</li>
        </ul>


          <a href="/wips"><h2>WiPs and Demos</h2></a>
          <ul>
            <li>Due: June 28, 2019</li>
            <li>Notifications: July 30, 2019</li>
            <li>Camera Ready: September 2, 2019 </li>
          </ul>

      </p>

      <p className="font-serif leading-loose pl-4">

          <a href="/doctoral"><h2>Doctoral consortium</h2></a>
          <ul>
            <li>Due: Friday, June 28, 2019</li>
            <li>Notifications: July 16, 2019</li>
            <li>Camera Ready: July 30, 2019</li>
            </ul>

          <a href="/workshops"><h2>Workshops proposals</h2></a>
          <ul>
            <li>Proposals Due: March 25, 2019</li>
            <li>Notifications: April 12, 2019</li>
            <li>Camera Ready(online-information in web): April 30, 2019</li>
          </ul>


      </p>      
      </div>
      <Sponsors />
    </div>
  </div>
  </Layout>
);

export default CFPPage;
