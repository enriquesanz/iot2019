import React from "react";
import { Link } from 'gatsby'
import Sponsors from "../components/sponsors";
import Publishers from "../components/publishers";
import Layout from '../components/layout'
import SEO from '../components/seo'
import CFPpdf from "../files/CFP.pdf";

const CFPPage = () => (
<Layout>
  <SEO
      title="CFP"
      keywords={[`iot2019`, `conference`, `iot` ]}
    />
  <div className="block flex-col md:flex-row items-center">
    <div className="md:w-3/3 md:mr-8">
      <p className="border-l-4 border-red-light  font-sans leading-normal text-lg pl-4 text-justify">
      <h1 className="text-grey-darker font-serif">Call for papers</h1>
      <p className="text-left">(<a class="no-underline text-teal hover:font-bold" href={CFPpdf} target="_blank" rel="noopener noreferrer">txt</a>, <a class="no-underline text-teal hover:font-bold" href={CFPpdf} target="_blank" rel="noopener noreferrer">pdf</a>)</p>
      <p className="text-left text-teal">
      <a class="no-underline text-teal hover:font-bold" href = "mailto:iot2019@deusto.es?subject = [iot2019]"><strong><font color="grey">Contact:</font></strong> iot2019@deusto.es</a></p>
      <br />Driven by connected, low-cost sensing and actuation and the large host of scientifically and economically relevant application scenarios that they enable, the Internet of Things has become a central research area with a broad reach across many fields in information technology and adjacent domains. The International Conference on Internet of Things (IoT) has become the premier gathering place where visionary, ground-breaking research in the IoT field meets leading industry experts. Since its beginnings in the year 2008, IoT has been backed by strong support from leading academic institutions as well as industry and we are happy to announce its 9th iteration will take place from October 22-25th 2019 in Bilbao, Spain.
      <br /><br />
      In the following sections more information is provided about how to submit papers for the main conference (full/short papers, posters or demos), workshops and doctoral consortium.

      </p>

    <br />
      <div className="block md:flex xl:flex">
      <p className="font-sans leading-loose pl-20">
      
      <Link
              to="/papers"
              className=" text-teal hover:text-red-light"
            >
              <h2 className="font-serif">Full and short papers </h2>
      </Link>
      <p className="text-left text-teal">(Call for Papers)</p>

      
        <ul>
          <li><strong className="text-grey-darker">Submissions:</strong> June 2, 2019</li>
          <li><strong className="text-grey-darker">Notifications:</strong> July 14, 2019 </li>
          <li><strong className="text-grey-darker">Camera ready:</strong> September 1, 2019</li>
        </ul>

      <Link
              to="/wips"
              className=" text-teal hover:text-red-light"
            >
              <h2 className="font-serif">Posters and Demos</h2>
      </Link>
      <p className="text-teal text-left">(Call for Posters and Demos)</p>

          <ul>
            <li><strong className="text-grey-darker">Due:</strong> July 21, 2019</li>
            <li><strong className="text-grey-darker">Notifications:</strong> August  20, 2019</li>
            <li><strong className="text-grey-darker">Camera Ready:</strong> September 1, 2019 </li>
          </ul>

      </p>

      <p className="font-sans leading-loose pl-20">

        <Link
              to="/doctoral"
              className=" text-teal hover:text-red-light"
            >
              <h2 className="font-serif">Doctoral consortium</h2>
        </Link>
        <p className="text-teal text-left">(Call for PhD early research)</p>
      
          <ul>
            <li><strong className="text-grey-darker">Due:</strong> June 28, 2019</li>
            <li><strong className="text-grey-darker">Notifications:</strong> July 16, 2019</li>
            <li><strong className="text-grey-darker">Camera Ready:</strong> July 30, 2019</li>
            </ul>

        <Link
              to="/workshops"
              className=" text-teal hover:text-red-light"
            >
              <h2 className="font-serif">Workshops proposals</h2>
        </Link>
        <p className="text-teal text-left">(Call for Workshops)</p>

          <ul>
            <li><strong className="text-grey-darker">Proposals Due:</strong> June 2, 2019</li>
            <li><strong className="text-grey-darker">Notifications:</strong> June 9, 2019</li>
            <li><strong className="text-grey-darker">Camera Ready (information in web):</strong> July 9, 2019</li>
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
