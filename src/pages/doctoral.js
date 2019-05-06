import React from "react";
import Sponsors from "../components/sponsors";
import Layout from '../components/layout'
import SEO from '../components/seo'

const DoctoralPage = () => (
<Layout>
<SEO
      title="DC"
      keywords={[`iot2019`, `conference`, `iot` ]}
    />
<div className="flex flex-col md:flex-row items-center">
    <div className="md:w-3/3 md:mr-8">
      <p className="border-l-4 border-purple-light font-sans leading-normal pl-4 text-justify text-lg">
      <h1  className="text-grey-darker font-serif">Doctoral Consortium</h1>
      <p className="text-left text-teal">
      <a class="no-underline text-teal hover:font-bold" href = "mailto:iot2019@deusto.es?subject = [iot2019][doctoral]"><strong><font color="grey">Contact:</font></strong> iot2019@deusto.es</a></p><br />

      The Doctoral Consortium is a special session of the conference where PhD students in the early phases of their research can receive advice in a constructive atmosphere and grow their research network. Students present and discuss their early research with other PhD students and a panel of established researchers and practitioners in the area of the Internet of Things. In particular given the setup of the IoT conference as in-between research and applications, this is a great opportunity for PhD students to have their research and ideas exposed to industrial researchers, and the DC chairs will attempt to attract suitable persons to the Consortium.
      <br /><br />
      For the IoT 2019 Doctoral Consortium, we are seeking for original early research by PhD students on all topics related to the development and adoption of the Internet of Things.   Recommended topics of submission are as follows, but not limited to.
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
        <p className="text-xl text-center text-purple-light">~~~</p>
        <ul>
          <li><strong>AI and Machine Learning for the IoT:</strong> AI and Machine Learning research applied to all aspects of the IoT is welcome. This includes deep and reinforcement learning on IoT data sets, optimization of IoT technologies based on Machine Learning, self-driving networks and self-organization, networked AI, artificially intelligent or autonomous devices, and approaches to "IoT intelligence" in cognitive machines, autonomous vehicles, and edge intelligence.</li>
          <li><strong>Sensing, Signal Processing, Actuation and Analytics:</strong> New methods to sense and process signals from the physical world are encouraged. This may include analytics performed over sensor data streams at various points in the overall system architecture, event detection, object identification and localization, and novel control methods for intelligent actuation.</li>
          <li><strong>Energy Efficiency and Sustainability in the IoT:</strong> Novel approaches to energy-efficient and sustainable operation of connected devices are welcome. These may include efficient communication protocols, signal processing and compression techniques, energy harvesting, scavenging, and power transfer technologies.</li>          
          <li><strong>Real-world Applications, Deployments and Testbeds:</strong> Papers describing novel real-world IoT applications, deployments of cyber-physical systems, and new testbed facilities are welcome. Evaluation of relevant real-world challenges (connectivity, reliability, scalability, etc.) is of particular interest. Examples may include those relevant to Industry 4.0, Smart Cities, Precision Agriculture, Healthcare, Logistics/Supply Chain Management (GS1/EPCGlobal), etc.</li>
        </ul>
        <p className="text-xl text-center text-purple-light">~~~</p>
        <ul>
           <li><strong>Interacting with the IoT:</strong> Novel methods and techniques for seamless human-to-object and object-to-object interactions, including visual, brain, audible, persuasive, embodied, tangible interaction and augmented or mixed reality are invited. Usability of the IoT and user experience studies are welcomed, as well as new interaction concepts emerging from being surrounded by smart devices. HCI in manufacturing and Industry 4.0 environments is particularly welcome.</li>
           <li><strong>Security, Privacy and Trust in the IoT:</strong> Advances in delivering secure, trustworthy and privacy-preserving IoT applications and systems are essential to promote widespread adoption. Papers describing new robust ways to achieve this objective are sought.</li>
           <li><strong>Societal Impact of the IoT:</strong> To understand the impact of millions of IoT devices on society, case studies are encouraged that emerge from living in hyper-connected societies where automation through IoT and delegation of tasks is present. Advances on the Social Internet of Things and bridging IoT intelligence and human intelligence to cope with societal challenges (e.g. sustainability, wellbeing, food security or secure societies) are complementary to the conference scope.</li>
        
        </ul>
       <br /><br />
      <h2 className="text-teal font-serif">Important Dates</h2>
      <br/>
        <p className="pl-4">
          <ul className="sm:list-reset">
            <li><strong className="text-grey-darker">Due:</strong> June 28, 2019</li>
            <li><strong className="text-grey-darker">Notifications:</strong> July 16, 2019</li>
            <li><strong className="text-grey-darker">Camera Ready:</strong> July 30, 2019</li>
            <li><strong className="text-grey-darker">Conference:</strong>  October 22-25, 2019</li>
        </ul>
        </p>
         <br /><br />
        <h2 className="text-teal font-serif">Preparing and Submitting Your PhD proposal:</h2>
        Students interested in participating in the Doctoral Consortium should submit a 4 pages abstract (including references) formatted in the most recent ACM SIGCHI Extended Abstracts Format(<a class="no-underline text-teal hover:font-bold" href="http://chi2019.acm.org/wp-content/uploads/acmart-master.zip" target="_blank" rel="noopener noreferrer">Latex</a>, <a class="no-underline text-teal hover:font-bold" href="https://www.overleaf.com/latex/templates/association-for-computing-machinery-acm-sigchi-extended-abstract-template/zzzfqvkmrfzn" target="_blank" rel="noopener noreferrer">Word</a>, <a class="no-underline text-teal hover:font-bold" href="http://chi2019.acm.org/wp-content/uploads/2018/12/CHI19-EA-sample-file-1.docx" target="_blank" rel="noopener noreferrer">Overleaf</a>) via the <a class="no-underline text-teal hover:font-bold" href="https://easychair.org/my/conference?conf=iot2019" target="_blank" rel="noopener noreferrer">EasyChair conference system</a> describing in English their research question, its position with respect to the state of the art, their research plans and methodology, ideas, and results achieved so far. 
        <br/><br/>Accepted abstracts will be included in the adjunct conference proceedings (unless opted out by the student) which will be listed on DBLP and published via the ACM Digital Library. It is planned that each student will be allocated a 20-minute time slot, with 15 minutes for a presentation and 5 minutes for oral feedback by at least two senior faculty members or researchers. The presentation will be intimate to encourage interaction, with only the session organizer, reviewers, and other student DC presenters in attendance. Reviewer feedback will cover all aspects of their proposal (the choice of topic, how it is to be examined, etc.). Students are expected to attend all presentations in their sessions.

    </p>
    </div>
    <br /><br />
    <p>
          {/*<Publishers />*/}
          <Sponsors />

      </p>

    </div>
 </div>
  </Layout>
);

export default DoctoralPage;
