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
    <div className="md:w-3/3 md:mr-4">
      <p className="border-l-4 border-red-light  font-sans leading-normal pl-4 text-justify text-lg">
      <h1 className="text-grey-darker font-serif">Full and short papers</h1>
      <p className="text-left text-teal">
      <a class="no-underline text-teal hover:font-bold" href = "mailto:iot2019@deusto.es?subject = [iot2019][papers]"><strong><font color="grey">Contact:</font></strong> iot2019@deusto.es</a></p><br />
      With the advent of digitized physical objects and communicating machines and vehicles, the Internet of Things has become an exciting field of research encompassing Pervasive Computing, Cyber-Physical Systems, and Communication technologies. Particular challenges include the understanding of IoT application demands and novel network traffic types, low latency and reliable communication, and integrating and mediating things within intelligent systems where IoT technologies are potential catalysts. In addition, a better understanding of impending social and societal impacts is vital to the success of the IoT.
      <br />
      <br />      

      IoT 2019 is seeking for original, high impact research papers on all topics related to the development and adoption of the Internet of Things. Papers will be reviewed and selected based on technical novelty, integrity of the analysis and social impacts and practical relevance.  
      Papers have to be submitted via the <a class="no-underline text-teal hover:font-bold" href="https://easychair.org/my/conference?conf=iot2019" target="_blank" rel="noopener noreferrer">EasyChair conference system.</a>
      </p>

    <br /><br />

    <div className="flex">
      <p className="font-sans leading-normal pl-4 text-justify text-lg  ">
        <h2 className="text-teal font-serif">Topics:</h2>
      
        <p>In general terms, IoT 2019 is seeking for works on all topics related to the development and adoption of the Internet of Things.  In particular, possible topics are, but not limited to: </p>
        <br />
        <ul>
          <li><strong>IoT Edge and Cloud Architectures:</strong> Novel architecture designs for the IoT that adopt techniques from Cloud Computing or operator networks to describe, discover, access, manage, process information, and orchestrate IoT devices and services in a robust and scalable manner, including systems with mobile dynamics. The domain may vary from home and wearables to urban sensory devices to smart manufacturing equipment and environments.</li>
          <li><strong>Web of Things:</strong> Applying Web technology to the IoT or generally aiming for Web-like and semantic interoperability for IoT applications leads to a variety of open research questions. Example topics are physical mashups, IoT usability, developer ergonomics, end-user programmability, unifying data models, meta models, or data and model definition languages dedicated to IoT.</li>
          <li><strong>IoT Communication Technologies:</strong> Advancements in communications and network protocols dedicated to machine-type communication and sensor integration are sought to address particular challenges of the IoT, such as low latency and high reliability and availability. Methods building on NB-IoT and mmWave radio as well as advances in, e.g., Bluetooth Low Energy (BLE), Radio Frequency Identification (RFID), LoRa/LoRaWAN, Sigfox, and 5G for IoT are welcome. Advances to industrially driven solutions and standards such as 6TiSCH or IEEE TSN are within scope.</li>
        </ul>
        <p className="text-xl text-center text-red-light">~~~</p>
        <ul>
          <li><strong>AI and Machine Learning for the IoT:</strong> AI and Machine Learning research applied to all aspects of the IoT is welcome. This includes deep and reinforcement learning on IoT data sets, optimization of IoT technologies based on Machine Learning, self-driving networks and self-organization, networked AI, artificially intelligent or autonomous devices, and approaches to "IoT intelligence" in cognitive machines, autonomous vehicles, and edge intelligence.</li>
          <li><strong>Sensing, Signal Processing, Actuation and Analytics:</strong> New methods to sense and process signals from the physical world are encouraged. This may include analytics performed over sensor data streams at various points in the overall system architecture, event detection, object identification and localization, and novel control methods for intelligent actuation.</li>
          <li><strong>Energy Efficiency and Sustainability in the IoT:</strong> Novel approaches to energy-efficient and sustainable operation of connected devices are welcome. These may include efficient communication protocols, signal processing and compression techniques, energy harvesting, scavenging, and power transfer technologies.</li>          
          <li><strong>Real-world Applications, Deployments and Testbeds:</strong> Papers describing novel real-world IoT applications, deployments of cyber-physical systems, and new testbed facilities are welcome. Evaluation of relevant real-world challenges (connectivity, reliability, scalability, etc.) is of particular interest. Examples may include those relevant to Industry 4.0, Smart Cities, Precision Agriculture, Healthcare, Logistics/Supply Chain Management (GS1/EPCGlobal), etc.</li>
        </ul>
        <p className="text-xl text-center text-red-light">~~~</p>
        <ul>
           <li><strong>Interacting with the IoT:</strong> Novel methods and techniques for seamless human-to-object and object-to-object interactions, including visual, brain, audible, persuasive, embodied, tangible interaction and augmented or mixed reality are invited. Usability of the IoT and user experience studies are welcomed, as well as new interaction concepts emerging from being surrounded by smart devices. HCI in manufacturing and Industry 4.0 environments is particularly welcome.</li>
           <li><strong>Security, Privacy and Trust in the IoT:</strong> Advances in delivering secure, trustworthy and privacy-preserving IoT applications and systems are essential to promote widespread adoption. Papers describing new robust ways to achieve this objective are sought.</li>
           <li><strong>Societal Impact of the IoT:</strong> To understand the impact of millions of IoT devices on society, case studies are encouraged that emerge from living in hyper-connected societies where automation through IoT and delegation of tasks is present. Advances on the Social Internet of Things and bridging IoT intelligence and human intelligence to cope with societal challenges (e.g. sustainability, wellbeing, food security or secure societies) are complementary to the conference scope.</li>        
        </ul>
        <br /><br />
        <h2 className="text-teal font-serif">Important Dates:</h2>
        <br />
        <p className="pl-4">
          <ul className="sm:list-reset">
            <li><strong className="text-grey-darker">Submissions:</strong> <strike className="text-red-light"> June 2, 2019</strike>  <strike className="text-purple-light"><strong className="text-purple-light text-lg">June 16, 2019</strong> (<a class="no-underline hover:font-bold text-purple-light" href="https://en.wikipedia.org/wiki/Anywhere_on_Earth">23:59 AoE</a>)</strike></li>
            <li><strong className="text-grey-darker">Notifications:</strong> July 16, 2019 </li>
            <li><strong className="text-grey-darker">Camera-ready:</strong> September 1, 2019</li>
            <li><strong className="text-grey-darker">Conference:</strong> October 22-25, 2019</li>
          </ul>
        </p>
        <br /><br />
        <h2 className="text-teal font-serif">Preparing and Submitting Your Papers:</h2>
        <br />
        <p className="pl-4">
          <ul className="sm:list-reset">
            <li><strong className="text-grey-darker">ACM SIGCHI Conference format:</strong> <a class="no-underline text-teal hover:font-bold" href="https://www.overleaf.com/gallery/tagged/acm-official#.WOuOk2e1taQ" target="_blank" rel="noopener noreferrer">overleaf</a>, <a class="no-underline text-teal hover:font-bold" href="https://www.acm.org/binaries/content/assets/publications/consolidated-tex-template/acmart-master.zip" target="_blank" rel="noopener noreferrer">latex</a>, <a class="no-underline text-teal hover:font-bold" href="https://www.acm.org/binaries/content/assets/publications/word_style/interim-template-style/interim-layout-.docx" target="_blank" rel="noopener noreferrer">docx</a> </li>
            <li><strong className="text-grey-darker">Full papers:</strong> max. 8 pages</li>
            <li><strong className="text-grey-darker">Short papers:</strong> max. 4 pages</li>
            <li><strong className="text-grey-darker">Submission:</strong> <a class="no-underline text-teal hover:font-bold" href="https://easychair.org/my/conference?conf=iot2019" target="_blank" rel="noopener noreferrer">EasyChair conference system</a></li>
          </ul>
        </p>
        <br />
        Researchers interested should submit their paper via our  <a class="no-underline text-teal hover:font-bold" href="https://easychair.org/my/conference?conf=iot2019" target="_blank" rel="noopener noreferrer">EasyChair conference system</a>, must be written in English and contain original material that has not been published or is currently undergoing review elsewhere. Full papers should not exceed 8 pages and the limit for short papers is 4 pages. Both limits include figures and references. 
        <br /><br />The paper layout should follow the <a class="no-underline text-teal hover:font-bold" href="https://www.acm.org/publications/proceedings-template" target="_blank" rel="noopener noreferrer">ACM SIGCHI Conference format</a> (<a class="no-underline text-teal hover:font-bold" href="https://www.overleaf.com/gallery/tagged/acm-official#.WOuOk2e1taQ" target="_blank" rel="noopener noreferrer">overleaf</a>, <a class="no-underline text-teal hover:font-bold" href="https://www.acm.org/binaries/content/assets/publications/consolidated-tex-template/acmart-master.zip" target="_blank" rel="noopener noreferrer">latex</a>, <a class="no-underline text-teal hover:font-bold" href="https://www.acm.org/binaries/content/assets/publications/word_style/interim-template-style/interim-layout-.docx" target="_blank" rel="noopener noreferrer">docx</a>). Please, authors using Latex use the "sample-sigconf.tex" file included in the zip to write your manuscript. 
        <br /><br />Papers will be peer-reviewed by three experts of the scientific committee following a single-blind review process (i.e. identity of the reviewer is anonymous, but the author’s name and affiliation are on the paper). The papers will be selected based on technical novelty, integrity of the analysis, and practical relevance and impact. 
        <br />Accepted papers will be listed on DBLP and published via the ACM Digital Library. Cases of plagiarism or multiple submissions will be subject to disciplinary action as per ACM rules and regulations, and no-shows at the conference will result in an exclusion from the ACM Digital Library.
        Selected papers will be invited to extend and improve their contributions to  Special Issues listed in the home of this website.

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

export default PapersPage;
