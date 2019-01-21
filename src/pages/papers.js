import React from "react";
import Sponsors from "../components/sponsors";
import Layout from '../components/layout'
import SEO from '../components/seo'

const PapersPage = () => (
<Layout>
<SEO
      title="Papers"
      keywords={[`iot2019`, `conference`, `iot` ]}
    />
<div className="flex flex-col md:flex-row items-center">
    <div className="md:w-3/3 md:mr-8">
      <p className="border-l-4 border-red-light  font-sans leading-normal pl-4 text-justify text-lg">
      <h1 className="text-grey-darker font-serif">Full and short papers</h1>
      The International Conference on Internet of Things (IoT) has become the premier gathering place where visionary, ground-breaking research in the IoT field meets leading industry experts. Since its beginnings in the year 2008, IoT has been backed by strong support from leading academic institutions as well as industry and we are happy to announce its 9th iteration will take place from October 22-25th 2018 in Bilbao, Spain.
<br />
<br />

In general terms, IoT 2019 is seeking for original, high impact research papers on all topics related to the development and social adoption of the Internet of Things. Papers will be reviewed and selected based on technical novelty, integrity of the analysis and social impacts and practical relevance.  Recommended topics of submission are as follows, but not limited to.

      <br />
      <br />
      <strong className="text-grey-darker">The topic of this year edition will be the Internet of Things for People </strong> which encompasses all the applications and ground-breaking work that is being done in the IoT field to pave the bridge between citizens and everywhere data produced by pervasive technology. 

      </p>

    <br /><br />

    <div className="flex">
      <p className="font-sans leading-normal pl-4 text-justify text-lg  ">
        <h2 className="text-teal font-serif">Topics</h2>
        <ul>
          <li><strong>Internet of Things Architecture:</strong> Novel information architecture design on field, edge, and cloud devices; object access and networking technology; investigation of technologies that support the mobility of functions and executions across system entities.</li>
          <li><strong>Interoperability of IoT Systems:</strong> Service discovery and composition, synchronization in distributed systems, overcoming siloization of IoT systems, semantic data description frameworks.</li>
          <li><strong>Description and Discovery of IoT devices, including mobile and moving devices:</strong> Ontologies and data models for the description and discovery of mobile systems and applications, including autonomous systems and wearable, urban or sensory computing devices.</li>
        </ul>
        <p className="text-xl text-center text-red-light">~~~</p>
        <ul>
          <li><strong>Novel IoT Interactions:</strong> Novel methods and techniques for seamless human-to-object and object-to-object interactions, including, but not limited to brain, audible, tangible or augmented or mixed reality.</li>
          <li><strong>Object-objects Interactions:</strong> methods and protocols for co-operations and coordination among objects, social internet of things, trust among objects</li>
          <li><strong>Social Adoption of IoT Systems:</strong> Data security, authentication, authorization and trustworthiness. Privacy protection, data sharing technologies (incl. blockchain technology), tampering protection and detection in IoT systems.</li>
          <li><strong>Internet of People:</strong> the new IoT paradigm where humans and their personal devices are not seen merely as end users of applications, but become active elements of the IoT. Thus, collaboration bridging machine intelligence and human intelligence</li>
        </ul>
        <p className="text-xl text-center text-red-light">~~~</p>
        <ul>
           <li><strong>Web Technologies for the IoT:</strong> Web-based discovery, search, and service composition to facilitate interactions between devices on the IoT and with users.</li>
           <li><strong>Physical World Event Processing and Understanding:</strong>  Novel data collection, deep learning, reality mining, and prediction methods based on physical world observations. This might include real-time decision making, event processing, and extracting information from large datasets.</li>
           <li><strong>Integration of Physical and Virtual Artifacts and Events:</strong> Advanced object identification, classification, and localization.</li>
           <li><strong>Real World Applications of IoT technology:</strong> Evaluation of challenges of real world deployments of Industry 4.0, Industrial Internet, and GS1 implementations, including planned deployments (e.g., in advanced Manufacturing and Logistics).</li>
        </ul>
        <br /><br />
        <h2 className="text-teal font-serif">Important Dates</h2>
        <br />
        <p className="pl-4">
          <ul className="sm:list-reset">
            <li><strong className="text-grey-darker">Submissions:</strong> Friday, May 3, 2019</li>
            <li><strong className="text-grey-darker">Notifications:</strong> Friday, June 21, 2019</li>
            <li><strong className="text-grey-darker">Camera ready:</strong> Thursday, July 4, 2019</li>
            <li><strong className="text-grey-darker">Conference:</strong> October 22-25, 2019</li>
          </ul>
        </p>
        <br /><br />
        <h2 className="text-teal font-serif">Preparing and Submitting Your Papers:</h2>
        Papers have to be submitted via the EasyChair conference system, must be written in English and contain original material that has not been published or is currently undergoing review elsewhere. Papers should not exceed 8 pages, including figures and references. The paper layout should follow the SIGCHI Conference format. Papers are peer-reviewed by a committee of experts in the IoT field and selected based on technical novelty, integrity of the analysis, and practical relevance and impact. Accepted papers will be listed on DBLP and published via the ACM Digital Library. Cases of plagiarism or multiple submissions will be subject to disciplinary action as per ACM rules and regulations, and no-shows at the conference will result in an exclusion from the ACM Digital Library. Selected papers will be invited to extend and improve their contributions to  Special Issues under consideration.

    </p>
    </div>

    </div>
 </div>
  </Layout>
);

export default PapersPage;
