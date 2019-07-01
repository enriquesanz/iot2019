import React from "react";
import Layout from '../components/layout'
import SEO from '../components/seo'
import Sponsors from "../components/sponsors";

const WorkshopsPage = () => (
    <Layout>
    <SEO
      title="Workshops"
      keywords={[`iot2019`, `conference`, `iot` ]}
    />
  <div className="flex flex-col md:flex-row items-center">
    <div className="md:w-3/3 md:mr-8">
      <p className="border-l-4 border-green-lighter font-sans leading-normal pl-4 text-justify text-lg">
      <h1 className="text-grey-darker font-serif">Workshop Proposals</h1>
      <p className="text-left text-teal">
      <a class="no-underline text-teal hover:font-bold" href = "mailto:iot2019@deusto.es?subject=[iot2919][workshop]"><strong><font color="grey">Contact:</font></strong> iot2019@deusto.es</a></p><br />
      Workshops collocated with the 9th International Conference on the Internet of Things (IoT 2019) are opportunities to strengthen communities of researchers and practitioners working in specific topics related to the IoT. These events foster the exchange of new ideas, ongoing work, and latests results, in established or emerging sub-domains of interest. They are opportunities for IoT pioneers and practitioners in industry to share hands-on experience with IoT systems (use cases, deployments, architectures, etc.), and for researchers to present and receive feedback on early research result. Approved workshops  will be announced on the conference website.


      <br />
      <br />
      We invite submission of half-day workshop proposals, with a clearly defined scope that falls in the general topics of the conference. We also encourage the submission of workshops that follow alternative formats such as hackathons, plugfests, demo jams, or breakout sessions.
      <br />
      </p>

    <br /><br />

    <div className="flex">
      <p className="font-sans leading-normal pl-4 text-justify text-lg">
      <h2 className="text-teal font-serif">Topics:</h2>
      
        <p>In general terms, IoT 2019 is seeking for works on all topics related to the development and adoption of the Internet of Things.  In particular, possible topics are, but not limited to: </p>
        <br />
      <ul>
          <li><strong>IoT Edge and Cloud Architectures:</strong> Novel architecture designs for the IoT that adopt techniques from Cloud Computing or operator networks to describe, discover, access, manage, process information, and orchestrate IoT devices and services in a robust and scalable manner, including systems with mobile dynamics. The domain may vary from home and wearables to urban sensory devices to smart manufacturing equipment and environments.</li>
          <li><strong>Web of Things:</strong> Applying Web technology to the IoT or generally aiming for Web-like and semantic interoperability for IoT applications leads to a variety of open research questions. Example topics are physical mashups, IoT usability, developer ergonomics, end-user programmability, unifying data models, meta models, or data and model definition languages dedicated to IoT.</li>
          <li><strong>IoT Communication Technologies:</strong> Advancements in communications and network protocols dedicated to machine-type communication and sensor integration are sought to address particular challenges of the IoT, such as low latency and high reliability and availability. Methods building on NB-IoT and mmWave radio as well as advances in, e.g., Bluetooth Low Energy (BLE), Radio Frequency Identification (RFID), LoRa/LoRaWAN, Sigfox, and 5G for IoT are welcome. Advances to industrially driven solutions and standards such as 6TiSCH or IEEE TSN are within scope.</li>
      </ul>
      <p className="text-xl text-center text-green-lighter">~~~</p>
      <ul>
          <li><strong>AI and Machine Learning for the IoT:</strong> AI and Machine Learning research applied to all aspects of the IoT is welcome. This includes deep and reinforcement learning on IoT data sets, optimization of IoT technologies based on Machine Learning, self-driving networks and self-organization, networked AI, artificially intelligent or autonomous devices, and approaches to "IoT intelligence" in cognitive machines, autonomous vehicles, and edge intelligence.</li>
          <li><strong>Sensing, Signal Processing, Actuation and Analytics:</strong> New methods to sense and process signals from the physical world are encouraged. This may include analytics performed over sensor data streams at various points in the overall system architecture, event detection, object identification and localization, and novel control methods for intelligent actuation.</li>
          <li><strong>Energy Efficiency and Sustainability in the IoT:</strong> Novel approaches to energy-efficient and sustainable operation of connected devices are welcome. These may include efficient communication protocols, signal processing and compression techniques, energy harvesting, scavenging, and power transfer technologies.</li>          
          <li><strong>Real-world Applications, Deployments and Testbeds:</strong> Papers describing novel real-world IoT applications, deployments of cyber-physical systems, and new testbed facilities are welcome. Evaluation of relevant real-world challenges (connectivity, reliability, scalability, etc.) is of particular interest. Examples may include those relevant to Industry 4.0, Smart Cities, Precision Agriculture, Healthcare, Logistics/Supply Chain Management (GS1/EPCGlobal), etc.</li>
      </ul>
      <p className="text-xl text-center text-green-light">~~~</p>
      <ul>
          <li><strong>Interacting with the IoT:</strong> Novel methods and techniques for seamless human-to-object and object-to-object interactions, including visual, brain, audible, persuasive, embodied, tangible interaction and augmented or mixed reality are invited. Usability of the IoT and user experience studies are welcomed, as well as new interaction concepts emerging from being surrounded by smart devices. HCI in manufacturing and Industry 4.0 environments is particularly welcome.</li>
          <li><strong>Security, Privacy and Trust in the IoT:</strong> Advances in delivering secure, trustworthy and privacy-preserving IoT applications and systems are essential to promote widespread adoption. Papers describing new robust ways to achieve this objective are sought.</li>
          <li><strong>Societal Impact of the IoT:</strong> To understand the impact of millions of IoT devices on society, case studies are encouraged that emerge from living in hyper-connected societies where automation through IoT and delegation of tasks is present. Advances on the Social Internet of Things and bridging IoT intelligence and human intelligence to cope with societal challenges (e.g. sustainability, wellbeing, food security or secure societies) are complementary to the conference scope.</li>        
      </ul>
       <br /><br />
      <h2 className="text-teal font-serif">Important Dates:</h2>
        <br/>
        <p className="pl-4">
          <ul className="sm:list-reset">
            <li><strong className="text-grey-darker">Submissions:</strong> <strike className="text-red-light"> June 2, 2019</strike> <strike className="text-purple-light"><strong className="text-purple-light text-lg">June 23, 2019</strong> (<a class="no-underline hover:font-bold text-purple-light" href="https://en.wikipedia.org/wiki/Anywhere_on_Earth">23:59 AoE</a>)</strike></li>
            <li><strong className="text-grey-darker">Notifications:</strong> June 25, 2019</li>
            <li><strong className="text-grey-darker">Camera Ready (information in web):</strong> July 14, 2019</li>
            <li><strong className="text-grey-darker">Conference:</strong> October 22-25, 2019</li>
          </ul>
        </p>

         <br /><br />
         <h2 className="text-teal font-serif">Workshop proposals:</h2>
        Submissions should be submitted via <a class="no-underline text-teal hover:font-bold" href="https://easychair.org/my/conference?conf=iot2019" target="_blank" rel="noopener noreferrer">EasyChair conference system</a> as a 200 words abstract, along with a single PDF file of 4-6 pages maximum in the most recent ACM SIGCHI Extended Abstracts Format (<a class="no-underline text-teal hover:font-bold" href="http://chi2019.acm.org/wp-content/uploads/acmart-master.zip" target="_blank" rel="noopener noreferrer">Latex</a>, <a class="no-underline text-teal hover:font-bold" href="https://www.overleaf.com/latex/templates/association-for-computing-machinery-acm-sigchi-extended-abstract-template/zzzfqvkmrfzn" target="_blank" rel="noopener noreferrer">Word</a>, <a class="no-underline text-teal hover:font-bold" href="http://chi2019.acm.org/wp-content/uploads/2018/12/CHI19-EA-sample-file-1.docx" target="_blank" rel="noopener noreferrer">Overleaf</a>)  including references, containing the following section:

        <ul>
            <li>Title, acronym, potentially logo.</li>
            <li>Topics of interest covered by the workshop</li>
            <li>Motivation: Why is the topic of particular interest to a reasonable fraction of the  IoT community? If applicable, a brief discussion of the workshop’s history (experiences, number of submissions and attendees, etc.).</li>
            <li>Organization and Format: Description of the intended organization, selection process for the contributors, and schedule of the event.</li>
            <li>Community: Evidence that there is an existing community of researchers and practitioners that are susceptible to contribute to this event. References to work relating to the core topic of the workshop that are not only co-authored by the organizers.</li>
            <li>Chairs: Name, affiliation, email address, homepage and short biography of each chair, explaining the chair’s expertise for the workshop</li>
            <li>Program Committee: Names and affiliations of potential PC members, half of the potential PC members should have confirmed at the time of submission.</li>
            <li>Potential means for publishing workshop papers: Ideas about what to do with the papers submitted to the workshops (e.g. include in the adjunct proceedings, write a book chapter, magazine article, etc.)</li>
        </ul>        
        <br />
        <h3 className="text-teal font-serif">Review Criteria:</h3>
        A limited number of workshop proposals will be accepted to IoT 2019. Each proposal will be evaluated based on the quality of the proposal, and its appeal to the IoT community. In particular, the proposals should demonstrate the following:

        <ul>
            <li>the workshops topics fall in the general scope of IoT2019</li>
            <li>there is a clear identity and a focus on a specific problem or technology</li>
            <li>there is an existing community of researchers and practitioners that are susceptible to contribute to this event</li>
            <li>the organization and format are appealing for potential contributors and participants</li>
        </ul>
        <br />
        In case overlapping workshops are proposed, the Workshop Chairs may contact the organisers to discuss the possibility of merging workshops. The organisers of accepted workshops will be responsible for their own reviewing process and publicity (e.g., website, timelines and call for papers).
        <br />
        All workshop participants will be required to register for the full conference as well. At the discretion of the chairs, workshops may be cancelled if organisers have not registered in a timely manner or if a workshop has received too few submissions.
        <br /><br />

        <h3 className="text-teal font-serif">Pack for Workshop organizers:</h3>        
        <ul>
            <li>Workshop organizers will receive one complimentary conference ticket for one organizer.</li>
            <li>Workshop attendees should only register on the conference without paying an extra fee for the workshops.</li>
            <li>Workshop organizers will be provided of specific physical space on site according to the number of participants.</li>
            <li>All Workshop will be announced in the website of the conference as a collocated event.</li>
            <li>Best papers from workshops will be invited to extend and improve their contributions to an <a class="no-underline text-teal hover:font-bold" href="https://www.mdpi.com/journal/futureinternet" target="_blank" rel="noopener noreferrer">Special Issue in Future Internet MDPI journal</a>.</li>
        </ul>        
        <br /><br />
        


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

export default WorkshopsPage;
