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
      <h1 className="text-grey-darker font-serif">Accepted Workshops</h1>
      The accepted workshops are listed below:
      <br />
      <br />
      {/*<h1 className="text-grey-darker font-serif">Workshop Proposals</h1>
      <p className="text-left text-teal">
      <a class="no-underline text-teal hover:font-bold" href = "mailto:iot2019@deusto.es?subject=[iot2919][workshop]"><strong><font color="grey">Contact:</font></strong> iot2019@deusto.es</a></p><br />
      Workshops collocated with the 9th International Conference on the Internet of Things (IoT 2019) are opportunities to strengthen communities of researchers and practitioners working in specific topics related to the IoT. These events foster the exchange of new ideas, ongoing work, and latests results, in established or emerging sub-domains of interest. They are opportunities for IoT pioneers and practitioners in industry to share hands-on experience with IoT systems (use cases, deployments, architectures, etc.), and for researchers to present and receive feedback on early research result. Approved workshops  will be announced on the conference website.

    */}
      </p>

    <br /><br />

    <div className="flex">
      <p className="font-sans leading-normal pl-4 text-justify text-base">
      {/*<h2 className="text-teal font-serif">Accepted workshops:</h2>
        The accepted workshops are listed below:
        <br /><br />*/}
        <ul>  
          {/*<li><strong><a class="no-underline text-teal hover:font-bold" href="https://scoreworkshop2019.wordpress.com/" target="_blank" rel="noopener noreferrer">Learning from Smart Cities Open Research Experiences (SCORE)</a></strong> Research and development efforts into smart cities have myriad number of focus. For example, UK Department for Business, Innovation and Skills (BIS) definition: "smart cities a process rather than a static outcome, in which increased citizen engagement, hard infrastructure, social capital and digital technologies make cities more liveable, resilient and better able to respond to challenges", focuses on resilience and liveability. IBM’s definition: "(Smart City is) one that makes optimal use of all the interconnected information available today to better understand and control its operations and optimize the use of limited resources" focuses on use of information available. European Commission’s definition has focus on technologies: "Cities using technological solutions to improve the management and efficiency of the urban environment." There are also transnational and international differences between different countries and continents in terms of what makes a city ‘Smart’, or how they perceive what smart cities development requires. As the variety of perspectives highlight, smart cities development require multi-disciplinary efforts involving technologists, social/behaviour scientists, city planners, policy makers, engineers, data communication experts, and citizens, to name a few. Although on the rise, the current smart cities solutions are still maturing and not always utilising such multi-disciplinary expertise. Lessons also can be learned from the commonalities and differences in between different smart cities developments. Hence, greater benefits can be achieved by bringing together expertise from different communities, including IoT/Big Data, Policy Making, Social Science, and Citizen science with the potential application domain demands. Time is ripe to bring together these different disciplines related to smart cities open research and form an international community to identify the major challenges and research directions. The workshop is intended to make the first step in shaping such community and providing a forum that focuses on inter-disciplinary learnings related to smart cities. <a class="no-underline text-teal hover:font-bold" href = "mailto:dhavalkumar.thakker@gmail.com?subject=[iot2019][workshop]"><strong><font color="grey">Contact:</font></strong>  dhavalkumar.thakker@gmail.com </a><br /><br /></li>*/}
          <li><strong><a class="no-underline text-teal hover:font-bold" href="http://www.iot-cwsi.org/" target="_blank" rel="noopener noreferrer">Connected World/Web & Semantic Interoperability Workshop - CWSI 2019</a></strong> A Connected World/Web of Things is an emerging area that not only requires development of infrastructure but also deployment of new data services capable of supporting multiple, scalable (cloud-based) and interoperable (cross-systems and cross-domain) applications. In the race of designing the Connected World/Web as part of the Future Internet architecture, academia and Information and Communication Technology (ICT) industry communities have realized that a common problem to be tackled is the interoperability of the data and their availability for providing information services. Worldwide there is an increasingly focusing on how to evolve communications technologies to enable a Connected World, thus Semantic-enabled Web of Things systems will need to interact and be interconnected for offering the always-promoted everything-connected interoperability paradigm. The Connected World/Web & Semantic Interoperability workshop provides to developers, scientific researchers, industry experts and general audience interested in the evolution of the Internet of connected things world, the possibility to explore interoperability research challenges and provide a room to expose their research scientific ideas and progress and also explore new trends and opportunities of using semantic web technologies for solving problems and creating new solutions on emerging specialized paradigms like the current Internet of connected Things or simply acknowledge as Internet of Things (IoT). <a class="no-underline text-teal hover:font-bold" href = "mailto:achille.zappa@insight-centre.org?subject=[iot2019][workshop]"><strong><font color="grey">Contact:</font></strong> achille.zappa@insight-centre.org </a><br /><br /></li>
          <li><strong><a class="no-underline text-teal hover:font-bold" href="https://cpss.netsons.org/" target="_blank" rel="noopener noreferrer">1st Workshop on Cyber-Physical Social Systems for smart cities (CPSS)</a></strong> The Smart City model is growing around the prototype of an urban environment with a new generation of innovative services for transportation, energy distribution, healthcare, environmental monitoring, business, emergency response, and social activities. Enabling the technology for such a setting requires a viewpoint of Smart Cities as system of cyber-physical and social systems (SCPSSs) which are the result of the integration of several technologies that cooperate to provide seamless services to end users.
Such technologies enable the collection, storage, and processing of massive amount of data gathered from the environment and/or produced by citizens themselves. Social interactions amongst participants are promoted as well.
ChyPhySS4Cities 2019 wants to present innovative research trends and to explore new challenges in the field of smart cities as a system of cyber – physical systems crossed with the social perspective. The aim of the workshop is to bring together researchers, practitioners, smart city operators and industries working in the field in order to cross-fertilize theoretical and practical aspects.will need to manually include the balance of text into column 2 on the next page. Use a good breaking point (like an end of a sentence). <a class="no-underline text-teal hover:font-bold" href = "mailto:antonella.longo@unisalento.it?subject=[iot2019][workshop]"><strong><font color="grey">Contact:</font></strong> antonella.longo@unisalento.it</a><br /><br /></li>
          {/*<li><strong><a class="no-underline text-teal hover:font-bold" href="https://www.iof2020.eu/" target="_blank" rel="noopener noreferrer">IoF2020: Internet of Food and Farm 2020</a></strong> The IoF2020 project is dedicated to accelerate adoption of IoT for securing sufficient, safe and healthy food and to strengthen competitiveness of farming and food chains in Europe. It will consolidate Europe’s leading position in the global IoT industry by fostering a symbiotic ecosystem of farmers, food industry, technology providers and research institutes. The IoF2020 consortium of 73 partners, led by Wageningen UR and other core partners of previous key projects such as FIWARE and IoT-A, will leverage the ecosystem and architecture that was established in those projects. The heart of the project is formed by 19 use cases grouped in 5 trials with end users from the Arable, Dairy, Fruits, Vegetables and Meat verticals and IoT integrators that will demonstrate the business case of innovative IoT solutions for a large number of application areas. A lean multi-actor approach focusing on user acceptability, stakeholder engagement and sustainable business models will boost technology and market readiness levels and bring end user adoption to the next stage. <a class="no-underline text-teal hover:font-bold" href = "mailto:jorgesanchez@ual.es?subject=[iot2019][workshop]"><strong><font color="grey">Contact:</font></strong> jorgesanchez@ual.es</a></li>*/}
        </ul>

         <br /><br />
       {/*  <h2 className="text-teal font-serif">Workshop proposals:</h2>
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
        <br /><br /> */}
        


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
