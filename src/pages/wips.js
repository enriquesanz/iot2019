import React from "react";
import Link from "gatsby-link";
import Layout from '../components/layout'

const WipsPage = () => (
    <Layout>
  <div className="flex flex-col md:flex-row items-center">
    <div className="md:w-3/3 md:mr-8">
      <p className="border-l-4 border-yellow-dark font-sans leading-normal pl-4 text-justify text-lg">
      <h1 className="text-grey-darker font-serif">Work-in-Progress and Demo sessions</h1>
      The objective of the WiPs and demo sessions is to give researchers in the emerging research areas of IoT and their applications the opportunity to present early and fresh, in-progress results in order to share experiences and strategies whilst facilitating the discussion between authors and conference attendees.

<br />
<br />
The topic of this year edition will be Internet of Things for People which encompasses all the applications and ground-breaking work that is being done in the IoT field to pave the bridge between citizens and everywhere data produced by pervasive technology.

In general terms, IoT 2019 is seeking for works on all topics related to the development and social adoption of the Internet of Things.  Recommended topics of submission are as follows, but not limited to.

      <br />
      </p>

    <br />

    <div className="flex">
      <p className="font-sans leading-normal pl-4 text-justify text-lg">
      <h2 className="text-grey-darker font-serif">Topics</h2>
      <ul>
        <li><strong>Internet of Things Architecture:</strong> Novel information architecture design on field, edge, and cloud devices; object access and networking technology; investigation of technologies that support the mobility of functions and executions across system entities.</li>
        <li><strong>Interoperability of IoT Systems:</strong> Service discovery and composition, synchronization in distributed systems, overcoming siloization of IoT systems, semantic data description frameworks.</li>
        <li><strong>Description and Discovery of IoT devices, including mobile and moving devices:</strong> Ontologies and data models for the description and discovery of mobile systems and applications, including autonomous systems and wearable, urban or sensory computing devices.</li>
      </ul>
      <p className="text-xl text-center text-yellow-dark">~~~</p>
      <ul>
        <li><strong>Novel IoT Interactions:</strong> Novel methods and techniques for seamless human-to-object and object-to-object interactions, including, but not limited to brain, audible, tangible or augmented or mixed reality.</li>
        <li><strong>Object-objects Interactions:</strong> methods and protocols for co-operations and coordination among objects, social internet of things, trust among objects</li>
        <li><strong>Social Adoption of IoT Systems:</strong> Data security, authentication, authorization and trustworthiness. Privacy protection, data sharing technologies (incl. blockchain technology), tampering protection and detection in IoT systems.</li>
        <li><strong>Internet of People:</strong> the new IoT paradigm where humans and their personal devices are not seen merely as end users of applications, but become active elements of the IoT. Thus, collaboration bridging machine intelligence and human intelligence</li>
      </ul>
      <p className="text-xl text-center text-yellow-dark">~~~</p>
      <ul>
        <li><strong>Web Technologies for the IoT:</strong> Web-based discovery, search, and service composition to facilitate interactions between devices on the IoT and with users.</li>
        <li><strong>Physical World Event Processing and Understanding:</strong>  Novel data collection, deep learning, reality mining, and prediction methods based on physical world observations. This might include real-time decision making, event processing, and extracting information from large datasets.</li>
        <li><strong>Integration of Physical and Virtual Artifacts and Events:</strong> Advanced object identification, classification, and localization.</li>
        <li><strong>Real World Applications of IoT technology:</strong> Evaluation of challenges of real world deployments of Industry 4.0, Industrial Internet, and GS1 implementations, including planned deployments (e.g., in advanced Manufacturing and Logistics).</li>
      </ul>
      <br /><br />
      <h2 className="text-teal font-serif">Important Dates</h2>
      <br/>
        <p className="pl-4">
          <ul className="sm:list-reset">
            <li><strong className="text-grey-darker">Due:</strong> June 28, 2019</li>
            <li><strong className="text-grey-darker">Notifications:</strong> July 30, 2019</li>
            <li><strong className="text-grey-darker">Camera Ready:</strong> September 2, 2019 </li>
            <li><strong className="text-grey-darker">Conference:</strong> October 22-25, 2019</li>
          </ul>
        </p>
      <br /><br />
      <h2 className="text-teal font-serif">Preparing and Submitting Your WiP or Demo:</h2>
        Researchers interested should submit a between 2 and 4-pages abstract in the most recent ACM SIGCHI Extended Abstracts Format including references. Papers have to be submitted via our EasyChair submission site conference system, must be written in English and contain original material that has not been published or is currently undergoing review elsewhere.

Papers are peer-reviewed by a committee of experts in the IoT field. Accepted papers will be listed on DBLP and published via the ACM Digital Library. Cases of plagiarism or multiple submissions will be subject to disciplinary action as per ACM rules and regulations, and no-shows at the conference will result in an exclusion from the ACM Digital Library.
Your submission should be close to camera-ready and thoroughly copy-edited due to the short selection cycle. Furthermore, due to the very rapid selection process we cannot offer any extensions to the deadline. Submissions are not anonymous and should therefore include all author names, affiliations and contact information and references to external data, software or videos, if applicable. Each application will be evaluated based on the IoT Topics of Interest.
        <br /><br />
        <h3 className="text-teal font-serif">Special note to WiPs submissions:</h3>
        When preparing accepted posters please note that your poster should not exceed the following dimensions: 841 x 1189 mm portrait format. Other formats will not be supported.

        <h3 className="text-teal font-serif">Special note to Demos submissions: </h3>
        Include an appendix with the description of the system and its purpose, its status of implementation and deployment, contents of the demo to be shown at the conference, and equipment. If you want to show a commercial product then you might be asked to pay an exhibition fee.


    </p>
    </div>

    </div>
 </div>
 </Layout>
  
);

export default WipsPage;
