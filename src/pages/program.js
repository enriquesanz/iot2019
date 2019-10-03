import React from "react";
import Sponsors from "../components/sponsors";
import Layout from '../components/layout'
import SEO from '../components/seo'
import PreliminaryProgramm from "../files/PreliminaryProgram.pdf";

const ProgramPage = () => (
<Layout>
  <SEO
      title="Program"
      keywords={[`iot2019`, `conference`, `iot` ]}
    />
  
  <div className="flex flex-col md:flex-row items-center">
    <div className="md:w-3/3 md:mr-8">
      <p className="border-l-4 border-red-light  font-sans leading-normal text-lg pl-4 text-justify">
        <h1 className="text-grey-darker font-serif">Program</h1>
         <br />

          <div className="block md:flex xl:flex">
            <a class="no-underline text-teal hover:font-bold text-3xl" href={PreliminaryProgramm} target="_blank" rel="noopener noreferrer"> Click here to download the conference full program.</a>
          </div>          
    
    </p>
     <br /> <br />
    <div className="flex">

      <p className="font-sans leading-normal pl-4 text-justify text-base">
        <h2 className="text-teal font-serif">Accepted papers</h2>
        <h3 className="text-grey-darker font-serif">Full Papers</h3>
        <ul>
          <li>Providing Fault Tolerance via Complex Event Processing and Machine Learning for IoT Systems</li>
          <li>Interoperable Digital Twins in IIoT Systems by Transformation of Information Models</li>
          <li>Quality-aware Service Selection Approach for Adaptive Context Recognition in IoT</li>
          <li>Achieving Accurate Room-Level Indoor Location Estimation with Emerging IoT Networks</li>
          <li>How IOT and computer vision could improve the casting quality</li>
          <li>Non-interactive Certificate Update Protocol for Efficient Authentication in IoT</li>
          <li>A Scalable Software Update Service for IoT Devices in Urban Scenarios</li>
          <li>Interactive Machine Learning for the Internet of Things: A Case Study on Activity Detection</li>
          <li>Scalable Identity and Key Management for Publish-Subscribe Protocols in the Internet-of-Things</li>
          <li>MyAQI: Context-aware Outdoor Air Pollution Monitoring System</li>
          <li>Energy-Accuracy Tradeoff for Efficient Noise Monitoring and Prediction inWorking Environments</li>
          <li>Blockchain-based Data Provenance for the Internet of Things</li>
          <li>Simplicity is Best: Addressing the Computational Cost of Machine Learning Classifiers in Constrained Edge Devices</li>
          <li>Using BPM Technology to Deploy and Manage Distributed Analytics in Collaborative IoT-Driven Business Scenarios</li>
          <li>Real-time IoT Road Traffic Data Monitoring using LoRaWAN</li>
          <li>MAPO: A Multi-Objective Model for IoT Application Placement in a Fog Environment</li>
          <li>Towards Somaesthetic Smarthome Designs: Exploring Potentials and Limitations of an Affective Mirror</li>
          <li>Enabling easyWeb of Things compatible device generation using a Model-Driven Engineering approach</li>
          <li>Towards Identification of Packaged Products via Computer Vision</li>
          <li>Escaping the Streetlight Effect: Semantic Hypermedia Search Enhances Autonomous Behavior in the Web of Things</li>
        </ul>
        <h3 className="text-grey-darker font-serif">Short Papers</h3>
        <ul>
        <li>The Makers’ Beehives: Smart Beehives for Monitoring Honey-Bees’ Activities</li>
        <li>Embracing Opportunities of Livestock Big Data Integration with Privacy Constraints</li>
        <li>User Involvement Matters: The Side-Effects of Automated Smart Objects in Pro-environmental Behaviour</li>
        <li>WoTbench: A Benchmarking Framework for the Web of Things</li>
        <li>Privacy-Preserving IoT Cloud Data Processing Using SGX</li>
        <li>IoT fault management in cloud/fog environments</li>
        <li>Trusted Lightweight Communication for IoT Systems Using Hardware Security</li>
        <li>Put that Hologram there - Probing Mobile Interaction Experiences for a Vision of Mixed Material Public Spaces</li>        
        </ul>            
        <br />
        
        <h2 className="text-teal font-serif">Accepted Demos and Posters:</h2>
          <ul>
            <li>Calibration Transfer for Food Recognition Models for E-Noses</li>
            <li>Sensor Gym: Training Autonomous IoT Devices with Deep Reinforcement Learning</li>
            <li>POSTER: Human-Drone Teaming: Use Case Bookshelf Inventory</li>
            <li>Event-Based Single-Person 2D Human Pose Estimation in Real Time</li>
            <li>Workflow-based Setup of Smart Devices in Mixed Reality</li>
            <li>Creating Awareness in Embedded Systems - IoT enabled Temperature-Awareness in PLCs</li>
            <li>Toward a Delay Tolerant Internet of Things</li>
            <li>An Interactive Interface for Bulk Software Deployment in IoT</li>
          </ul>
        <br />      

        <h2 className="text-teal font-serif">Accepted Doctoral Colloquium:</h2>
          <ul>
            <li>Network Coding for IIoT Multi-Cloud Environments</li>
            <li>Achieving Robust and Reliable Wireless Communications in Hostile In-Car Environments</li>
            <li>Asset-Oriented Access Control: Towards an IoT Framework</li>
            <li>A Novel Semantic Complex Event Processing (SCEP) Framework for Stream Processing</li>
          </ul>
        <br />      

        <h2 className="text-teal font-serif">Accepted workshops:</h2>
        <ul>
          <li><strong><a class="no-underline text-teal hover:font-bold" href="http://www.iot-cwsi.org/" target="_blank" rel="noopener noreferrer">Connected World/Web & Semantic Interoperability Workshop - (CWSI) </a></strong> </li>
          <li><strong><a class="no-underline text-teal hover:font-bold" href="https://cpss.netsons.org/" target="_blank" rel="noopener noreferrer">1st Workshop on Cyber-Physical Social Systems for smart cities (CPSS)</a></strong></li>          
        </ul>
        
        

      </p>
    </div>
    
    <div className="block md:flex xl:flex">
        <p className="font-sans leading-loose pl-8 ">
         </p>
    </div>

    <br />
        
    <br/><br/>
    <br/><br/>

    <p>
        {/*<Publishers />*/}
        <Sponsors />
    </p>

    </div>
  </div>

</Layout>

);

export default ProgramPage;
