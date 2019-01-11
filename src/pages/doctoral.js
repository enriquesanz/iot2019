import React from "react";
import Link from "gatsby-link";
import Sponsors from "../components/sponsors";
import Layout from '../components/layout'

const DoctoralPage = () => (
<Layout>
<div className="flex flex-col md:flex-row items-center">
    <div className="md:w-3/3 md:mr-8">
      <p className="border-l-4 border-purple-light font-sans leading-normal pl-4 text-justify text-lg">
      <h1  className="text-grey-darker font-serif">Doctoral Colloquium</h1>
      The Doctoral Consortium is a special session of the conference where PhD students in the early phases of their research can receive advice in a constructive atmosphere. Students present and discuss their research with other PhD students and a panel of established researchers in the area of Internet of Things.
<br />
      The topic of this year edition will be Internet of Things for People which encompasses all the applications and ground-breaking work that is being done in the IoT field to pave the bridge between citizens and everywhere data produced by pervasive technology. 
<br />
In general terms, IoT 2019 is seeking for original, high impact research ideas on all topics related to the development and social adoption of the Internet of Things.  Recommended topics of submission are as follows, but not limited to.
      <br />
      </p>

    <br />
    
    <div className="flex">
      <p className="font-sans leading-normal pl-4 text-justify text-lg">
      <h2 className="text-teal font-serif">Topics</h2>
      <ul>
        <li><strong>Internet of Things Architecture:</strong> Novel information architecture design on field, edge, and cloud devices; object access and networking technology; investigation of technologies that support the mobility of functions and executions across system entities.</li>
        <li><strong>Interoperability of IoT Systems:</strong> Service discovery and composition, synchronization in distributed systems, overcoming siloization of IoT systems, semantic data description frameworks.</li>
        <li><strong>Description and Discovery of IoT devices, including mobile and moving devices:</strong> Ontologies and data models for the description and discovery of mobile systems and applications, including autonomous systems and wearable, urban or sensory computing devices.</li>
      </ul>
      <p className="text-xl text-center text-purple-light">~~~</p>
      <ul>
        <li><strong>Novel IoT Interactions:</strong> Novel methods and techniques for seamless human-to-object and object-to-object interactions, including, but not limited to brain, audible, tangible or augmented or mixed reality.</li>
        <li><strong>Object-objects Interactions:</strong> methods and protocols for co-operations and coordination among objects, social internet of things, trust among objects</li>
        <li><strong>Social Adoption of IoT Systems:</strong> Data security, authentication, authorization and trustworthiness. Privacy protection, data sharing technologies (incl. blockchain technology), tampering protection and detection in IoT systems.</li>
        <li><strong>Internet of People:</strong> the new IoT paradigm where humans and their personal devices are not seen merely as end users of applications, but become active elements of the IoT. Thus, collaboration bridging machine intelligence and human intelligence</li>
      </ul>
      <p className="text-xl text-center text-purple-light">~~~</p>
      <ul>
        <li><strong>Web Technologies for the IoT:</strong> Web-based discovery, search, and service composition to facilitate interactions between devices on the IoT and with users.</li>
        <li><strong>Physical World Event Processing and Understanding:</strong>  Novel data collection, deep learning, reality mining, and prediction methods based on physical world observations. This might include real-time decision making, event processing, and extracting information from large datasets.</li>
        <li><strong>Integration of Physical and Virtual Artifacts and Events:</strong> Advanced object identification, classification, and localization.</li>
        <li><strong>Real World Applications of IoT technology:</strong> Evaluation of challenges of real world deployments of Industry 4.0, Industrial Internet, and GS1 implementations, including planned deployments (e.g., in advanced Manufacturing and Logistics).</li>
      </ul>
       <br /><br />
      <h2 className="text-teal font-serif">Important Dates</h2>
        <ul>
            <li><strong>Due:</strong> Friday, June 28, 2019</li>
            <li><strong>Notifications:</strong> July 16, 2019</li>
            <li><strong>Camera Ready:</strong> July 30, 2019</li>
            <li><strong>Conference:</strong>  October 22-25, 2019</li>
        </ul>
         <br /><br />
        <h2 className="text-teal font-serif">Preparing and Submitting Your PhD proposal:</h2>
        Students interested in participating in the Doctoral Consortium should submit a 4-page abstract in ACM SIGCHI Extended Abstracts Format describing in English their research question, its position with respect to the state of the art, their research plans and methodology, ideas, and results achieved so far. Accepted abstracts will be included in the adjunct conference proceedings (unless opted out by the student).

It is planned that each student will be allocated a 20-minute time slot, with 15 minutes for a presentation and 5 minutes for oral feedback by at least two senior faculty or researchers. The presentation will be intimate to encourage interaction, with only the session organizer, reviewers, and other student DC presenters in attendance. Reviewer feedback will cover all aspects of their proposal (the choice of topic, how it is to be examined, etc.). Students are expected to attend all presentations in their sessions.


    </p>
    </div>

    </div>
 </div>
  </Layout>
);

export default DoctoralPage;
