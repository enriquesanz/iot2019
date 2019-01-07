import React from "react";
import Link from "gatsby-link";
import Layout from '../components/layout'

const WorkshopsPage = () => (
    <Layout>
  <div className="flex flex-col md:flex-row items-center">
    <div className="md:w-3/3 md:mr-8">
      <p className="border-l-4 border-grey-darkest font-serif leading-loose pl-4 text-justify">
      <h1>Workshop Proposals</h1>
      Workshops collocated with the 9th International Conference on the Internet of Things (IoT 2019) are opportunities to strengthen communities of researchers and practitioners working in specific topics related to the IoT. These events foster the exchange of new ideas, ongoing work, and latests results, in established or emerging sub-domains of interest. They are opportunities for IoT pioneers and practitioners in industry to share hands-on experience with IoT systems (use cases, deployments, architectures, etc.), and for researchers to present and receive feedback on early research result. Approved workshops and tutorials will be announced on the conference website.


<br />
<br />
We invite submission of half-day workshop proposals, with a clearly defined scope that falls in the general topics of the conference. We also encourage the submission of workshops that follow alternative formats such as hackathons, plugfests, demo jams, or breakout sessions.
      <br />
      </p>

    <br />

    <div className="flex">
      <p className="font-serif leading-loose pl-4 text-justify">
      <h2>TOPICS</h2>
      <ul>
        <li>Internet of Things Architecture: Novel information architecture design on field, edge, and cloud devices; object access and networking technology; investigation of technologies that support the mobility of functions and executions across system entities.</li>
        <li>Interoperability of IoT Systems: Service discovery and composition, synchronization in distributed systems, overcoming siloization of IoT systems, semantic data description frameworks.</li>
        <li>Description and Discovery of IoT devices, including mobile and moving devices: Ontologies and data models for the description and discovery of mobile systems and applications, including autonomous systems and wearable, urban or sensory computing devices.</li>
      </ul>
      <p className="text-xl text-center">~~~</p>
      <ul>
        <li>Novel IoT Interactions: Novel methods and techniques for seamless human-to-object and object-to-object interactions, including, but not limited to brain, audible, tangible or augmented or mixed reality.</li>
        <li>Object-objects Interactions: methods and protocols for co-operations and coordination among objects, social internet of things, trust among objects</li>
        <li>Social Adoption of IoT Systems: Data security, authentication, authorization and trustworthiness. Privacy protection, data sharing technologies (incl. blockchain technology), tampering protection and detection in IoT systems.</li>
        <li>Internet of People: the new IoT paradigm where humans and their personal devices are not seen merely as end users of applications, but become active elements of the IoT. Thus, collaboration bridging machine intelligence and human intelligence</li>
      </ul>
      <p className="text-xl text-center">~~~</p>
      <ul>
        <li>Web Technologies for the IoT: Web-based discovery, search, and service composition to facilitate interactions between devices on the IoT and with users.</li>
        <li>Physical World Event Processing and Understanding: Novel data collection, deep learning, reality mining, and prediction methods based on physical world observations. This might include real-time decision making, event processing, and extracting information from large datasets.</li>
        <li>Integration of Physical and Virtual Artifacts and Events: Advanced object identification, classification, and localization.</li>
        <li>Real World Applications of IoT technology: Evaluation of challenges of real world deployments of Industry 4.0, Industrial Internet, and GS1 implementations, including planned deployments (e.g., in advanced Manufacturing and Logistics).</li>
      </ul>
      <h2>IMPORTANT DATES</h2>
        <ul>
            <li>Proposals Due: March 25, 2019</li>
            <li>Notifications: April 12, 2019</li>
            <li>Camera Ready(online-information in web): April 30, 2019</li>
            <li>Conference: October 22-25, 2019</li>
        </ul>

        <h2>REVIEW CRITERIA:</h2>
        A limited number of workshop proposals will be accepted to IoT 2019. Each proposal will be evaluated based on the quality of the proposal, and its appeal to the IoT community. In particular, the proposals should demonstrate the following:

        <ul>
            <li>the workshops topics fall in the general scope of IoT2019</li>
            <li>there is a clear identity and a focus on a specific problem or technology</li>
            <li>there is an existing community of researchers and practitioners that are susceptible to contribute to this event</li>
            <li>the organization and format are appealing for potential contributors and participants</li>
        </ul>

        In case overlapping workshops are proposed, the Workshop Chairs may contact the organisers to discuss the possibility of merging workshops. The organisers of accepted workshops will be responsible for their own reviewing process and publicity (e.g., website, timelines and call for papers).


        <h3>WORKSHOP PROPOSALS:</h3>
        Submissions should be submitted via EasyChair as a 200 words abstract, along with a single PDF file of 4 pages maximum in the most recent ACM SIGCHI Extended Abstracts Format including references, containing the following section:

        <ul>
            <li>Title, acronym, potentially logo</li>
            <li>Topics of interest covered by the workshop</li>
            <li>Motivation: Why is the topic of particular interest to a reasonable fraction of the  IoT community? If applicable, a brief discussion of the workshop’s history (experiences, number of submissions and attendees, etc.).</li>
            <li>Organization and Format: Description of the intended organization, selection process for the contributors, and schedule of the event.</li>
            <li>Community: Evidence that there is an existing community of researchers and practitioners that are susceptible to contribute to this event. References to work relating to the core topic of the workshop that are not only co-authored by the organizers.</li>
            <li>Chairs: Name, affiliation, email address, homepage and short biography of each chair, explaining the chair’s expertise for the workshop</li>
            <li>Program Committee: Names and affiliations of potential PC members, half of the potential PC members should have confirmed at the time of submission.</li>
            <li>Potential means for publishing workshop papers: Ideas about what to do with the papers submitted to the workshops (e.g. include in the adjunct proceedings, write a book chapter, magazine article, etc.)</li>
        </ul>
        
        All workshop participants will be required to register for the full conference as well. Workshop organizers will receive one complimentary conference ticket for one organizer or one workshop participant. At the discretion of the chairs, workshops may be cancelled if organisers have not registered in a timely manner or if a workshop has received too few submissions.


    </p>
    </div>

    </div>
 </div>

 </Layout>
  
);

export default WorkshopsPage;
