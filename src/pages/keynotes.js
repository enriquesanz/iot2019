import React from "react";
import SEO from '../components/seo'
import Layout from '../components/layout'
import Sponsors from "../components/sponsors";
import Alex from "../images/committee/alex.jpg";


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
            {/*<div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-12">
                <p className="text-sm text-grey-dark flex items-center">
                  Abstract
                </p>
              <div className="text-black font-bold text-xl mb-2">From IoT to Ephemeral Computing:  Understanding Cyber-Physical  Interactions for Monitoring and Control</div>
                <p className="text-grey-darker text-base text-justify">Networks of sensor devices are being embedded into the world around us, however to ensure their continuous operation requires new network protocols, data analytics. Over the past 20 years work has progressed on such new technologies and systems and yet uptake has not been so forthcoming.  One needs to ask why has this been the case and makes the argument that a strong understanding of how the physical world impacts on the cyber world could be core to this issue; one of the many reasons that such systems once deployed simply under perform and are inherently unreliable. Understanding this cyber-physical interaction can not only provide a degree of assurances regarding sensor-based systems but can also help us to achieve more from them than before. Illustrating these concepts with concrete examples, this talk discusses the progression from embedded systems and the Internet of Things (IoT) through to what the future of such systems could look like and how this will bring about a world of Ephemeral Computing.</p>
              </div>
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full mr-4" src={Julie} alt="Julie McCann" />
                <div className="text-sm">
                  <p className="text-black leading-none text-lg font-sans">Julie McCann</p>
                  <p className="text-grey-dark ">Imperial College, UK</p>
                </div>
              </div>
              <div className="mb-12">
                <p className="text-sm text-grey-dark flex items-center">
                  Bio
                </p>
              
                <p className="text-grey-darker text-base text-justify">Julie A. McCann is a Professor in Computer Systems at Imperial College. Her research centres on highly decentralized and self-organizing scalable algorithms for spatial computing systems e.g. wireless sensing networks. or cyber-physical systems. She leads the Adaptive Embedded Systems Engineering Research Group and Directed the Intel Collaborative Research Institute for Sustainable Cities, and is currently working with IBM, CISCO and others on substantive smart city projects. She has received significant funding though bodies such as the UK's EPSRC and NERC as well as various international funds, and is an elected peer for the EPSRC. She has actively served on, and chaired, many conference committees and is a Fellow of the BCS and Charted Engineer.</p>
              </div>
            </div>*/}

          <br />

          <div className="border-r border-b border-l border-grey-light lg:border-l-0 lg:border-t lg:border-grey-light bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
              <div className="mb-12">
                <p className="text-sm text-grey-dark flex items-center">
                  Abstract
                </p>
              <div className="text-black font-bold text-xl mb-2"> The Smart Home Illusion</div>
                <p className="text-grey-darker text-base text-justify">What exactly is the smart home? From a systematic view of home living, to a technical utopia of interoperable experiences the home is the host of many visions created by inventors, industrialists, corporations, architects and designers. Based on her book 'Smarter Homes: how technology will change your home life' (Apress, 2018) Alex will describe some of the hidden agendas that do guide design for the home space. Some of these include the transitions between invention & innovation, the need to find justifications for technical progress, the problem of keeping consumption patterns predictable in a post-war Europe and women's time and space in society. Alex will connect these agendas with today's internet of things work, research and general direction. </p>
              </div>
              <div className="flex items-center">
                <img className="w-12 h-12 rounded-full mr-4" src={Alex} alt="Julie McCann" />
                <div className="text-sm">
                  <p className="text-black leading-none text-lg font-sans">Alexandra Deschamps-Sonsino</p>
                  <p className="text-grey-dark ">Designswarn, UK</p>
                </div>
              </div>
              <p className="text-sm text-grey-dark flex items-center">
                  Bio
              </p>
              <div className="mb-12">
                <p className="text-grey-darker text-base text-justify">She was named 1st in a list of 100 Internet of Things Influencers (Postscapes, 2016), 2nd in Top 100 Internet of Things Thought Leaders (Onalytica, 2014) and in the Top 100 Influencial Tech Women on Twitter (Business Insider, 2014). She's been included in the longlist of Computer Weekly's Most Influential Women in Tech in the UK (2017 & 2018).
                She has been organising the London Internet of Things Meetup since 2011 and its now the 2nd largest meetup in the world on this topic. Finally, because of her  background in industrial and interaction design, she was the first UK distributor of the Arduino and is the founder of the Good Night Lamp which is in the permanent collection of the London Design Museum. </p>
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