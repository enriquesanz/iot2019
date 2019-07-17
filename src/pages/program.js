import React from "react";
import Sponsors from "../components/sponsors";
import Layout from '../components/layout'
import SEO from '../components/seo'

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
            <p className="font-sans leading-loose pl-8 ">
              Program will be announced soon.
          
            </p>
          </div>          
    
    </p>
     <br /> <br />
    <div className="flex">
      <p className="font-sans leading-normal pl-4 text-justify text-lg  ">
        <h2 className="text-teal font-serif">Accepted workshops:</h2>
        The accepted workshops are listed below:
        <br /><br />
        <ul>
          <li><strong>Learning from Smart Cities Open Research Experiences (SCORE)</strong> Research and development efforts into smart cities have myriad number of focus. For example, UK Department for Business, Innovation and Skills (BIS) definition: "smart cities a process rather than a static outcome, in which increased citizen engagement, hard infrastructure, social capital and digital technologies make cities more liveable, resilient and better able to respond to challenges", focuses on resilience and liveability. IBM’s definition: "(Smart City is) one that makes optimal use of all the interconnected information available today to better understand and control its operations and optimize the use of limited resources" focuses on use of information available. European Commission’s definition has focus on technologies: "Cities using technological solutions to improve the management and efficiency of the urban environment." There are also transnational and international differences between different countries and continents in terms of what makes a city ‘Smart’, or how they perceive what smart cities development requires. As the variety of perspectives highlight, smart cities development require multi-disciplinary efforts involving technologists, social/behaviour scientists, city planners, policy makers, engineers, data communication experts, and citizens, to name a few. Although on the rise, the current smart cities solutions are still maturing and not always utilising such multi-disciplinary expertise. Lessons also can be learned from the commonalities and differences in between different smart cities developments. Hence, greater benefits can be achieved by bringing together expertise from different communities, including IoT/Big Data, Policy Making, Social Science, and Citizen science with the potential application domain demands. Time is ripe to bring together these different disciplines related to smart cities open research and form an international community to identify the major challenges and research directions. The workshop is intended to make the first step in shaping such community and providing a forum that focuses on inter-disciplinary learnings related to smart cities.</li>
          <li><strong>Connected World/Web & Semantic Interoperability Workshop - CWSI 2019</strong> A Connected World/Web of Things is an emerging area that not only requires development of infrastructure but also deployment of new data services capable of supporting multiple, scalable (cloud-based) and interoperable (cross-systems and cross-domain) applications. In the race of designing the Connected World/Web as part of the Future Internet architecture, academia and Information and Communication Technology (ICT) industry communities have realized that a common problem to be tackled is the interoperability of the data and their availability for providing information services. Worldwide there is an increasingly focusing on how to evolve communications technologies to enable a Connected World, thus Semantic-enabled Web of Things systems will need to interact and be interconnected for offering the always-promoted everything-connected interoperability paradigm. The Connected World/Web & Semantic Interoperability workshop provides to developers, scientific researchers, industry experts and general audience interested in the evolution of the Internet of connected things world, the possibility to explore interoperability research challenges and provide a room to expose their research scientific ideas and progress and also explore new trends and opportunities of using semantic web technologies for solving problems and creating new solutions on emerging specialized paradigms like the current Internet of connected Things or simply acknowledge as Internet of Things (IoT).</li>
          <li><strong>1st Workshop on Cyber-Physical Social Systems for smart cities (CyPhySS4Cities) 2019</strong> The Smart City model is growing around the prototype of an urban environment with a new generation of innovative services for transportation, energy distribution, healthcare, environmental monitoring, business, emergency response, and social activities. Enabling the technology for such a setting requires a viewpoint of Smart Cities as system of cyber-physical and social systems (SCPSSs) which are the result of the integration of several technologies that cooperate to provide seamless services to end users.
Such technologies enable the collection, storage, and processing of massive amount of data gathered from the environment and/or produced by citizens themselves. Social interactions amongst participants are promoted as well.
ChyPhySS4Cities 2019 wants to present innovative research trends and to explore new challenges in the field of smart cities as a system of cyber – physical systems crossed with the social perspective. The aim of the workshop is to bring together researchers, practitioners, smart city operators and industries working in the field in order to cross-fertilize theoretical and practical aspects.will need to manually include the balance of text into column 2 on the next page. Use a good breaking point (like an end of a sentence).</li>
          <li><strong>IoF2020: Internet of Food and Farm 2020</strong> The IoF2020 project is dedicated to accelerate adoption of IoT for securing sufficient, safe and healthy food and to strengthen competitiveness of farming and food chains in Europe. It will consolidate Europe’s leading position in the global IoT industry by fostering a symbiotic ecosystem of farmers, food industry, technology providers and research institutes. The IoF2020 consortium of 73 partners, led by Wageningen UR and other core partners of previous key projects such as FIWARE and IoT-A, will leverage the ecosystem and architecture that was established in those projects. The heart of the project is formed by 19 use cases grouped in 5 trials with end users from the Arable, Dairy, Fruits, Vegetables and Meat verticals and IoT integrators that will demonstrate the business case of innovative IoT solutions for a large number of application areas. A lean multi-actor approach focusing on user acceptability, stakeholder engagement and sustainable business models will boost technology and market readiness levels and bring end user adoption to the next stage.</li>
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
