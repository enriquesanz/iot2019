import React from "react";
import SEO from '../components/seo'
import Layout from '../components/layout'
import Sponsors from "../components/sponsors";
import Alex from "../images/committee/alex.jpg";
import Benoit from "../images/committee/benoit.jpg";
import Andy from "../images/committee/andy-stanford-clark.jpg";



const KeynotesPage = () => (
    <Layout>
    <SEO
      title="Keynotes"
      keywords={[`iot2019`, `conference`, `iot` ]}
    />
    <div className="flex ">
      <div className="md:w-3/3 md:mr-8">
        <p className="border-l-4 border-red-light text-grey-darker font-serif leading-loose pl-4 text-justify ">
          <h1>Keynotes</h1>
        </p>
        <br />  
            

          <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              
              <p className="text-sm text-grey-dark flex items-center">
                  Keynote October 23, 2019
              </p>
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full mr-4" src={Alex} alt="Alexandra Deschamps-Sonsino" />
                <div className="text-sm">
                  <p className="text-black leading-none text-lg font-sans">Alexandra Deschamps-Sonsino</p>
                  <p className="text-grey-dark ">Designswarn, UK</p>
                </div>
              </div>
              
              <div className="mb-12">
                <p className="text-grey-darker text-base text-justify">She was named 1st in a list of 100 Internet of Things Influencers (Postscapes, 2016), 2nd in Top 100 Internet of Things Thought Leaders (Onalytica, 2014) and in the Top 100 Influencial Tech Women on Twitter (Business Insider, 2014). She's been included in the longlist of Computer Weekly's Most Influential Women in Tech in the UK (2017 & 2018).
                She has been organising the London Internet of Things Meetup since 2011 and its now the 2nd largest meetup in the world on this topic. Finally, because of her  background in industrial and interaction design, she was the first UK distributor of the Arduino and is the founder of the Good Night Lamp which is in the permanent collection of the London Design Museum. </p>
              </div>
              <div className="mb-12">
                <p className="text-sm text-grey-dark flex items-center">
                  Abstract
                </p>
              <div className="text-black font-bold text-xl mb-2"> The Smart Home Illusion</div>
                <p className="text-grey-darker text-base text-justify">What exactly is the smart home? From a systematic view of home living, to a technical utopia of interoperable experiences the home is the host of many visions created by inventors, industrialists, corporations, architects and designers. Based on her book 'Smarter Homes: how technology will change your home life' (Apress, 2018) Alex will describe some of the hidden agendas that do guide design for the home space. Some of these include the transitions between invention & innovation, the need to find justifications for technical progress, the problem of keeping consumption patterns predictable in a post-war Europe and women's time and space in society. Alex will connect these agendas with today's internet of things work, research and general direction. </p>
              </div>
          </div>


          <br />

          <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <p className="text-sm text-grey-dark flex items-center">
                  Keynote October 24, 2019
              </p>
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full mr-4" src={Andy} alt="Andy Stanford-Clark" />
                <div className="text-sm">
                  <p className="text-black leading-none text-lg font-sans">Andy Stanford-Clark</p>
                  <p className="text-grey-dark ">IBM CTO  - UK and Ireland</p>
                </div>
              </div>
              
              <div className="mb-12">
                <p className="text-grey-darker text-base text-justify">Professor Andy Stanford-Clark is the Chief Technology Officer for IBM in UK and Ireland. He is an IBM Distinguished Engineer and Master Inventor with more than 40 patents. Andy is based at IBM's Hursley Park laboratories in the UK, and has has been working in the area that we now call the Internet of Things for more than 20 years: he co-developed the MQTT messaging protocol in 1998, which is now an ISO/IEC standard. He is an enthusiastic "maker", and is exploring 3D printing. He has a BSc in Computing and Mathematics, and a PhD in Computer Science. He is a Visiting Professor at the University of Newcastle, an Honorary Professor at the University of East Anglia, an Adjunct Professor at the University of Southampton, and a Fellow of the British Computer Society. </p>
              </div>

              <div className="mb-12">
                <p className="text-sm text-grey-dark flex items-center">
                  Abstract
                </p>
              <div className="text-black font-bold text-xl mb-2"> Innovation Begins at Home</div>
                <p className="text-grey-darker text-base text-justify">Andy will take us on a tour of some of his exciting IoT projects, starting in the "living lab" he has created at his home on the Isle of Wight in the UK, including his electronic mousetraps. Via tweeting ferries and animatronic dinosaurs, we end up at Marwell zoo in Hampshire, controlling the heating in the animal houses. Andy will explain the MQTT IoT protocol which under-pins these projects, and talk about his current interest: physical digital twins.</p>
              </div>

          </div>


          <br />

          <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <p className="text-sm text-grey-dark flex items-center">
                  Keynote October 25, 2019
                </p>
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full mr-4" src={Benoit} alt="Benoit Piranda" />
                <div className="text-sm">
                  <p className="text-black leading-none text-lg font-sans">Benoit Piranda</p>
                  <p className="text-grey-dark ">Member of Department of Computing Univ. Bourgogne-Franche-Comté, Institut FEMTO-ST, CNRS (France)</p>
                </div>
              </div>
              <div className="mb-12">
                
              
                <p className="text-grey-darker text-base text-justify">Benoît Piranda is Associate Professor of Computer Science at the University of Franche-Comté in France. He is part of the Complex Networks Team (DISC/OMNI) of the FEMTO-ST Institute, CNRS. His main domains of research are Distributed Programming, Physical and Visual Simulations of Robots and Computer Graphics (Image Synthesis). He is the author of about 20 papers in these subjects. He is an active member of many projects on Programmable Matter and Distributed Algorithms (ANR Programmable Matter, UBFC ISITE Programmable Matter, CO2DIM, Smart Blocks). 
He leads the development of the VisibleSim software which is a behavioral simulator of modular robots (http://projects.femto-st.fr/projet-visiblesim/en). This simulator executes in parallel every code running simultaneously in thousands of modules, simulates communications, motions, physical interactions, and various sensors and actuators. 
Benoît Piranda has also worked on the organization of conferences, served as Program Chair or Publicity Chair and was member of the Program Committees (DARS 2018, IEEE ATC 2017, IEEE EUC 2016, IEEE CSE 2016, IEEE HPCC 2014, IEEE Ithings 2012, IEEE GreenCom 2012, IEEE CPSCom 2012) and chaired various conferences sessions.</p>
              </div>

              <div className="mb-12">
                <p className="text-sm text-grey-dark flex items-center">
                  Abstract
                </p>
              <div className="text-black font-bold text-xl mb-2">Programming and forming objects with modular robots to enable a programmable matter</div>
                <p className="text-grey-darker text-base text-justify">Technological advances, especially in the miniaturization of robotic devices foreshadow the emergence of large-scale ensembles of small-size resource-constrained robots that distributively cooperate to achieve complex tasks. These ensembles are formed by independent, intelligent and communicating units which act as a whole ensemble which can be used to build programmable matter i.e. matter able to change its shape. In my talk, I will present our research effort in building Programmable Matter (PM) based on modular robots. To do this, we use micro-technology to scale down the size of each element, and we study geometry, structure, actuation, power, electronics and integration. To manage the complexity of this kind of environment, we propose a complete environment including programmable hardware, a programming language, a compiler, a simulator, a debugger and distributed algorithms</p>
              </div>

            </div>

          
          
      </div>
      
  </div>
  <br/><br/>
  <p>
         {/* <Publishers />*/}
          <Sponsors />

  </p>

  </Layout>
);

export default KeynotesPage;